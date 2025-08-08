import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { VisuallyHidden } from "../../styles/global";
import { device } from "../../styles/breakpoints";

export const PaginationBox = styled.nav`
    display: flex;
    justify-content: center;
`;

export const PaginationPages = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    transition: all 0.3s linear;

    @media ${device.md} {
        gap: 12px;
    }
`;

export const PaginationItem = styled.li`
    width: 100%;
    text-align: center;
    order: 1;

    @media (min-width: 360px) {
        width: auto;
        text-align: unset;
        order: 0;
    }

    @media ${device.md} {
        margin: 0 12px;
        transition: margin 0.3s linear;
    }
`;

export const PaginationLink = styled(Link)`
    height: 36px;
    padding: 7.5px 12px;
    border-radius: 5px;
    line-height: 1;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.5s linear;

    ${({ $prev }) => $prev && css`
        color: #18181B;
        background: #E4E6F0;
    `}

    ${({ $next }) => $next && css`
        color: #333333;
        background: #D6E4FF;
    `}

    @media ${device.sm} {
        padding: 8px 16px;
        gap: 8px;
    }
`;

export const PaginationLinkIcon = styled.i`
    ${({ direction, $double }) => {
        const isLeft = direction === "left";
        const iconColor = isLeft ? "#7E839A" : "#0044CC";
        const iconShape = isLeft ? "\\e900" : "\\e901";
        const content = $double ? `${iconShape} ${iconShape}` : iconShape;

        return css`
            color: ${iconColor};

            &::before {
                content: "${content}";
                font-family: "icomoon";
                font-size: 12px;
                font-style: normal;
                letter-spacing: 4px;
                margin-right: -4px;
            }
        `;
    }}
`;

export const PaginationLinkText = styled(VisuallyHidden)`
    opacity: 0;

    @media ${device.sm} {
        width: auto;
        height: auto;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        position: static;
        opacity: 1;
        overflow: visible;
        transition: opacity 0.5s linear;
        white-space: normal;
        clip: auto;
    }
`;

export const PaginationInfo = styled.p`
    margin: 0;
    color: #7E839A;
    font-size: 14px;
    font-weight: 400;

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const PaginationCount = styled.strong`
    color: #18181B;
    font-weight: 600;
`;
