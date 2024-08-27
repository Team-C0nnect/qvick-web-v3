import React from "react";
import { useGetProfile } from "src/queries/profile/profile.queries";
import { tokenCheck } from "src/libs/tokenCheck/tokenCheck";
import logoImg from "src/assets/img/logo.svg";

const Header = () => {
    const { data } = useGetProfile();
    const { getTokenCheck } = tokenCheck();

    return (
        <div className="headWrap">
            {getTokenCheck() ? (
                <>
                    <img src={logoImg} alt="logo" />
                    <span className="name">{data?.name}</span>
                </>
            ) : null}
        </div>
    );
};

export default Header;
