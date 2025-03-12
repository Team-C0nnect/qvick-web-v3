import styled from "styled-components";

export const AnnouncementBackground = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 200px; 
    max-height: 550px; 
    overflow-y: auto; 
`;

export const HeaderContainer = styled.div`
    width: 59%;
    background: white;
    padding: 20px;
    margin-top: -550px;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    justify-content: center;
    position: fixed;
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
    h3 {
        color: #000000;
    }
    
    p {
        color: #6C6C6C;
    }
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

export const AnnouncementTitle = styled.h2`
    font-weight: bold;
    margin-left: 5px;
    font-size: 18px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    height: 270px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h3`
    font-weight: bold;
    font-size: 15px;
    margin-left: 5px;
    margin-top: 5px;
`;

export const Input = styled.input`
    width: 95%;
    padding: 8px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const SearchInput = styled.input`
    width: 50%;
    border: none;
`

export const TextArea = styled.textarea`
    width: 95%;
    padding: 8px;
    height: 120px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
    margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

export const CancelButton = styled.button`
    background: #ccc;
    color: black;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #999;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 200px;  
`;

export const WriteButton = styled.button`
    background-color: #0389FF;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #026ac1;
    }
`;