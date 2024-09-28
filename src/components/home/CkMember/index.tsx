import React from "react";
import * as S from "src/components/home/CkMember/style";
import { useGetCheckedMembersTrue } from "src/queries/member/member.queries";

const CkMember = () => {
    const { data, isLoading, isError } = useGetCheckedMembersTrue();

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

    const checkedMembers = members.filter(member => member.checked);

    if (checkedMembers.length === 0) {
        return <S.memberContainer>출석한 학생이 없습니다.</S.memberContainer>;
    }

    return (
        <S.memberContainer>
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
                    {checkedMembers.map((member) => (
                        <S.tr key={member.stdId}>
                            <S.td>{member.stdId}</S.td>
                            <S.td>{member.gender === 'MALE' ? '남' : '여'}</S.td>
                            <S.td>{member.name}</S.td>
                            <S.td style={{ color: 'green' }}>
                                출석
                            </S.td>
                            <S.td>{member.phoneNum}</S.td>
                        </S.tr>
                    ))}
                    </tbody>
                </S.table>
            </S.tableWrapper>
        </S.memberContainer>
    );
}

export default CkMember;
