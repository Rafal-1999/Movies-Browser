import Container from "../Container";
import Navigation from "../Navigation";
import Search from "../Search";
import {
    StyledHeader,
    Wrapper,
    Box,
    WrapperContainer,
    MainHeader
} from "./styled";

const Header = () => (
    <StyledHeader>
        <Container>
            <WrapperContainer>
                <Box>
                    <MainHeader>
                        Movies Browser
                    </MainHeader>
                    <Navigation />
                </Box>
                <Search
                    idName="search"
                    typeValue="text"
                    placeholderText="Search for movies..."
                />
            </WrapperContainer>
        </Container>
    </StyledHeader>
);

export default Header;
