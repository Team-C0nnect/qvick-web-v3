import styled from "styled-components";

export const mainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const tableWrapper = styled.div`
    width: 80%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const th = styled.th`
    border: 1px solid #ddd;
    padding: 12px;
    background-color: #f4f4f4;
    font-weight: bold;
`;

export const td = styled.td`
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
`;

export const tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;