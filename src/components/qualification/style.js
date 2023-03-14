import styled from "styled-components";

export const ContainerQuali = styled.div`
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
        color: #000000;
        letter-spacing: 4px;
        text-shadow: 4px 4px 8px black;
        margin-bottom: 32px;
    }
`;

export const CertificadoContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: row;
    border-radius: 16px;  

    div {
        border-top: 8px solid #FFC0CB;
    border-bottom: 5px solid #FFC0CB;
    border-left: 8px solid #FFC0CB;
    border-right: 8px solid #FFC0CB;
    margin-top: 16px;
    margin-left: 48px;
    box-shadow: 4px 4px 8px black;
    }

    img {
        height: 550px;
    }
`;