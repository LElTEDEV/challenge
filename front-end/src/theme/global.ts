import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.gray_100};
    }
    
    body, button, input, textarea {
        font-family: "Roboto", serif;
    }


`;
