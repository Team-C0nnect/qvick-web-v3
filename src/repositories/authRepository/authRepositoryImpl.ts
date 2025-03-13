import { LoginResponse } from "src/types/auth/login.types";
import axiosInstance from 'src/until/api/axiosInstance';
import {
    AuthRepository,
    NewAccessTokenResponse,
    LoginParams,
    SignUpParams,
} from "./authRepository";

const SIGN_IN_ENDPOINT = "/auth/sign-in";

class AuthRepositoryImpl implements AuthRepository {
    public login = async (loginData: LoginParams): Promise<LoginResponse> => {
        try {
            const { data } = await axiosInstance.post(SIGN_IN_ENDPOINT, loginData);
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    public signUp = async (signUpData: SignUpParams): Promise<void> => {
        try {
            const { data } = await axiosInstance.post('auth/sign-up/teacher', signUpData);
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('회원가입 실패');
        }
    }

    public refreshAccessToken = async (refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> => {
        try {
            const { data } = await axiosInstance.post<NewAccessTokenResponse>(
                '/auth/refresh',
                refreshToken
            );
            return data;
        } catch (error) {
            console.error('refresh 에러', error);
            throw new Error('refresh access token 실패');
        }
    }
}

export default new AuthRepositoryImpl();