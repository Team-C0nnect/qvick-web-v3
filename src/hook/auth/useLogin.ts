import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "src/types/auth/login.types";
import { useLoginMutation } from "src/queries/auth/auth.queries";
import { showToast } from "src/libs/toast/swal";
import { tokenValidAtom } from "src/store/token/token.atom";
import { useAtom } from "jotai";
import token from "src/libs/token/token";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {AxiosError} from "axios";
import errorHandler from "src/until/error/errorHandler";

export const useLogin = () => {
    const navigate = useNavigate();
    const [LoginData, setLoginData] = useState<Login>({
        email: "",
        password:"",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [keepLogin, setKeepLogin] = useState<boolean>(false);
    const LoginMutation = useLoginMutation();
    const [tokenValid, setTokenValid] = useAtom(tokenValidAtom);

    const handleKeydown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleSignUpData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const {  name, value } = e.target;
            setLoginData((prev) => ({ ...prev, [name]: value }));
        },
        [LoginData]
    );

    const handleLogin = async () => {
        if (!LoginData.email) {
            showToast("이메일를 입력해주세요", "INFO");
            return;
        }

        if (!LoginData.password) {
            showToast("비밀번호를 입력해주세요", "INFO")
            return;
        }

        LoginMutation.mutate(LoginData, {
            onSuccess: (data) => {
                setTokenValid(true);
                navigate("/main");
                showToast("success", "로그인 성공");
                token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
                token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
            },
            onError: (error) => {
                const errorCode = error as AxiosError;
                showToast("error", errorHandler.loginError(errorCode.response?.status!));
            }
        });
    };

    return {
        LoginData,
        handleSignUpData,
        handleKeydown,
        loading,
        keepLogin,
        handleLogin,
    };
};
