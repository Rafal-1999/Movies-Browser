import { StyledNavigation, NavigationLink } from "./styled";

const Navigation = () => {
    return (
        <nav>
            <StyledNavigation>
                <NavigationLink to="/movies" activeClassName="active">Movies</NavigationLink>
                <NavigationLink to="/people" activeClassName="active">People</NavigationLink>
            </StyledNavigation>
        </nav>
    )
};

export default Navigation;
