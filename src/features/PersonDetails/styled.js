import styled from "styled-components";

export const PersonCard = styled.div`
    padding: 20px;
    background: #FFF;
    border-radius: 40px;
    position: relative;
`;

export const PersonImageBox = styled.div`
    background: gray;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    aspect-ratio: 9 / 16;

    &::before {
        content: "\\e903";
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const PersonImage = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    object-fit: contain;
    transition: all 0.3s linear;
`;

export const PersonContent = styled.div`
    transition: all 0.3s linear;
`;

export const PersonName = styled.h3`
    width: auto;
    color: #000000;
    margin: 20px auto 0 auto;
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
`;

export const PersonRole = styled.strong`
    color: gray;
    margin: 40px auto 0 auto;
    display: block;
    font-size: 20px;
    font-weight: 400;
`;
