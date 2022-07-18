import styled from "styled-components";
import logo from "../../assets/logo.png";

export const ContainerProjects = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF0F5;
    flex-direction: column;
    padding: 32px 0;
    min-height: 100vh;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        color: #FF1493;
        letter-spacing: 4px;
        text-shadow: 4px 4px 8px black;
        margin-bottom: 32px;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1000px
    }

    li {
        padding: 32px 48px;
        border-radius: 32px;
        border: 8px solid #FF1493;
        margin-bottom: 32px;
    }

    li {
        margin-right: 32px;
        border-radius: 32px;
        background-color: rgba(255, 20, 147, .2);
    }

    li:hover {
        background-color: pink;
        cursor: pointer;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
    }

    li:hover a {
        color: black;
        text-shadow: 0 4px 4px #FF1493;
    }

    li a {
        font-size: 24px;
        font-weight: bold;
    }
`;

