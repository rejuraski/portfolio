import styled from "styled-components";

export const Container = styled.nav`
    align-items: center;
    display: flex;
    justify-content: center;
    

`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    position: fixed;
    top: 0;

    h1 {
        font-size: 50px;
        cursor: pointer;
        justify-content: flex-start;
        font-family: 'Cormorant Upright', serif;
        color: #FFF0F5;
    }

    h1 strong {
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(#FF1493, white);
    }

    img {
        height: 60px;
        margin-left: 16px;
    }

    ul {
        display: flex;
    }

    li + li {
        margin-left: 32px;
    }

    li {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;  
        color: #FFF0F5;
        font-size: 20px;
        font-weight: bold;
    }

    li:hover {
        background-color: pink;
        cursor: pointer;
        color: black;
        text-shadow: 0 4px 4px #FF1493;
    }
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
`;