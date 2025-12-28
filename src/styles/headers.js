import styled from "styled-components";
import { device } from "./breakpoints";

export const HeaderTwo = styled.h2`
    margin: 24px 0 12px;
    color: #18181B;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s linear;

    @media ${device.sm} {
        margin: 56px 0 24px;
        font-size: 36px;
    }
`;

export const HeaderThree = styled.h3`
    color: orange;
    font-size: 30px;

    @media ${device.sm} {
        font-size: 45px;
    }
`;
