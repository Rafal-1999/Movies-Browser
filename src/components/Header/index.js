import Container from "../Container";
import Navigation from "../Navigation";
import Search from "../Search";
import {
    StyledHeader,
    Wrapper,
    Box,
    HeaderOne
} from "./styled";
import { mainNavigation } from "../../data/mainNavigation";

const Header = () => (
    <StyledHeader>
        <Container maxWidth="1336px" padding="0 16px">
            <Wrapper>
                <Box>
                    <HeaderOne>
                        Movies Browser
                    </HeaderOne>
                    <Navigation links={mainNavigation} />
                </Box>
                <Search
                    idName="search"
                    typeValue="text"
                    placeholderText="Search for movies..."
                />
            </Wrapper>
        </Container>
    </StyledHeader>
);

export default Header;
