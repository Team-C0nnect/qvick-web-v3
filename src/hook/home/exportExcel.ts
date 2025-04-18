import * as XLSX from 'xlsx-js-style';

// 구성원 정보 인터페이스
interface Member {
  room: string;    // 방 번호
  stdId: string;   // 학번
  name: string;    // 이름
  checked?: boolean; // 출석 여부
  checkedDate: string;
}

// 페이지 그룹 인터페이스
interface PageGroup {
  name: string;    // 그룹명
  rooms: string[]; // 해당 그룹에 포함된 방 번호 목록
}

// xlsx-js-style에서 직접 제공하지 않는 Border 타입 정의
interface Border {
  style: string;
  color: { rgb: string };
}

const FLOOR_CONFIG = {
  floors: [
    { floor: 2, start: 1, end: 18 },  // 2층은 01~18호
    { floor: 3, start: 1, end: 15 },  // 3층은 01~17호
    { floor: 4, start: 1, end: 15 },  // 4층은 01~17호
    { floor: 5, start: 1, end: 15 },  // 5층은 01~17호
  ],
  
  // 시작호실-끝 호실
  pageGroups: [
    { floor: 2, groups: [{ start: 1, end: 6 }, { start: 7, end: 12 },{ start: 13, end: 18 }]}, //여자기숙사 201-206, 207-212, 213-218
    { floor: 3, groups: [{ start: 1, end: 8 }, { start: 9, end: 15 }] },
    { floor: 4, groups: [{ start: 1, end: 9 }, { start: 10, end: 15 }] },
    { floor: 5, groups: [{ start: 1, end: 9 }, { start: 10, end: 15 }] }
  ],
  
  // 방 번호 형식 생성 함수
  formatRoomNumber: (floor: number, room: number): string => {
    return `${floor}${room.toString().padStart(2, '0')}`;
  }
};

export const exportToExcel = (data: Member[]) => {
  // 설정 상수
  const MAX_ROWS_PER_PAGE = 44;                          // 페이지당 최대 행 수
  const FILL_COLOR_GRAY = { fgColor: { rgb: 'D9D9D9' } }; // 회색 배경색
  const BORDER_THIN: Border = { style: 'thin', color: { rgb: '000000' } };  // 얇은 테두리
  const BORDER_THICK: Border = { style: 'medium', color: { rgb: '000000' } }; // 중간 두께 테두리
  const COL_WIDTHS = [8, 15, 15, 15, 27];                // 열 너비 (호실, 학번, 성명, 출석여부, 비고)
  const FONT_SIZES = {
    title: 20,      // 타이틀 글꼴 크기
    header: 12,     // 헤더 글꼴 크기 
    dataA: 12,      // A열(호실) 글꼴 크기
    dataOther: 12,  // 나머지 열 글꼴 크기
    noteHeader: 12, // 필기용 헤더 글꼴 크기
    note: 10        // 필기용 빈칸 글꼴 크기
  };
  const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"]; // 요일명
  
  // 방 번호 순서 생성
  const roomOrder = generateRoomOrder();
  
  // 방 번호별로 데이터 정렬 및 그룹화
  const roomMap = groupMembersByRoom(data, roomOrder);
  
  // 워크북 생성
  const workbook = XLSX.utils.book_new();
  
  // 페이지 그룹 정의
  const pageGroups = definePageGroups(roomOrder);
  
  // 각 페이지 그룹에 대한 워크시트 생성
  pageGroups.forEach(group => {
    const worksheet = createWorksheet(
      group, 
      roomMap, 
      MAX_ROWS_PER_PAGE, 
      FILL_COLOR_GRAY, 
      BORDER_THIN, 
      BORDER_THICK, 
      COL_WIDTHS, 
      FONT_SIZES,
      DAY_NAMES
    );
    
    // 워크북에 워크시트 추가
    XLSX.utils.book_append_sheet(workbook, worksheet, group.name);
  });
  
  // 엑셀 파일 저장
  XLSX.writeFile(workbook, '기숙사_출석부.xlsx');
};

/**
 * 방 번호 순서 생성 함수
 * 각 층(3, 4, 5층)의 01~17호실 순서대로 목록 생성
 */
function generateRoomOrder(): string[] {
  const roomOrder: string[] = [];

  FLOOR_CONFIG.floors.forEach(floorInfo => {
    for (let i = floorInfo.start; i <= floorInfo.end; i++) {
      roomOrder.push(FLOOR_CONFIG.formatRoomNumber(floorInfo.floor, i));
    }
  });

  return roomOrder;
}

/**
 * 구성원을 방 번호별로 정렬하고 그룹화하는 함수
 * @param data 구성원 목록
 * @param roomOrder 방 번호 순서
 * @returns 방 번호별로 그룹화된 구성원 맵
 */
function groupMembersByRoom(data: Member[], roomOrder: string[]): Record<string, Member[]> {
  // 방 번호와 학번에 따라 데이터 정렬
  const sortedData = [...data].sort((a, b) => {
    const roomDiff = roomOrder.indexOf(a.room) - roomOrder.indexOf(b.room);
    if (roomDiff !== 0) return roomDiff;
    return a.stdId.localeCompare(b.stdId);
  });
  
  // 방 번호별로 그룹화
  const roomMap: Record<string, Member[]> = {};
  sortedData.forEach(member => {
    if (!roomMap[member.room]) roomMap[member.room] = [];
    roomMap[member.room].push(member);
  });
  
  return roomMap;
}

/**
 * 페이지 그룹 정의 함수
 * 각 층별로 방 범위에 따라 그룹 분할
 * @param roomOrder 방 번호 순서
 * @returns 페이지 그룹 목록
 */
function definePageGroups(roomOrder: string[]): PageGroup[] {
  const pageGroups: PageGroup[] = [];
  
  FLOOR_CONFIG.pageGroups.forEach(floorGroup => {
    floorGroup.groups.forEach(group => {
      const startRoom = FLOOR_CONFIG.formatRoomNumber(floorGroup.floor, group.start);
      const endRoom = FLOOR_CONFIG.formatRoomNumber(floorGroup.floor, group.end);
      const groupName = `${startRoom}-${endRoom}`;
      
      const startRoomNum = Number(startRoom);
      const endRoomNum = Number(endRoom);
      
      const rooms = roomOrder.filter(room => {
        const roomNum = Number(room);
        return roomNum >= startRoomNum && roomNum <= endRoomNum;
      });
      
      pageGroups.push({ name: groupName, rooms });
    });
  });
  
  return pageGroups;
}

/**
 * 워크시트 생성 함수
 * 해당 페이지 그룹에 대한 워크시트 생성 및 스타일 적용
 */

function createWorksheet(
  group: PageGroup, 
  roomMap: Record<string, Member[]>,
  maxRowsPerPage: number,
  fillColorGray: { fgColor: { rgb: string } },
  borderThin: Border,
  borderThick: Border,
  colWidths: number[],
  fontSizes: { title: number, header: number, dataA: number, dataOther: number, noteHeader: number, note: number },
  dayNames: string[]
): XLSX.WorkSheet {
  // 워크시트 데이터 초기화 - 타이틀 행 추가
  const aoa: (string | number)[][] = [
    ['저녁 점호 체크리스트', '', '', '', ''], // 새 타이틀 행 추가
    ['호실', '학번', '성명', '출석 여부', '비고'] // 기존 헤더 행
  ];
  
  const merges: XLSX.Range[] = [
    // A~E 열 병합 (첫 번째 행)
    { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }
  ];
  
  const cellStyles: Record<string, any> = {}; // XLSX.CellStyle이 내보내지지 않아 any 사용
  
  // 타이틀 셀 스타일 미리 지정
  cellStyles['A1'] = {
    font: {
      sz: fontSizes.title, // 더 큰 글꼴 크기 (20pt)
      bold: true,
      name: '맑은 고딕'
    },
    alignment: {
      vertical: 'center',
      horizontal: 'center'
    }
  };
  
  let rowIndex = 2; // 헤더가 2줄이므로 데이터는 인덱스 2부터 시작
  const thickTopRows: number[] = [0, 1]; // 타이틀 행과 헤더 행 모두 굵은 테두리 적용
  
  // 각 방의 데이터 추가
  group.rooms.forEach(room => {
    addRoomData(room, roomMap, aoa, merges, cellStyles, thickTopRows, rowIndex, fillColorGray);
    rowIndex += 4; // 각 방은 4행 차지
  });
  
  // 필기용 공간 계산
  const totalRows = rowIndex;
  const notesNeeded = Math.max(5, maxRowsPerPage - totalRows);
  
  // 필기용 섹션 추가
  addNotesSection(aoa, merges, rowIndex, notesNeeded, dayNames);
  rowIndex += notesNeeded;
  
  // 워크시트 생성
  const worksheet = XLSX.utils.aoa_to_sheet(aoa);
  worksheet['!merges'] = merges;
  
  // 열 너비 설정
  worksheet['!cols'] = colWidths.map(width => ({ width }));
  
  // 행 높이 설정
  worksheet['!rows'] = Array.from({ length: maxRowsPerPage }, (_, i) => {
    // 첫 번째 행(타이틀 행)의 높이를 더 크게 설정
    return i === 0 ? { hpx: 30 } : { hpx: 16 };
  });
  
  // 모든 셀에 스타일 적용
  applyStylesToWorksheet(
    worksheet, 
    aoa, 
    cellStyles, 
    thickTopRows, 
    totalRows, 
    borderThin, 
    borderThick, 
    fontSizes
  );
  
  return worksheet;
}

/**
 * 방 데이터 추가 함수
 * 특정 방에 대한 데이터를 워크시트에 추가
 */
function addRoomData(
  room: string,
  roomMap: Record<string, Member[]>,
  aoa: (string | number)[][],
  merges: XLSX.Range[],
  cellStyles: Record<string, any>,
  thickTopRows: number[],
  rowIndex: number,
  fillColorGray: { fgColor: { rgb: string } }
): void {
  const members = roomMap[room] || [];
  thickTopRows.push(rowIndex);
  
  const startRowIndex = rowIndex;
  
  // 각 방마다 최대 4명의 구성원 처리
  for (let i = 0; i < 4; i++) {
    const member = members[i];
    const stdId = member?.stdId || '';
    const name = member?.name || '';
    const attendance = member?.checked === true ? member?.checkedDate.substring(11,16) : member ? '미출석' : '';
    
    aoa.push([
      i === 0 ? room : '', // 첫 번째 행에만 방 번호 표시
      stdId,
      name,
      attendance,
      ''
    ]);
    
    // 방 번호 열에 회색 배경 적용
    cellStyles[`A${rowIndex + 1}`] = {
      fill: fillColorGray
    };
    
    // 미출석자 셀에 회색 배경 적용
    if (member && member.checked === false) {
      for (const col of ['B', 'C', 'D', 'E']) {
        cellStyles[`${col}${rowIndex + 1}`] = {
          fill: fillColorGray
        };
      }
    }
    
    rowIndex++;
  }
  
  // 방 번호 셀 병합
  merges.push({
    s: { r: startRowIndex, c: 0 },
    e: { r: startRowIndex + 3, c: 0 }
  });
}

/**
 * 필기용 섹션 추가 함수
 * 필기 공간과 날짜/자치위원 정보를 추가
 */
function addNotesSection(
  aoa: (string | number)[][],
  merges: XLSX.Range[],
  rowIndex: number,
  notesNeeded: number,
  dayNames: string[]
): void {
  // 현재 날짜 정보 생성
  const today = new Date();
  const dateStr = `${today.getMonth() + 1}월 ${today.getDate()}일 ${dayNames[today.getDay()]}요일                        자치위원`;
  
  // 첫 번째 필기 행에 날짜 정보 추가
  aoa.push([`${dateStr}`, '', '', '', '']);
  
  // 나머지 필기용 빈 행 추가
  for (let i = 1; i < notesNeeded; i++) {
    aoa.push(['', '', '', '', '']);
  }
  
  // 필기 섹션 전체 병합 (날짜 행 제외)
  if (notesNeeded > 1) {
    merges.push({
      s: { r: rowIndex, c: 0 },
      e: { r: rowIndex + notesNeeded - 1, c: 4 }
    });
  }
}

/**
 * 워크시트에 스타일 적용 함수
 * 모든 셀에 테두리, 정렬, 글꼴 스타일 적용
 */
function applyStylesToWorksheet(
  worksheet: XLSX.WorkSheet,
  aoa: (string | number)[][],
  cellStyles: Record<string, any>,
  thickTopRows: number[],
  totalRows: number,
  borderThin: Border,
  borderThick: Border,
  fontSizes: { title: number, header: number, dataA: number, dataOther: number, noteHeader: number, note: number }
): void {
  for (let r = 0; r < aoa.length; r++) {
    for (let c = 0; c <= 4; c++) {
      const cellRef = XLSX.utils.encode_cell({ r, c });
      if (!worksheet[cellRef]) worksheet[cellRef] = { v: '' };
      
      // 테두리 스타일 결정
      const top = thickTopRows.includes(r) || r === totalRows ? borderThick : borderThin;
      const left = c === 0 ? borderThick : borderThin;
      const right = c === 4 ? borderThick : borderThin;
      const bottom = r === aoa.length - 1 ? undefined : borderThin;
      // 이미 스타일이 있는 셀은 건너뛰기 위한 플래그
      const hasExistingStyle = cellStyles[cellRef] && cellStyles[cellRef].font;
      
      // 글꼴 크기 및 굵기 결정
      let fontSz = fontSizes.dataOther;
      let fontBold = false;
      
      if (r === 0) { // 타이틀 행
        fontSz = fontSizes.title;
        fontBold = true;
      } else if (r === 1) { // 헤더 행
        fontSz = fontSizes.header;
        fontBold = true;
      } else if (r === totalRows) { // 필기용 헤더
        fontSz = fontSizes.noteHeader;
        fontBold = true;
      } else if (r > totalRows) { // 필기용 빈칸
        fontSz = fontSizes.note;
      } else if (c === 0 && r > 1 && r < totalRows) { // 방 번호 열
        fontSz = fontSizes.dataA;
      }
      
      // 날짜와 자치위원 행의 첫 번째 셀 특별 처리
      const isDateCell = r === totalRows;
      const horizontalAlignment = isDateCell && c === 0 ? 'left' : 'center';
      // A열은 무조건 top으로 수직 정렬, 다른 열은 기존 로직 유지
      const verticalAlignment = c === 0 ? 'top' : (isDateCell && c === 0 ? 'top' : 'center');      
            
      // 셀 스타일 적용
      worksheet[cellRef].s = {
        ...(cellStyles[cellRef] || {}),
        border: { top, left, bottom, right },
        alignment: {
          vertical: hasExistingStyle ? cellStyles[cellRef].alignment?.vertical || verticalAlignment : verticalAlignment,
          horizontal: hasExistingStyle ? cellStyles[cellRef].alignment?.horizontal || horizontalAlignment : horizontalAlignment
        },
        font: hasExistingStyle ? cellStyles[cellRef].font : {
          sz: fontSz,
          bold: fontBold,
          name: '맑은 고딕'
        }
      };
    }
  }
}