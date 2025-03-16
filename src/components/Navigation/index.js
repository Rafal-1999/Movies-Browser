import { StyledNavigation, NavigationLink } from "./styled";

const Navigation = ({ links }) => (
    <nav>
        <StyledNavigation>
            {links.map(({ title, link }) => (
                <li key={title}>
                    <NavigationLink to={link} $activeClassName="active">
                        {title}
                    </NavigationLink>
                </li>
            ))}
        </StyledNavigation>
    </nav>
);

export default Navigation;
