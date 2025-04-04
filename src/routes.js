import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import People from "./pages/People";
import Person from "./pages/Person";
import NotFound from "./pages/NotFound";

const routes = [
    {
        name: "Movies",
        path: "/movies",
        element: <Movies />,
        title: "movies"
    },
    {
        name: "Movie details",
        path: "/movies/:id",
        element: <Movie />,
        title: "movie"
    },
    {
        name: "People",
        path: "/people",
        element: <People />,
        title: "people"
    },
    {
        name: "Person details",
        path: "/people/:id",
        element: <Person />,
        title: "person"
    },
    {
        name: "Not found page",
        path: "*",
        element: <NotFound />,
        title: "not found"
    }
];

export default routes;
