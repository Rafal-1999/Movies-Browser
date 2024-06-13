import StyledNavigation from "./styled";

const Navigation = ({ props }) => {
    return (
        <nav>
            <StyledNavigation>
                <a>Movies</a>
                <a>People</a>
            </StyledNavigation>
        </nav>
    )
};

export default Navigation;
