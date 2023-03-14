import styled from "styled-components";


export const ContainerProjects = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
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
        border: 8px solid #D3D3D3;
        margin-bottom: 32px;
    }

    li {
        margin-right: 32px;
        border-radius: 32px;
    }

    li a {
        font-size: 24px;
        font-weight: bold;
    }

    span {
        color: #262626;
    }

    a {
	position: relative;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 4px;
		bottom: 0;
		margin: -5px 0;
		background-color: pink;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.4s ease-in-out 0s;
	}
	&:hover:before {
		visibility: visible;
		transform: scaleX(1);
	}
}
`;

