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

export const LoginText = styled.span`
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    margin-top: 50px;
    transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2);
        font-size: 2rem;
        color: #0389FF;
    }
`;
