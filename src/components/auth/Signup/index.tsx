import React, { ReactNode } from "react";
import { Props } from "src/types/auth/login.types";
import { useSign } from "src/hook/auth/useSign";
import SignUpFirst from "src/components/auth/Signup/terms_of_service/index";
import SignupSecond from "src/components/auth/Signup/singupInformation/index";
import {SIGNUP_SECTION_NAME} from "src/constants/signup/signup.constants";


const Signup = ({ setIsLogin }: Props) => {
    const {...sign} = useSign();
    const signupComponents: ReactNode[] = [
        <SignUpFirst
            key="signupFirst"
        />,
        <SignupSecond
            setSection={sign.setSection}
            signupData={sign.signupData}
            handleSignupData={sign.handleSignupData}
            submitSignupData={sign.submitSignupData}
            keydownButton={sign.submitSignupData}
            key="signupSecond"
        />,
    ];
    return (
        <div>
            <div>
                <span>큐빅이 처음이신가요?</span>
            </div>
            {signupComponents.map((component, idx) => {
                return sign.section === SIGNUP_SECTION_NAME[idx].title && component;
            })}
            <div>
                <span>계정이 있다면{" "}</span>
                <strong onClick={() => setIsLogin(true)}>로그인</strong>
            </div>
        </div>
    )
}

export default Signup;