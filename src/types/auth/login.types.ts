import { Dispatch, SetStateAction } from "react";

export interface LoginResponse extends Response {
    data: {
        accessToken: string;
        refreshToken: string;
        useRole: string;
    };
}

export interface Props {
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export interface Login{
    email: string;
    password: string;
}