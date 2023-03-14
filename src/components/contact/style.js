import styled from "styled-components";

export const ContainerContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF0F5;
    flex-direction: column;
    background-color: rgba(0, 0, 39, .2);
    padding: 32px 0;
    min-height: 100vh;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        color: #000000;
        letter-spacing: 4px;
        text-shadow: 4px 4px 8px black;
        margin-bottom: 32px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        background-color: rgba(0, 0, 0, .5);
        padding: 16px;
        width: 100%;
    }

    div:hover {
        background-color: rgba(255, 179, 204, .5);;
        cursor: pointer;
    }

    div img {
        height: 40px;
    }

    div a, div h2 {
        margin-left: 16px;
        font-size: 24px;
        font-weight: bold;
    }

    img {
        color: pink;
    }
`;