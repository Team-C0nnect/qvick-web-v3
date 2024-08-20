import { AxiosError } from "axios";
import Token from "../token/token";
import AuthRepositoryImpl from "src/repositories/authRepository/authRepositoryImpl";
import QvickAxios from "src/libs/axios/customAxios";
import {
    REQUEST_TOKEN_KEY,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};

const ResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;


        const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);

        if (
            status === 401 &&
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            !isRefreshing
        ) {
            isRefreshing = true;
            try {
                const { data: newAccessToken } =
                    await AuthRepositoryImpl.refreshAccessToken({
                        refreshToken: usingRefreshToken,
                    });

                QvickAxios.defaults.headers.common[
                    REQUEST_TOKEN_KEY
                    ] = `Bearer ${newAccessToken}`;

                Token.setToken(ACCESS_TOKEN_KEY, newAccessToken.accessToken);

                isRefreshing = false;
                onTokenRefreshed(newAccessToken.accessToken);

                return new Promise((resolve) => {
                    addRefreshSubscriber((accessToken: string) => {
                        originalRequest!.headers![
                            REQUEST_TOKEN_KEY
                            ] = `Bearer ${accessToken}`;
                        resolve(QvickAxios(originalRequest!));
                    });
                });
            } catch (error) {
                Token.clearToken();
            }
        }
    };
    return Promise.reject(error);
};

export default ResponseHandler;