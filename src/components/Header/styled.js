import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledHeader = styled.div`
    background: #18181B;
`;

export const WrapperContainer = styled.div`
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

export const MainHeader = styled.h1`
    color: #FFFFFF;
    display: block;
    font-size: 13px;
    font-weight: 400;
    margin: 0;

    @media ${device.xs} {
        font-size: 24px;
    }
`;
