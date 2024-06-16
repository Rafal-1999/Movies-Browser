import styled from "styled-components";
import { ReactComponent as NoResultsImage } from '../../assets/images/noResults.svg';
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
    font-weight: 500;
    line-height: 18.2px;
    margin: 40px;

    @media ${device.sm} {
        font-size: 36px;
        font-weight: 600;
        line-height: 43.2px;
    }
`;

export const Image = styled(NoResultsImage)`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;

    @media ${device.xs} {
        justify-content: flex-start;
        min-width: 150px;
    }

    @media ${device.md} {
        justify-content: space-between;
        min-width: 250px;
    }
`;
