import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    html {
        box-sizing: inherit;
        scroll-behavior: smooth;
    }

    body {
        background: #F5F5FA;
        font-family: "Poppins", sans-serif;
    }
`;
