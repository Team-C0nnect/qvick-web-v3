import React from "react";
import { useGetProfile } from "src/queries/profile/profile.queries";
import { useTokenCheck } from "src/libs/tokenCheck/tokenCheck";
import logoImg from "src/assets/img/logo.svg";
import profileImg from "src/assets/img/profileImg.svg";
import dgsw from "src/assets/img/dgsw.svg"
import * as S from "src/components/common/header/style";

const Header = () => {
    const { data } = useGetProfile();
    const { getTokenCheck } = useTokenCheck();

    return (
        <S.headWrap>
            <S.logoImg src={logoImg} alt="logo" />
            <S.logoImg src={dgsw} alt="logo" />

            <S.navBar>
                <S.NavLink to="/main">메인 페이지</S.NavLink>
                <S.NavLink to="/ckmember">출석 인원</S.NavLink>
                <S.NavLink to="/nckmember">미출석 인원</S.NavLink>
                <S.NavLink to="/announcement">공지사항</S.NavLink>
            </S.navBar>

            {getTokenCheck() && data ? (
                <S.nameContainer>
                    <S.profileImg src={profileImg} alt="profileImg" />
                    <S.profileName>{data.data.name}</S.profileName>
                </S.nameContainer>
            ) : null}
        </S.headWrap>
    );
};

export default Header;
