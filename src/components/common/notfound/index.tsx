import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/common/notfound/style";

const Notfound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/sign");
    }

    return (
        <S.notFoundWrap>
            <S.Title>404 Error</S.Title>
            <S.Description>존재하지 않는 페이지 입니다.</S.Description>
            <S.returnButton onClick={handleBack}>로그인화면으로 돌아가기</S.returnButton>
        </S.notFoundWrap>
    );
};

export default Notfound;