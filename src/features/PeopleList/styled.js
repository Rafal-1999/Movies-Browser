import styled from "styled-components";
import { StretchedLink } from "../../styles/global";
import { device } from "../../styles/breakpoints";

export const PeopleCards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    @media ${device.sm} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.md} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.lg} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const PersonCard = styled.div`
    background: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media ${device.xs} {
        flex-direction: row;
    }

    @media ${device.sm} {
        flex-direction: column;
    }
`;

export const PersonLink = styled(StretchedLink)`
    &:hover,
    &:focus {
        & + ${PersonContent} {
            background: orange;

            ${PersonImage} {
                transform: scale(1.2);
            }

            ${PersonRole} {
                color: #FFFFFF;
            }

            ${PersonName} {
                color: #FFFFFF;
            }
        }
    }
`;

export const PersonContent = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear;

    @media ${device.xs} {
        flex-direction: row;
    }

    @media ${device.sm} {
        flex-direction: column;
    }
`;

export const PersonImageBox = styled.div`
    background: green;
    border-radius: 20px;
    position: relative;

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
        background: blue;
        display: flex;
        align-content: center;
        font-size: 18px;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    aspect-ratio: 9 / 4;
`;

export const PersonName = styled.h3`
    color: #18181D;
    margin: 8px 0 0;
    font-size: 16px;

    @media ${device.sm} {
        font-size: 20px;
    }
`;

export const PersonRole = styled.span`
    color: orange;
    font-size: 16px;

    @media ${device.sm} {
        font-size: 20px;
    }
`;
