import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

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

export const StretchedLink = styled(Link)`
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

export const VisuallyHidden = styled.span`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
`;
