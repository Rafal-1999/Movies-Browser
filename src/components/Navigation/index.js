import { StyledNavigation, NavigationLink } from "./styled";

const Navigation = ({ links }) => {
    const createNavigationLinks = (links) => {
        return links.map(({ title, link }) => (
            <li key={title}>
                <NavigationLink
                    $activeClassName="active"
                    to={`/${link}`}
                >
                    {title}
                </NavigationLink>
            </li>
        ));
    };

    return (
        <nav>
            <StyledNavigation>
                {createNavigationLinks(links)}
            </StyledNavigation>
        </nav>
    )
};

export default Navigation;
