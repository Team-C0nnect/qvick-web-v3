import React from "react";
import { useGetProfile } from "src/queries/profile/profile.queries";
import { tokenCheck } from "src/libs/tokenCheck/tokenCheck";
import logoImg from "src/assets/img/logo.svg";
import profileImg from "src/assets/img/profileImg.svg";
import * as S from "src/components/common/header/style";

const Header = () => {
    const { data } = useGetProfile();
    const { getTokenCheck } = tokenCheck();

    return (
        <S.headWrap>
            {getTokenCheck() ? (
                <>
                    <S.logoImg src={logoImg} alt="logo" />
                    <S.nameContainer>
                        <S.profileImg src={profileImg} alt="profileImg" />
                        <S.profileName className="name">{data?.name}</S.profileName>
                    </S.nameContainer>
                </>
            ) : null}
        </S.headWrap>
    );
};

export default Header;
