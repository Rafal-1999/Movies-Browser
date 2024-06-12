import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledHeader = styled.div`
    background: #18181B;
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
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 19px;

    @media ${device.lg} {
        gap: 80px;
    }
`;

export const HeaderOne = styled.h1`
    color: #FFFFFF;
    margin: 0;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;

    @media ${device.sm} {
        font-size: 24px;
    }
`;
