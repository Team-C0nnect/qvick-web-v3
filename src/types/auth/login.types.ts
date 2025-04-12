import { Dispatch, SetStateAction } from "react";

export interface LoginResponse extends Response {
    status: number;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        userRole: "TEACHER" | "STUDENT" | string;
    };
}

export interface Props {
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export interface Login{
    email: string;
    password: string;
}