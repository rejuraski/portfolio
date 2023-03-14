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
    padding: 0px 3%;
    width: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    position: fixed;
    top: 0;

    img {
        height: 120px;
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
        color: #FFF5EE;
        font-size: 25px;
        font-weight: bold;
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
}`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;