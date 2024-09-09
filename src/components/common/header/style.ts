import styled from "styled-components";

export const headWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #0389FF;
    position: relative;
    height: 80px; 
`;

export const logoImg = styled.img`
    width: 90px; 
    height: 90px;
    flex-shrink: 0;
`;

export const navBar = styled.nav`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const nameContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50px;
    padding: 10px 20px;
    gap: 10px;
    margin-right: 25px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 150px;
    height: 25px;
;
`;

export const profileImg = styled.img`
    width: 30px; 
    height: 30px;
    border-radius: 50%;
`;

export const profileName = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    margin-left: 20px;
`;
