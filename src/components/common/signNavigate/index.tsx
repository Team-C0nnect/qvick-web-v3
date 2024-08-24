import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "src/components/common/signNavigate/style";
const SignNavigate = () => {
    const navigate = useNavigate();

    return (
        <S.navigateWrap>
            <span onClick={() => navigate("/sign")}>로그인하기</span>
        </S.navigateWrap>
    )
}

export default SignNavigate;