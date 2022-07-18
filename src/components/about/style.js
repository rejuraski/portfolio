import styled from "styled-components";

export const ContainerAbout = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF0F5;
    flex-direction: column;
    background-color: rgba(255, 20, 147, .2);
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
    }
`;

export const ContentAbout = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;

    p {
        font-size: 24px;
        margin-top: 25px;
        padding: 16px;
        text-align: justify;
        color: #FFF0F5;
        width: 800px;
    }
`;

export const MyPhotoContainer = styled.div`
    border-radius: 16px;
    background-color: #FF1493;
    border-top: 8px solid #FF1493;
    border-bottom: 5px solid #FF1493;
    border-left: 8px solid #FF1493;
    border-right: 8px solid #FF1493;
    margin-top: 16px;
    margin-left: 48px;
    box-shadow: 4px 4px 8px black;
`;

export const MyPhotoImg = styled.img`
    height: 300px;
    border-radius: 8px;
`;