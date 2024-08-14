import AuthRepositoryImpl from "src/repositories/authRepository/authRepositoryImpl";
import { useMutation } from "react-query";

export const useLoginMutation = () => {
    const mutation = useMutation(AuthRepositoryImpl.login);
    return mutation;
}

export const useSignUpMutation = () => {
    const mutation = useMutation(AuthRepositoryImpl.signUp);
    return mutation;
}
