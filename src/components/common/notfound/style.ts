import styled from "styled-components";

export const notFoundWrap = styled.div`
    position: absolute;
    z-index: 7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

export const returnButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: #0389FF;
`;