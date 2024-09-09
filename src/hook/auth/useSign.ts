import React, { useCallback, useState } from "react";
import { Signup } from "src/types/auth/signup.type";
import { useSignUpMutation } from "src/queries/auth/auth.queries";
import { SIGNUP_DATA } from "src/constants/signup/signup.constants";
import { showToast } from "src/libs/toast/swal";
import errorHandler from "src/until/error/errorHandler";
import { AxiosError } from "axios";

const validateSignupData = (signupData: Signup) => {
    const { email, name, password } = signupData;
    if (!email) return "이메일이 비었습니다";
    if (!name) return "이름이 비었습니다";
    if (!password) return "비밀번호가 비었습니다";
    return null;
};

export const useSign = () => {
    const SignUpMutation = useSignUpMutation();
    const [section, setSection] = useState("first");
    const [signupData, setSignupData] = useState<Signup>(SIGNUP_DATA);

    const handleSignupData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
            const { name, value } = e.target;
            setSignupData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const submitSignupData = useCallback(async () => {
        if (section === "first") {
            setSection("second");
        } else {
            const validationError = validateSignupData(signupData);
            if (validationError) {
                showToast("error", validationError);
                return;
            }

            SignUpMutation.mutate(signupData, {
                onSuccess: () => {
                    showToast("success", "회원가입 성공");
                    window.location.reload();
                },
                onError: (error) => {
                    const errorCode = error as AxiosError;
                    showToast("error", errorHandler.signupError(errorCode.response?.status!));
                },
            });
        }
    }, [section, signupData, SignUpMutation]);

    return {
        section,
        setSection,
        signupData,
        handleSignupData,
        submitSignupData,
    };
};
