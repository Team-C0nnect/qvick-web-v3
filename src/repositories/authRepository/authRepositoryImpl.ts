import { LoginResponse } from "src/types/auth/login.types";
import {
    AuthRepository,
    NewAccessTokenResponse,
    LoginParams,
    SignUpParams,
} from "./authRepository";
import axios  from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_QVICK_SERVER;

class AuthRepositoryImpl implements AuthRepository {
    public async login(loginData: LoginParams): Promise<LoginResponse> {
        try {
            const { data } = await axios.post(`${API_BASE_URL}/auth/sign-in`, loginData);
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('로그인 실패');
        }
    }

    public async signUp(signUpData: SignUpParams): Promise<void> {
        try {
            const { data }= await axios.post(`${API_BASE_URL}/sign-up/teacher`)
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('회원가입 실패');
        }
    }

    public async refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> {
        try {
            const { data }= await axios.post<NewAccessTokenResponse>(
                `${API_BASE_URL}/auth/refresh`,
                refreshToken
            );
            return data;
        } catch (error) {
            console.error('refresh 에러', error);
            throw new Error('refresh access token')
        }
    }
}


export default new AuthRepositoryImpl();
