import { LoginResponse, Login } from "src/types/auth/login.types";
import { Signup } from "src/types/auth/signup.type";

export interface AuthRepository {
    login(loginData: LoginParams): Promise<LoginResponse>;
    signUp(signUpData: SignUpParams): Promise<void>;
    refreshAccessToken(refreshToken: {
        refreshToken: string;
    }): Promise<NewAccessTokenResponse>
}

export interface LoginParams extends Login{}

export interface NewAccessTokenResponse {
    data: {
        accessToken: string
    }
}

export interface SignUpParams extends Signup{}
