import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledNavigation = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const NavigationLink = styled(NavLink)`
    color: #FFFFFF;
    padding: 8px 12px;
    display: block;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 29px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.4s linear;

    &.${({ $activeClassName }) => $activeClassName} {
        border: 1px solid #FFFFFF;
    }

    &:hover,
    &:focus {
        color: #000000;
        background: #FFFFFF;
    }

    @media ${device.sm} {
        padding: 13.5px 24px;
        font-size: 14px;
    }
`;
