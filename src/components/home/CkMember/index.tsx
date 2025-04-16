import { useState, useEffect, useMemo } from "react";
import * as S from "src/components/home/CkMember/style";
import { useMembers } from "src/queries/member/member.queries";
import PeopleImg from "src/assets/img/people.svg";
import HumanImg from "src/assets/img/human.svg";
import ClockImg from "src/assets/img/clock.svg";
import CalendarImg from "src/assets/img/Calendar.svg";
import excelImg from "src/assets/img/excel.svg";
import * as XLSX from 'xlsx';

const CkMember = () => {
    const { members: checkedMembers, stats, isLoading, error } = useMembers(true);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    type SortCriteria = '학번' | '이름' | '호실';
    const [sortCriteria, setSortCriteria] = useState<SortCriteria>('학번');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const sortedMembers = useMemo(() => {
        if (!checkedMembers) return [];

        const filtered = selectedDate
            ? checkedMembers.filter(member => member.checkedDate.slice(0, 10) === selectedDate)
            : checkedMembers;

        return [...filtered].sort((a, b) => {
            switch (sortCriteria) {
                case '학번':
                    return a.stdId.localeCompare(b.stdId);
                case '이름':
                    return a.name.localeCompare(b.name);
                case '호실':
                    return a.room.localeCompare(b.room);
                default:
                    return 0;
            }
        });
    }, [checkedMembers, selectedDate, sortCriteria]);

    const exportToExcel = () => {
        if (!sortedMembers.length) {
            alert("출력할 출석자 데이터가 없습니다.");
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(sortedMembers.map(member => ({
            "호실": member.room,
            "학번": member.stdId,
            "이름": member.name,
            "출석여부": "출석",
            "출석시간": member.checkedDate,
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "출석자 명단");
        XLSX.writeFile(workbook, "출석자_명단.xlsx");
    };

    if (isLoading) return <S.memberContainer>로딩중...</S.memberContainer>;
    if (error) return <S.memberContainer>에러가 발생했습니다.</S.memberContainer>;

    return (
        <S.memberContainer>
            <S.infoContainer>
                <S.timeContainer>
                    <img src={ClockImg} alt="시계이미지" />
                    {currentTime.toLocaleTimeString()}
                </S.timeContainer>
                <S.datePickerContainer>
                    <img src={CalendarImg} alt="캘린더이미지" />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </S.datePickerContainer>
                <S.flexRight>
                    <S.exportButton onClick={exportToExcel}>
                        <img src={excelImg} alt="엑셀 출력" />
                        엑셀로 출력
                    </S.exportButton>
                </S.flexRight>
            </S.infoContainer>

            <S.memberWrap>
                <S.peopleContainer>
                    <img src={PeopleImg} alt="사람 이미지" />
                    <span>전체 인원: {stats.totalCount}명</span>
                </S.peopleContainer>
                <S.ckContainer>
                    <span>
                        <img src={HumanImg} alt="사람 이미지" />
                        출석 인원: <span style={{ color: "green" }}>{stats.checkedCount}명</span>
                    </span>
                </S.ckContainer>
                <S.flexRight>
                    <S.sortContainer>
                        {["학번", "이름", "호실"].map((criteria) => (
                            <span
                                key={criteria}
                                onClick={() => setSortCriteria(criteria as typeof sortCriteria)}
                                style={{
                                    cursor: "pointer",
                                    fontWeight: sortCriteria === criteria ? "bold" : "normal",
                                    textDecoration: sortCriteria === criteria ? "underline" : "none",
                                    marginRight: criteria !== "호실" ? "10px" : 0,
                                }}
                            >
                                {criteria}
                            </span>
                        ))}
                    </S.sortContainer>
                </S.flexRight>
            </S.memberWrap>

            {stats.totalCount > 0 && (
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
                        {sortedMembers.map((member) => (
                            <S.tr key={member.stdId}>
                                <S.td>{member.stdId}</S.td>
                                <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                                <S.td>{member.name}</S.td>
                                <S.td style={{ color: "green" }}>출석</S.td>
                                <S.td>{member.phoneNum}</S.td>
                                <S.td>{member.room}호</S.td>
                            </S.tr>
                        ))}
                        </tbody>
                    </S.table>
                    {sortedMembers.length === 0 && (
                        <S.noMembersMessage>출석한 학생이 없습니다.</S.noMembersMessage>
                    )}
                </S.tableWrapper>
            )}
        </S.memberContainer>
    );
};

export default CkMember;
