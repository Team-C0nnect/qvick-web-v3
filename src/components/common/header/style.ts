import styled from "styled-components";
import { Link } from "react-router-dom";

export const headWrap = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #0389FF;
    position: fixed;  
    top: 0;
    flex-direction: row;
`;

export const logoImg = styled.img`
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    margin-right: 20px;
`;

export const navBar = styled.nav`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    &:hover {
        text-decoration: underline;
    }
`;

export const nameContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50px;
    padding: 10px 20px;
    gap: 10px;
    margin-right: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 150px;
    height: 25px;
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

export const dropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 50px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    width: 190px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

export const dropdownItem = styled.div`
    padding: 10px 20px;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
        background: #f0f0f0;
    }
`;