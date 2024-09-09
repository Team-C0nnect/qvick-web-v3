import React, { useState } from "react";
import * as S from "src/components/auth/Signup/terms_of_service/style";
import SideImage from "src/assets/img/termsservice.svg"
import { TERMS_OF_SERVICE, PRIVACY_POLICY } from "src/constants/signup/signup.constants";

const SignupMain = ({ setSection }: { setSection: React.Dispatch<React.SetStateAction<string>> }) => {
    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const handleNext = () => {
        if (termsChecked && privacyChecked) {
            setSection("second");
        }
    };

    return (
        <S.Container>
            <S.SideImage src={SideImage} alt="사이드바 이미지" />
            <S.SignUpWrap>
                <S.InstructionText>Qvick 이용약관 및 개인정보처리방침에 동의해주세요.</S.InstructionText>
                <S.InformationWrap>
                    <S.TermsContainer>
                        <S.TermsTitle>이용약관</S.TermsTitle>
                        <S.TermsText>{TERMS_OF_SERVICE}</S.TermsText>
                        <S.CheckboxContainer>
                            <input
                                type="checkbox"
                                checked={termsChecked}
                                onChange={() => setTermsChecked(!termsChecked)}
                            />
                            <label>이용약관에 동의합니다</label>
                        </S.CheckboxContainer>
                    </S.TermsContainer>
                    <S.TermsContainer>
                        <S.TermsTitle>개인정보처리방침</S.TermsTitle>
                        <S.TermsText>{PRIVACY_POLICY}</S.TermsText>
                        <S.CheckboxContainer>
                            <input
                                type="checkbox"
                                checked={privacyChecked}
                                onChange={() => setPrivacyChecked(!privacyChecked)}
                            />
                            <label>개인정보처리방침에 동의합니다</label>
                        </S.CheckboxContainer>
                    </S.TermsContainer>
                    <S.Button
                        onClick={handleNext}
                        disabled={!(termsChecked && privacyChecked)}
                    >
                        다음
                    </S.Button>
                </S.InformationWrap>
            </S.SignUpWrap>
        </S.Container>
    );
};

export default SignupMain;
