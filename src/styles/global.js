import { createGlobalStyle } from "styled-components";
import wallpaper from "../assets/wallpaper1.jpg";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

     body {
        background-image: url(${wallpaper});
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }

    a {
        text-decoration: none;
        color: #FFF0F5;
    }

    ol, ul {
	    list-style: none;
        }
`

export default GlobalStyle;

