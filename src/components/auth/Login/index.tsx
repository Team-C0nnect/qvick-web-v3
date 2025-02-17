import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/auth/Login/style";
import SideBarImg from "src/assets/img/normalSide.svg";
import userImg from "src/assets/img/userImg.svg";
import lockImg from "src/assets/img/Locker.svg";
import { useLogin } from "src/hook/auth/useLogin";
import { Props } from "src/types/auth/login.types";

const LoginComponent = ({ setIsLogin }: Props) => {
    const navigate = useNavigate();
    const {...auth} = useLogin();

    return (
        <S.Container>
            <S.SideImage src={SideBarImg} alt="사이드 이미지" />
            <S.SignUpWrap>
                <S.InstructionText>로그인을 위한 정보를 입력해주세요.</S.InstructionText>
                <S.InformationWrap>
                    <S.InputGroup>
                        <S.Label>이메일</S.Label>
                        <S.InputIcon src={userImg} alt="유저 아이콘" />
                        <S.Input
                            name="email"
                            value={auth.loginData.email}
                            type="text"
                            onChange={auth.handleLoginData}
                            placeholder="이메일을 입력해주세요"
                            onKeyDown={auth.handleKeydown}
                        />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>비밀번호</S.Label>
                        <S.InputIcon src={lockImg} alt="비밀번호 아이콘" />
                        <S.Input
                            name="password"
                            value={auth.loginData.password}
                            type="password"
                            onChange={auth.handleLoginData}
                            placeholder="비밀번호를 입력해주세요"
                            onKeyDown={auth.handleKeydown}
                        />
                    </S.InputGroup>
                    <S.Button onClick={auth.handleLogin}>로그인</S.Button>
                    <S.FooterText>
                        <S.NoMemberText>가입한 계정이 없으신가요?</S.NoMemberText>
                        <S.SignUpLink onClick={() => setIsLogin(false)}>회원가입</S.SignUpLink>
                    </S.FooterText>
                </S.InformationWrap>
            </S.SignUpWrap>
        </S.Container>
    );
};

export default LoginComponent;
