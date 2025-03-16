import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledNavigation = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const NavigationLink = styled(NavLink)`
    color: #FFFFFF;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 29px;
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s linear;

    &.${({ $activeClassName }) => $activeClassName} {
        border-color: #FFFFFF;
    }

    &:hover,
    &:focus {
        color: #000000;
        background: #FFFFFF;
    }

    @media ${device.sm} {
        padding: 13.55px 24px;
    }
`;
