import {
    useLocation,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
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
import routes from "./routes";

const App = () => {
    const location = useLocation();

    const pagesRoutes = routes.map(({ title, path, element }) => {
        return <Route key={title} path={path} element={element} />;
    });

    return (
        <>
            <header>
                <BoxBackground $background="#18181B">
                    <Container maxWidth="1368px" padding="0 16px">
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
            <main>
                <Container maxWidth="1400px" padding="0 16px">
                    <Routes>
                        {pagesRoutes}
                        <Route path="/" element={<Navigate to="/movies" />} />
                    </Routes>
                </Container>
            </main>
        </>
    )
};

export default App;
