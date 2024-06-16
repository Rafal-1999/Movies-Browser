import styled from "styled-components";
import { ReactComponent as LoadingImage } from '../../assets/images/loading.svg';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
    padding: 16px;

    @media ${device.sm} {
        padding: 12px;
    }

    @media ${device.xl} {
        padding: 32px;
    }
`;

export const Header = styled.h2`
    font-size: 14px;
    font-weight: 600;
    line-height: 18.2px;
    margin: 40px;

    @media ${device.sm} {
        font-size: 36px;
        line-height: 43.2px;
    }
`;

export const Image = styled(LoadingImage)`
    display: flex;
    justify-content: center;
    margin: 24px auto;
    height: 35px;
    width: 35px;
    animation: spin 1.5s linear infinite;

    @media ${device.sm} {
        height: 91px;
        width: 91px;
        margin: 120px auto;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;