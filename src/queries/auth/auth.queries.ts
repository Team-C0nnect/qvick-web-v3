import AuthRepositoryImpl from "src/repositories/authRepository/authRepositoryImpl";
import { useMutation } from "react-query";

export const useLoginMutation = () => {
    return useMutation(AuthRepositoryImpl.login);
};

export const useSignUpMutation = () => {
    return useMutation(AuthRepositoryImpl.signUp);
};
