import React, { useCallback, useState } from "react";
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
import {Axios, AxiosError} from "axios";
import errorHandler from "src/until/error/errorHandler";

export const useLogin = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<Login>({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [keepLogin, setKeepLogin] = useState<boolean>(false);
    const loginMutation = useLoginMutation();
    const [tokenValid, setTokenValid] = useAtom(tokenValidAtom);

    const handleKeydown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleLoginData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const { name, value } = e.target;
            setLoginData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleKeepLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setKeepLogin(e.target.checked);
    };

    const handleLogin = async () => {
        if (!loginData.email) {
            showToast("이메일을 입력해주세요", "INFO");
            return;
        }

        if (!loginData.password) {
            showToast("비밀번호를 입력해주세요", "INFO");
            return;
        }

        setLoading(true);

        try {
            loginMutation.mutate(loginData, {
                onSuccess: (data) => {
                    const role = data.data.userRole;
                    if (role !== "TEACHER") {
                        showToast("선생님 계정만 로그인할 수 있습니다", "선생님만 접근 가능합니다.");
                        setLoading(false);
                        return;
                    }
                    setTokenValid(true);
                    token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
                    token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
                    showToast("로그인 성공", "로그인 성공");
                    navigate("/main");
                },
                onError: (error: unknown) => {
                    const axiosError = error as AxiosError;
                    const status = axiosError.response?.status;
                    showToast(errorHandler.loginError(status || 500), "선생님만 접근 가능합니다.");
                },
            });
        } catch (error) {
            setLoading(false);
            showToast("로그인 중 오류가 발생했습니다", "ERROR");
        }
    };

    return {
        loginData,
        handleLoginData,
        handleKeydown,
        loading,
        keepLogin,
        handleKeepLogin,
        handleLogin,
    };
};