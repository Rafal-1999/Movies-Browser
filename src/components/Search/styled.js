import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SearchForm = styled.form`
    width: 100%;

    @media ${device.md} {
        width: auto;
        max-width: 432px;
        flex: 1 1 0%;
    }
`;

export const SearchIcon = styled.span`
    color: #627489;
    margin: auto 0;
    font-size: 13px;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 18px;
    bottom: 0;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 44px;
    padding: 14px 12px;
    background: #FFFFFF;
    background-position: left 0 center;
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    font-size: 13px;
    position: relative;
    transition: all 0.3s linear;

    &::placeholder {
        color: #7E839A;
    }

    @media ${device.xs} {
        padding: 14px 14px 13px 40px;
        background-image: url("data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.7659 1.52802C5.21587 1.52802 1.52734 5.21654 1.52734 9.76657C1.52734 14.3166 5.21587 18.0051 9.7659 18.0051C14.3159 18.0051 18.0045 14.3166 18.0045 9.76657C18.0045 5.21654 14.3159 1.52802 9.7659 1.52802ZM0.0273438 9.76657C0.0273438 4.38812 4.38744 0.0280151 9.7659 0.0280151C15.1444 0.0280151 19.5045 4.38812 19.5045 9.76657C19.5045 12.3045 18.5337 14.6156 16.9432 16.349L20.0713 19.469C20.3646 19.7615 20.3652 20.2363 20.0727 20.5296C19.7802 20.8229 19.3053 20.8235 19.012 20.531L15.8467 17.3739C14.1803 18.7076 12.0662 19.5051 9.7659 19.5051C4.38744 19.5051 0.0273438 15.145 0.0273438 9.76657Z' fill='%23627489'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: left 16px center;
        font-size: 16px;
    }

    @media ${device.sm} {
        height: 48px;
        padding-left: 64px;
        background-size: 18px 18px;
        background-position: left 26px center;
    }
`;
