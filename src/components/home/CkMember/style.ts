import styled, { css } from "styled-components";

const flexAlign = css`
    display: flex;
    align-items: center;
`;

const infoBox = css`
    ${flexAlign};
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
        font-weight: 500;
        color: #333;
    }
`;

export const memberContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    background-color: #fff;
    text-align: center;
    height: 35px;
    line-height: 35px;
`;

export const tr = styled.tr`
    &:nth-child(even) {
        background-color: #fff;
    }
`;

export const infoContainer = styled.div`
    ${flexAlign};
    width: 80%;
    margin: 40px 0 30px;
`;

export const timeContainer = styled.div`
    ${infoBox};
    margin-right: 20px;
`;

export const datePickerContainer = styled.div`
    ${infoBox}

    input {
        border: none;
        font-size: 16px;
        color: #333;
        background: transparent;
        outline: none;
        width: 100%;
    }
`;

export const exportButton = styled.button`
    ${flexAlign};
    justify-content: center;
    width: 120px;
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
    ${flexAlign};
    width: 80%;
    margin-bottom: 30px;
`;

export const peopleContainer = styled.div`
    ${infoBox};
    margin-right: 20px;
`;

export const ckContainer = styled.div`
    ${infoBox};
`;

export const sortContainer = styled.div`
    ${flexAlign};
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

export const flexRight = styled.div`
  ${flexAlign};
  margin-left: auto;
`;
