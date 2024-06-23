import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import NoResults from "./components/NoResults";
import Error from "./components/Error";
import Loading from "./components/Loading";

const App = () => {
    return (
        <HashRouter>
            <header>
                <Header />
            </header>
  	        <NoResults />
    	    <Error />
            <Loading />
        </HashRouter>
    )
};

export default App;
