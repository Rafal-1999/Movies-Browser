import { HashRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
    return (
        <HashRouter>
            <header>
                <Header />
            </header>
        </HashRouter>
    )
};

export default App;
