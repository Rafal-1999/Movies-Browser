import { useLocation } from "react-router-dom";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import {
    BoxBackground,
    Wrapper,
    Box,
    MainHeader,
    LogoLink,
    LogoIcon
} from "./styles/layout";
import { mainNavigation } from "./data/mainNavigation";

const App = () => {
    const location = useLocation();

    return (
        <header>
            <BoxBackground $background="#18181B">
                <Container maxWidth="1336px" padding="0 16px">
                    <Wrapper>
                        <Box>
                            <MainHeader>
                                <LogoLink to="/">
                                    <LogoIcon className="icon-video" aria-hidden="true" />
                                    Movies Browser
                                </LogoLink>
                            </MainHeader>
                            <Navigation links={mainNavigation} />
                        </Box>
                        {location.pathname.includes("/movies") &&
                            <Search
                                labelText="Search for movies"
                                placeholderText="Search for movies..."
                            />
                        }
                        {location.pathname.includes("/people") &&
                            <Search
                                labelText="Search for people"
                                placeholderText="Search for people..."
                            />
                        }
                    </Wrapper>
                </Container>
            </BoxBackground>
        </header>
    )
};

export default App;
