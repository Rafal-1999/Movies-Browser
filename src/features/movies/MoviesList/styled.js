import styled from "styled-components";
import { StretchedLink } from "../../../styles/global";
import { device } from "../../../styles/breakpoints";

const cardBorderRadius = "15px";

export const Cards = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(150px, 324px));
    gap: 16px;

    @media ${device.sm} {
        grid-template-columns: repeat(auto-fit, minmax(200px, 324px));
        gap: 24px;
    }

    @media ${device.md} {
        /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    }
`;

export const Card = styled.div`
    padding: 16px;
    background: #FFFFFF;
    border-radius: ${cardBorderRadius};
    position: relative;

    &:focus-within {
        background: #000000;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${device.xs} {
        flex-direction: row;
    }

    @media ${device.sm} {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
    transition: all 0.3s linear;
`;

export const CardYear = styled.span`
    margin-bottom: 12px;
    color: #7E839A;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    transition: all 0.3s linear;

    @media ${device.sm} {
        margin-bottom: 14px;
        font-size: 16px;
    }
`;

export const CardTitle = styled.h3`
    margin: 0 0 12px;
    color: #18181B;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s linear;

    @media ${device.sm} {
        margin-bottom: 16px;
        font-size: 22px;
    }
`;

export const CardRateResult = styled.strong`
    color: #000;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s linear;
`;

export const CardVotesResult = styled.span`
    color: gray;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s linear;
`;

export const CardLink = styled(StretchedLink)`
    border-radius: ${cardBorderRadius};

    &:hover,
    &:focus {
        & + ${CardContent} {

            ${Image} {
                transform: scale(1.2);
            }

            ${CardYear} {
                color: #FFF;
            }

            ${CardTitle} {
                color: #FFF;
            }

            ${CardRateResult} {
                color: #FFF;
            }

            ${CardVotesResult} {
                color: #FFF;
            }
        }
    }
`;

export const ImageBox = styled.div`
    width: 100%;
    max-height: 250px;
    padding-bottom: 140%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    &::before {
        ${({ movie }) => movie} {
            content: "\\e903";
        }
        ${({ person }) => person} {
            content: "\\e904";
        }
        width: 100%;
        height: 100%;
        color: #FFF;
        background: lightblue;
        display: flex;
        align-content: center;
        font-size: 18px;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media ${device.xs} {
        width: 114px;
        height: 169px;
        padding-bottom: 0;
        flex-shrink: 0;
    }

    @media ${device.sm} {
        width: 100%;
        height: 434px;
    }
`;

export const CardRate = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export const CardStarIcon = styled.i`
    color: gold;
`;
