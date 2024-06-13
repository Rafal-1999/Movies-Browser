import Container from "../Container";
import Navigation from "../Navigation";
import Search from "../Search";
import {
    StyledHeader,
    Wrapper,
    Box,
    HeaderOne,
    WrapperContainer
} from "./styled";

const Header = () => {
    <StyledHeader>
        <Container maxWidth="1336px" padding="0 16px">
            <WrapperContainer>
                <Box>
                    <HeaderOne>
                        Movies Browser
                    </HeaderOne>
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
};

export default Header;
