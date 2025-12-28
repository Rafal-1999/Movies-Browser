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
        background: #222222;
    }

    :focus {
        outline: 10px dashed lightgreen;
    }
`;

export const StretchedLink = styled(Link)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    text-indent: 600px;
    overflow: hidden;
`;

export const VisuallyHidden = styled.span`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    display: inline-block;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
`;
