import styled from "styled-components";

export const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const StyledVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    filter: brightness(0.8);
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
`;

export const AnimatedText = styled.div`
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    span {
        display: inline-block;
    }
`;

export const LoginButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #0056b3;
    }
`;
