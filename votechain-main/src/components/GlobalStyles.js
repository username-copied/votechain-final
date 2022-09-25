import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //for adding style to whole website just like in css *
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow:hidden;
        font-weight:bold;
        font-family: 'Poppins', sans-serif;
    }
    
   
`;

export default GlobalStyle;
