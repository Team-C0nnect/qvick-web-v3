import React, { ReactNode } from "react";
import { Props } from "src/types/auth/login.types";
import { useSign } from "src/hook/auth/useSign";
import SignUpFirst from "src/components/auth/Signup/terms_of_service/index";
import SignupSecond from "src/components/auth/Signup/singupInformation/index";
import { SIGNUP_SECTION_NAME } from "src/constants/signup/signup.constants";

const Signup = ({ setIsLogin }: Props) => {
    const { section, setSection, signupData, handleSignupData, submitSignupData } = useSign();

    const signupComponents: ReactNode[] = [
        <SignUpFirst
            setSection={setSection}
            key="signupFirst"
        />,
        <SignupSecond
            setSection={setSection}
            signupData={signupData}
            handleSignupData={handleSignupData}
            submitSignupData={submitSignupData}
            keydownButton={submitSignupData}
            key="signupSecond"
        />,
    ];

    const currentComponent = signupComponents.find((_, idx) => section === SIGNUP_SECTION_NAME[idx].title);

    return (
        <div>
            {currentComponent}
        </div>
    );
};

export default Signup;
