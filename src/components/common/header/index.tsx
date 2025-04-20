import { useGetProfile } from "src/queries/profile/profile.queries";
import { useTokenCheck } from "src/libs/tokenCheck/tokenCheck";
import logoImg from "src/assets/img/logo.svg";
import profileImg from "src/assets/img/profileImg.svg";
import dgsw from "src/assets/img/dgsw.svg"
import * as S from "src/components/common/header/style";
import React, { useState, useRef, useEffect } from "react";
import cookie from "src/libs/cookies/cookie";

const Header = () => {
    const { data } = useGetProfile();
    const hasToken = useTokenCheck();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        cookie.removeCookie("accessToken");
        cookie.removeCookie("refreshToken");
        window.location.href = "/sign";
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

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

            {hasToken && data ? (
                <S.nameContainer
                    ref={dropdownRef}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    tabIndex={0}
                >
                    <S.profileImg src={profileImg} alt="profileImg" />
                    <S.profileName>{data.data.name}</S.profileName>
                    {dropdownOpen && (
                        <S.dropdownMenu>
                            <S.dropdownItem onClick={handleLogout}>
                                로그아웃
                            </S.dropdownItem>
                        </S.dropdownMenu>
                    )}
                </S.nameContainer>
            ) : null}
        </S.headWrap>
    );
};

export default Header;
