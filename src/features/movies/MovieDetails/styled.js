import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledCardDetails = styled.div`
    background: #FFF;
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;

    @media ${device.xs} {
        grid-template-areas:
            "image information"
            "text text";
    }

    @media ${device.sm} {
        padding: 45px;
        gap: 100px;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;

    @media ${device.xs} {
        grid-area: image;
    }
`;

export const Image = styled.img`
    width: 100%;
    position: absolute;
    aspect-ratio: 16 / 9;
`;

export const CardInformation = styled.div`
    @media ${device.xs} {
        grid-area: information;
    }
`;

export const Text = styled.p`
    @media ${device.xs} {
        grid-area: text;
    }
`;

export const CardTitle = styled.h3`
    color: #000;
    margin: 0;
    font-size: 24px;

    @media ${device.sm} {
        font-size: 32px;
    }
`;

export const CardProduction = styled.span`
    color: gray;
`;

export const CardYear = styled.span`
    color: gray;
    display: inline-block;
`;
