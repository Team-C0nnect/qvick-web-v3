import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const SideImage = styled.img`
    flex: 2;
    height: 100%;
    object-fit: cover;
`;

export const SignUpWrap = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const InstructionText = styled.span`
    margin-bottom: 40px;
    font-weight: 550;
    font-size: 35px;
    text-align: center;
`;

export const InformationWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 500px;
    align-items: center;
    justify-content: center;
`;

export const TermsContainer = styled.div`
    width: 45vw;
`;

export const TermsTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 15px;
    color: #A1A1A1;
`;

export const TermsText = styled.p`
    max-height: 150px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    label {
        margin-right: 20px;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    width: 30%;
    &:disabled {
        cursor: not-allowed;
    }
`;
