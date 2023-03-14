import styled from "styled-components";

export const ContainerTech = styled.div`
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

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1000px;
    }

    li {
        padding: 32px 48px;
        margin-bottom: 32px;
        background-color: #D3D3D3;
    }

    li {
        margin-right: 32px;
        border-radius: 32px;
    }

    img {
        height: 90px;
        transition: 0.3s ease-in-out;
    }

    img:hover {
        transform: scale(1.2);
    }
    
    
`;