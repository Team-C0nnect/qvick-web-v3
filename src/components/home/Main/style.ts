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

export const filterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 80%;
    margin: 20px 0;

`;

export const filterButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`;

export const filterGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 222px;
    margin-right: 20px;
    label {
        font-size: 14px;
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
    }

    input, select {
        width: 222px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        box-sizing: border-box;

        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
        }
    }
`;

export const exportButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
    select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        cursor: pointer;

        &:focus {
            outline: none;
            border-color: #007bff;
        }
    }
    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
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

export const NckContainer = styled.div`
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

export const ReloadButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 24px;
    img {
        width: 24px;
        height: 24px;
    }
`

export const searchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    height: 19px;

    input {
        border: none;
        outline: none;
        font-size: 14px;
        color: #333;
        width: 100%;
        background-color: transparent;

        &::placeholder {
            color: #aaa;
        }
    }

    img {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        cursor: pointer;
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
