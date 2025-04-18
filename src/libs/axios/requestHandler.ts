import { AxiosRequestConfig } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY
} from "src/constants/token/token.constants";
import token from "src/libs/token/token";

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if(token.getToken(REFRESH_TOKEN_KEY) === undefined) {
        return config;
    }

    config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
    };

    return config;
}

export default requestHandler;