import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000000;
    min-height: 100vh;

    h1 {
        display: flex;
        font-size: 64px;
        justify-content: center;
        align-items: center;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(black, grey);
    }

    h2 {
        display: flex;
        font-size: 30px;
        margin-top: 32px;
        align-items: center;
        justify-content: center;
        color: #000000;
        text-align: center;
        max-width: 1000px;
    }
`;