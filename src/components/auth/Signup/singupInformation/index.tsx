import React from "react";
import SideBarImg from "src/assets/img/normalSide.svg";
import userImg from "src/assets/img/userImg.svg";
import lockImg from "src/assets/img/Locker.svg";
import * as S from "src/components/auth/Signup/singupInformation/style";

const SignUpInformation = () => {
    return (
        <S.Container>
            <S.SideImage src={SideBarImg} alt="사이드 이미지" />
            <S.SignUpWrap>
                <S.InstructionText>회원가입을 위한 정보를 입력해주세요.</S.InstructionText>
                <S.InformationWrap>
                    <S.InputGroup>
                        <S.Label>이름</S.Label>
                        <S.InputIcon src={userImg} alt="유저 아이콘" />
                        <S.Input placeholder="이름을 입력해주세요" />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>이메일</S.Label>
                        <S.InputIcon src={userImg} alt="유저 아이콘" />
                        <S.Input placeholder="이메일을 입력해주세요" />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>비밀번호</S.Label>
                        <S.InputIcon src={lockImg} alt="비밀번호 아이콘" />
                        <S.Input type="password" placeholder="비밀번호를 입력해주세요" />
                    </S.InputGroup>
                    <S.Button>회원가입</S.Button>
                </S.InformationWrap>
            </S.SignUpWrap>
        </S.Container>
    );
};

export default SignUpInformation;
