import React, { useState, useEffect } from "react";
import * as S from "src/components/home/CkMember/style";
import { useGetMembers } from "src/queries/member/member.queries";
import PeopleImg from "src/assets/img/people.svg";
import HumanImg from "src/assets/img/human.svg";
import ClockImg from "src/assets/img/clock.svg";
import CalendarImg from "src/assets/img/Calendar.svg";
import excelImg from "src/assets/img/excel.svg";
import * as XLSX from 'xlsx';
import {noMembersMessage} from "src/components/home/CkMember/style";

const CkMember: React.FC = () => {
    const { data, isLoading, isError } = useGetMembers();
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [sortCriteria, setSortCriteria] = useState<string>('학번');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const handleSortChange = (criteria: string) => {
        setSortCriteria(criteria);
    };

    const exportToExcel = () => {
        if (!data || !Array.isArray(data)) {
            console.error("데이터가 없습니다.");
            return;
        }

        const checkedMembers = data.filter(member =>
            member.checked && (!selectedDate || member.checkedDate.startsWith(selectedDate))
        );

        const sortedCheckedMembers = checkedMembers.sort((a, b) => {
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

        const worksheet = XLSX.utils.json_to_sheet(sortedCheckedMembers.map(member => ({
            "호실": member.room,
            "학번": member.stdId,
            "이름": member.name,
            "출석여부": '출석',
            "출석시간": member.checkedDate,
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, '출석자 명단');

        XLSX.writeFile(workbook, '출석자_명단.xlsx');
    };

    if (isLoading) {
        return <S.memberContainer>로딩중...</S.memberContainer>;
    }

    if (isError) {
        return <S.memberContainer>에러가 발생했습니다.</S.memberContainer>;
    }

    const members = data || [];

    const checkedMembers = members.filter(member => member.checked);

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
                        onChange={handleDateChange}
                    />
                </S.datePickerContainer>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <S.exportButton onClick={exportToExcel}>
                        <img src={excelImg} alt="엑셀 출력" />
                        엑셀로 출력
                    </S.exportButton>
                </div>
            </S.infoContainer>
            <S.memberWrap>
                <S.peopleContainer>
                    <img src={PeopleImg} alt="사람 이미지"/>
                    <span>전체 인원: {members.length}명</span>
                </S.peopleContainer>
                <S.ckContainer>
                    <span>
                        <img src={HumanImg} alt="사람 이미지"/>
                        출석 인원: <span style={{color: 'green'}}>{checkedMembers.length}명</span>
                    </span>
                </S.ckContainer>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <S.sortContainer>
                        <span onClick={() => handleSortChange('학번')} style={{ cursor: 'pointer', marginRight: '10px' }}>학번</span>
                        <span onClick={() => handleSortChange('이름')} style={{ cursor: 'pointer', marginRight: '10px' }}>이름</span>
                        <span onClick={() => handleSortChange('호실')} style={{ cursor: 'pointer' }}>호실</span>
                    </S.sortContainer>
                </div>
            </S.memberWrap>

            {members.length > 0 && (
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
                        {checkedMembers.map((member) => (
                            <S.tr key={member.stdId}>
                                <S.td>{member.stdId}</S.td>
                                <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                                <S.td>{member.name}</S.td>
                                <S.td style={{ color: 'green' }}>
                                    출석
                                </S.td>
                                <S.td>{member.phoneNum}</S.td>
                                <S.td>{member.room}호</S.td>
                            </S.tr>
                        ))}
                        </tbody>
                    </S.table>
                    {checkedMembers.length === 0 && (
                        <S.noMembersMessage>출석한 학생이 없습니다.</S.noMembersMessage>
                    )}
                </S.tableWrapper>
            )}
        </S.memberContainer>
    );
};

export default CkMember;
