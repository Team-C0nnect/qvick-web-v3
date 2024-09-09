import React, { Dispatch, SetStateAction } from "react";
import SideBarImg from "src/assets/img/normalSide.svg";
import userImg from "src/assets/img/userImg.svg";
import lockImg from "src/assets/img/Locker.svg";
import * as S from "src/components/auth/Signup/singupInformation/style";
import { useNavigate } from "react-router-dom";
import { Signup } from "src/types/auth/signup.type";

interface Props {
    setSection: Dispatch<SetStateAction<string>>;
    signupData: Signup;
    handleSignupData: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    submitSignupData: () => void;
    keydownButton?: (e: React.KeyboardEvent) => void;
}

const SignUpInformation = ({
    setSection,
    signupData,
    handleSignupData,
    keydownButton,
    submitSignupData,
    }: Props) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.SideImage src={SideBarImg} alt="사이드 이미지" />
            <S.SignUpWrap>
                <S.InstructionText>회원가입을 위한 정보를 입력해주세요.</S.InstructionText>
                <S.InformationWrap>
                    <S.InputGroup>
                        <S.Label>이름</S.Label>
                        <S.InputIcon src={userImg} alt="유저 아이콘" />
                        <S.Input
                            name="name"
                            value={signupData.name}
                            type="text"
                            onChange={handleSignupData}
                            placeholder="이름을 입력해주세요"
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>이메일</S.Label>
                        <S.InputIcon src={userImg} alt="유저 아이콘" />
                        <S.Input
                            name="email"
                            value={signupData.email}
                            type="text"
                            onChange={handleSignupData}
                            placeholder="이메일을 입력해주세요"
                            onKeyDown={keydownButton}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>비밀번호</S.Label>
                        <S.InputIcon src={lockImg} alt="비밀번호 아이콘" />
                        <S.Input
                            name="password"
                            value={signupData.password}
                            type="password"
                            onChange={handleSignupData}
                            placeholder="비밀번호를 입력해주세요"
                            onKeyDown={keydownButton}
                        />
                    </S.InputGroup>
                    <S.Button onClick={submitSignupData}>회원가입</S.Button>
                    <S.FooterText>
                        <S.NoMemberText>가입한 계정이 있으신가요?</S.NoMemberText>
                        <S.SignUpLink onClick={() => navigate("/login")}>로그인으로 돌아가기</S.SignUpLink>
                    </S.FooterText>
                </S.InformationWrap>
            </S.SignUpWrap>
        </S.Container>
    );
};

export default SignUpInformation;
