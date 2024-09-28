import React, { useState, useEffect } from "react";
import * as S from "src/components/home/NckMember/style";
import { useGetCheckedMembersFalse } from "src/queries/member/member.queries";
import ClockImg from "src/assets/img/clock.svg";
import CalendarImg from "src/assets/img/Calendar.svg";
import PeopleImg from "src/assets/img/people.svg";
import HumanImg from "src/assets/img/human.svg";

const NckMember = () => {
    const { data, isLoading, isError } = useGetCheckedMembersFalse();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const renderContent = () => {
        if (isLoading) {
            return <S.memberContainer>로딩중...</S.memberContainer>;
        }

        if (isError) {
            return <S.memberContainer>에러가 발생했습니다.</S.memberContainer>;
        }

        const members = data;

        if (!members || !Array.isArray(members)) {
            return <S.memberContainer>데이터가 없습니다.</S.memberContainer>;
        }

        const absentMembers = members.filter(member =>
            !member.checked && (!selectedDate || formatDate(member.checkedDate) === selectedDate)
        );

        if (absentMembers.length === 0) {
            return <S.memberContainer>미출석한 멤버가 없습니다.</S.memberContainer>;
        }

        return (
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
                    {absentMembers.map((member) => (
                        <S.tr key={member.stdId}>
                            <S.td>{member.stdId}</S.td>
                            <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                            <S.td>{member.name}</S.td>
                            <S.td style={{ color: 'red' }}>
                                미출석
                            </S.td>
                            <S.td>{member.phoneNum}</S.td>
                            <S.td>{member.room}호</S.td>
                        </S.tr>
                    ))}
                    </tbody>
                </S.table>
            </S.tableWrapper>
        );
    };

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
                <S.memberWrap>
                    <S.peopleContainer>
                        <img src={PeopleImg} alt="사람 이미지" />
                        <span>전체인원: </span>
                    </S.peopleContainer>
                    <S.NckContainer>
                        <img src={HumanImg} alt="사람 이미지" />
                        <span>미출석인원: </span>
                    </S.NckContainer>
                </S.memberWrap>
            </S.infoContainer>
            {renderContent()}
        </S.memberContainer>
    );
};

export default NckMember;
