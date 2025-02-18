import styled from "styled-components";

export const AnnouncementBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
`;

export const AnnouncementContainer = styled.div`
    width: 60%;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AnnouncementList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const AnnouncementItem = styled.li<{ selected: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    background: ${({ selected }) => (selected ? "#e3f2fd" : "#ffffff")};
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #e3f2fd;
    }
`;

export const AnnouncementInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #333;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const EditButton = styled.button`
    padding: 5px 10px;
    background-color: #ffca28;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #ffb300;
    }
`;

export const DeleteButton = styled.button`
    padding: 5px 10px;
    background-color: #e57373;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #d32f2f;
    }
`;