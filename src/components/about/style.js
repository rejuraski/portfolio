import styled from "styled-components";

export const ContainerAbout = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFAFA;
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
        margin-top: 15px;
        padding: 16px;
        text-align: justify;
        color: #262626;
        width: 800px;
    }
`;

export const MyPhotoContainer = styled.div`
    border-radius: 16px;
    background-color: #FFC0CB;
    border-top: 8px solid #FFC0CB;
    border-bottom: 5px solid #FFC0CB;
    border-left: 8px solid #FFC0CB;
    border-right: 8px solid #FFC0CB;
    margin-top: 16px;
    margin-left: 48px;
    box-shadow: 4px 4px 8px black;
`;

export const MyPhotoImg = styled.img`
    height: 290px;
    border-radius: 8px;
`;