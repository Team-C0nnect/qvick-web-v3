import CONFIG from "src/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
import Token from "src/libs/token/token";
import RequestHandler from "src/libs/axios/requestHandler";
import ResponseHandler from "src/libs/axios/responseHandler"
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: CONFIG.qvick_Server,
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
    },
}

const QvickAxios = axios.create(axiosRequestConfig);

QvickAxios.interceptors.request.use(RequestHandler as any, (err) => Promise.reject(err))

QvickAxios.interceptors.response.use((res) => res, ResponseHandler)

export default QvickAxios;

export const setAccessToken = (token: string) => {
    QvickAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};