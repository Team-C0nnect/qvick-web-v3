import { LoginResponse } from "src/types/auth/login.types";
import {
    AuthRepository,
    NewAccessTokenResponse,
    LoginParams,
    SignUpParams,
} from "./authRepository";
import config from "src/config/config.json";
import axios, { AxiosResponse } from "axios";

class AuthRepositoryImpl implements AuthRepository {

    private async postRequest<T>(url: string, payload: any, actionName: string): Promise<T> {
        try {
            const { data }: AxiosResponse<T> = await axios.post(url, payload);
            return data;
        } catch (error) {
            console.error(`Error occurred during ${actionName}:`, error);
            throw new Error(`${actionName} failed`);
        }
    }

    public login(loginData: LoginParams): Promise<LoginResponse> {
        const url = `${config.qvick_Server}/auth/Sign-in`;
        return this.postRequest<LoginResponse>(url, loginData, 'login');
    }

    public signUp(signUpData: SignUpParams): Promise<void> {
        const url = `${config.qvick_Server}/auth/Teacher Sign-up`;
        return this.postRequest<void>(url, signUpData, 'sign up');
    }

    public refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> {
        const url = `${config.qvick_Server}/auth/refresh`;
        return this.postRequest<NewAccessTokenResponse>(url, refreshToken, 'token refresh');
    }
}

export default new AuthRepositoryImpl();
