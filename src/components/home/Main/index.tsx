import React, { useState, useEffect } from "react";
import * as S from "src/components/home/Main/style";
import { useGetMembers } from "src/queries/member/member.queries";
import ClockImg from "src/assets/img/clock.svg";
import CalendarImg from "src/assets/img/Calendar.svg";
import PeopleImg from "src/assets/img/people.svg";
import HumanImg from "src/assets/img/human.svg";
import excelImg from "src/assets/img/excel.svg";
import reloadImg from "src/assets/img/reload.svg";
import { exportToExcel } from "src/hook/home/exportExcel";

const Main = () => {
    const { data = [], isLoading, isError, refetch } = useGetMembers();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    const [sortCriteria, setSortCriteria] = useState('학번');
    const [attendanceFilter, setAttendanceFilter] = useState('전체'); // 출석 필터
    const [gradeFilter, setGradeFilter] = useState('전체'); // 학년 필터
    const [genderFilter, setGenderFilter] = useState('전체'); // 성별 필터
    const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (isLoading) {
        return <S.mainContainer>로딩 중...</S.mainContainer>;
    }

    if (isError) {
        return <S.mainContainer>에러가 발생했습니다.</S.mainContainer>;
    }

    const checkedMembersCount = data.filter(member => member.checked).length;
    const uncheckedMembersCount = data.length - checkedMembersCount;

    const filteredMembers = data.filter(member => {
        // 출석 필터 조건
        const attendanceCondition =
            attendanceFilter === '전체' ||
            (attendanceFilter === '출석' && member.checked) ||
            (attendanceFilter === '미출석' && !member.checked);

        // 학년 필터 조건
        const gradeCondition =
            gradeFilter === '전체' ||
            (gradeFilter === '1학년' && member.stdId.startsWith('1')) ||
            (gradeFilter === '2학년' && member.stdId.startsWith('2')) ||
            (gradeFilter === '3학년' && member.stdId.startsWith('3'));

        // 성별 필터 조건
        const genderCondition =
            genderFilter === '전체' ||
            (genderFilter === '남성' && member.gender === 'MALE') ||
            (genderFilter === '여성' && member.gender === 'FEMALE');

        // 검색어 필터 조건 (대소문자 구분 없이 검색)
        const searchCondition = searchQuery === '' || 
            member.stdId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (member.phoneNum && member.phoneNum.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (member.room && member.room.toLowerCase().includes(searchQuery.toLowerCase()));

        // 모든 조건을 만족하는 경우만 반환
        return attendanceCondition && gradeCondition && genderCondition && searchCondition;
    });

    const sortedMembers = [...filteredMembers].sort((a, b) => {
        switch (sortCriteria) {
            case '학번':
                return a.stdId.localeCompare(b.stdId);
            case '이름':
                return a.name.localeCompare(b.name);
            case '호실':
                return a.room.localeCompare(b.room);
            case '출석 여부':
                return a.checked === b.checked ? 0 : a.checked ? -1 : 1;
            default:
                return 0;
        }
    });


    return (
        <S.mainContainer>
            <S.infoContainer>
                <S.timeContainer>
                    <img src={ClockImg} alt="시계" />
                    {currentTime.toLocaleTimeString()}
                </S.timeContainer>
                <S.datePickerContainer>
                    <img src={CalendarImg} alt="캘린더" />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </S.datePickerContainer>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <S.exportButton onClick={() => exportToExcel(data)}>
                        <img src={excelImg} alt="엑셀 출력" />
                        엑셀로 출력
                    </S.exportButton>
                </div>
            </S.infoContainer>
            <S.memberWrap>
                <S.peopleContainer>
                    <img src={PeopleImg} alt="사람 이미지" />
                    <span>전체 인원: {data.length}명</span>
                </S.peopleContainer>
                <S.ckContainer>
                    <img src={HumanImg} alt="사람 이미지" />
                    <span>출석자 수: <span style={{ color: 'green' }}>{checkedMembersCount}명</span></span>
                </S.ckContainer>
                <S.NckContainer>
                    <img src={HumanImg} alt="사람 이미지" />
                    <span>
                        미출석 인원: <span style={{ color: 'red' }}>{uncheckedMembersCount}명</span>
                    </span>
                </S.NckContainer>
                <S.ReloadButton onClick={() => refetch()}>
                    <img src={reloadImg} alt="새로고침 이미지" />
                </S.ReloadButton>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <S.sortContainer>
                        <span onClick={() => setSortCriteria('학번')}
                            style={{ cursor: 'pointer', marginRight: '10px' }}>학번</span>
                        <span onClick={() => setSortCriteria('이름')}
                            style={{ cursor: 'pointer', marginRight: '10px' }}>이름</span>
                        <span onClick={() => setSortCriteria('호실')}
                            style={{ cursor: 'pointer', marginRight: '10px' }}>호실</span>
                        <span onClick={() => setSortCriteria('출석 여부')}
                            style={{ cursor: 'pointer' }}>출석 여부</span>
                    </S.sortContainer>
                </div>
            </S.memberWrap>
            <S.filterContainer>
                <S.filterGroup>
                    <label>출석 여부</label>
                    <select value={attendanceFilter} onChange={(e) => setAttendanceFilter(e.target.value)}>
                        <option value="전체">전체</option>
                        <option value="출석">출석</option>
                        <option value="미출석">미출석</option>
                    </select>
                </S.filterGroup>
                <S.filterGroup>
                    <label>학년</label>
                    <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}>
                        <option value="전체">전체</option>
                        <option value="1학년">1학년</option>
                        <option value="2학년">2학년</option>
                        <option value="3학년">3학년</option>
                    </select>
                </S.filterGroup>
                <S.filterGroup>
                    <label>성별</label>
                    <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                        <option value="전체">전체</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                    </select>
                </S.filterGroup>
                <S.searchContainer>
                        <input
                            type="text"
                            placeholder="검색 (학번, 이름, 전화번호, 호실)"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                        />
                    </S.searchContainer>
            </S.filterContainer>
            <S.tableWrapper>
                <S.table>
                    <thead>
                        <tr>
                            <S.th>학번</S.th>
                            <S.th>성별</S.th>
                            <S.th>이름</S.th>
                            <S.th>출석 여부</S.th>
                            <S.th>전화번호</S.th>
                            <S.th>호실</S.th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMembers.length > 0 ? (
                            sortedMembers.map((member) => (
                                <S.tr key={member.stdId}>
                                    <S.td>{member.stdId}</S.td>
                                    <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                                    <S.td>{member.name}</S.td>
                                    <S.td style={{ color: member.checked ? 'green' : 'red' }}>
                                        {member.checked ? '출석' : '미출석'}
                                    </S.td>
                                    <S.td>{member.phoneNum}</S.td>
                                    <S.td>{member.room}호</S.td>
                                </S.tr>
                            ))
                        ) : (
                            <S.tr>
                                <S.td colSpan={6} style={{ textAlign: 'center' }}>검색 결과가 없습니다.</S.td>
                            </S.tr>
                        )}
                    </tbody>
                </S.table>
            </S.tableWrapper>
        </S.mainContainer>
    );
};

export default Main;