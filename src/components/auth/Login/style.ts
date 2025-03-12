import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw; 
    height: 100vh; 
`;

export const SideImage = styled.img`
    flex: 2;
    height: 100%;
    width: 100%;  
    max-width: 650px; 
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

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 17px;
    margin-bottom: 5px;
    margin-left: 5px;
    color: #A1A1A1;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 10px 10px 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
`;

export const InputIcon = styled.img`
    position: absolute;
    left: 10px;
    top: 62%; 
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
`;

export const Button = styled.button`
    width: 550px; 
    height: 55px;
    border-radius: 8px;
    border: none;
    background-color: #0389FF;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    margin-left: 50px;
    &:hover {
        background-color: #0278d4;
    }
`;

export const FooterText = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-left: 650px;
`;

export const NoMemberText = styled.span`
    color: #A1A1A1;
    font-size: 14px;
`;

export const SignUpLink = styled.span`
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: #0389FF;
    &:hover {
        text-decoration: underline;
    }
`;