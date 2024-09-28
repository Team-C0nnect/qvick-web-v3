import React from "react";
import * as S from "src/components/home/Main/style";
import { useGetAllMembers } from "src/queries/member/member.queries";

const Main = () => {
    const { data, isLoading, isError } = useGetAllMembers();

    if (isLoading) {
        return <S.mainContainer>로딩 중...</S.mainContainer>;
    }

    if (isError) {
        return <S.mainContainer>에러가 발생했습니다.</S.mainContainer>;
    }

    const members = data; // data.data 대신 data로 접근

    if (!members || !Array.isArray(members)) {
        return <S.mainContainer>데이터가 없습니다.</S.mainContainer>;
    }

    return (
        <S.mainContainer>
            <S.tableWrapper>
                <S.table>
                    <thead>
                    <tr>
                        <S.th>학번</S.th>
                        <S.th>성별</S.th>
                        <S.th>이름</S.th>
                        <S.th>출석 여부</S.th>
                        <S.th>전화번호</S.th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((member) => (
                        <S.tr key={member.stdId}>
                            <S.td>{member.stdId}</S.td>
                            <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                            <S.td>{member.name}</S.td>
                            <S.td style={{ color: member.checked ? 'green' : 'red' }}>
                                {member.checked ? '출석' : '미출석'}
                            </S.td>
                            <S.td>{member.phoneNum}</S.td>
                        </S.tr>
                    ))}
                    </tbody>
                </S.table>
            </S.tableWrapper>
        </S.mainContainer>
    );
};

export default Main;
