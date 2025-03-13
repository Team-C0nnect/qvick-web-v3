import styled from "styled-components";

export const memberContainer = styled.div`
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
    max-height: 60vh;
    overflow-y: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
`;

export const table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const th = styled.th`
    border-bottom: 2px solid #ddd;
    padding: 12px;
    background-color: #f4f4f4;
    font-weight: bold;
`;

export const td = styled.td`
    border-bottom: 1px solid #ddd;
    padding: 10px;
    background-color: #FFFFFF;
    text-align: center;
    border-left: none;
    border-right: none;
    height: 35px;
    line-height: 35px;
`;


export const tr = styled.tr`
    &:nth-child(even) {
        background-color: #FFFFFF;
    }
`;

export const infoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-top: 40px;
    margin-bottom: 30px;
`;

export const timeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    margin-right: 20px;

    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }

    span {
        font-weight: 400;
        font-size: 16px;
        color: #333;
    }
`;

export const datePickerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;

    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }

    span {
        font-size: 16px;
        color: #333;
    }
`;

export const exportButton = styled.button`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    margin-left: 20px;

    img {
        margin-right: 5px;
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: #0056b3;
    }
`;

export const memberWrap = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin-bottom: 30px;
`;

export const peopleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    margin-right: 20px;

    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }

    span {
        font-weight: 500;
        font-size: 16px;
        color: #333;
    }
`;

export const ckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;

    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }

    span {
        font-weight: 500;
        font-size: 16px;
        color: #333;
    }
`;

export const sortContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        margin-right: 15px;
        color: #007bff;
        transition: color 0.3s;

        &:hover {
            color: #0056b3;
        }
    }
`;

export const noMembersMessage = styled.span`
    font-size: 20px;
`;
