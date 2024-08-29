import React from "react";
import SideBarImg from "src/assets/img/SideBarImg.svg";
import * as S from "src/components/common/loginSideBar/style";

const loginSideBar = () => {
    return (
        <S.SideBarWrap>
            <SideBarImg />
        </S.SideBarWrap>
    )
}

export default loginSideBar;