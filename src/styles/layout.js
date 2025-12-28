import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./breakpoints";

export const BoxBackground = styled.div`
    background: ${({ $background }) => $background};
`;

export const Wrapper = styled.div`
    padding: 24px 0 16px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

    @media ${device.sm} {
        padding: 23px 0;
    }
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 19px;

    @media ${device.md} {
        width: auto;
    }

    @media ${device.lg} {
        gap: 80px;
    }
`;

export const MainHeader = styled.h1`
    margin: 0;
`;

export const LogoLink = styled(Link)`
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s linear;

    @media ${device.xs} {
        font-size: 24px;
    }
`;

export const LogoIcon = styled.i`
    margin-right: 10px;
    font-size: 13px;
    vertical-align: middle;
    transition: all 0.3s linear;

    @media ${device.xs} {
        margin-right: 12px;
        font-size: 24px;
    }
`;
