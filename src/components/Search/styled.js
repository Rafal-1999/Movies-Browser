import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledForm = styled.div`
    width: 100%;
    height: 44px;

    @media ${device.sm} {
        max-width: 288px;
        height: 48px;
    }

    @media ${device.lg} {
        max-width: 432px;
    }
`;

export const InputBox = styled.form`
    width: 100%;
    height: 100%;
    position: relative;

    @media ${device.xs} {
        &::before {
            content: "";
            width: 13px;
            height: 13px;
            margin: auto 0;
            color: #627489;
            font-size: 11px;
            font-weight: 600;
            top: 0;
            left: 18px;
        }
    }
`;

export const FormLabel = styled.label`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    padding: 14px 12px;
    font-size: 13px;
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    position: relative;

    @media ${device.xs} {
        padding: 14px 14px 13px 40px;
        font-size: 16px;
    }
`;
