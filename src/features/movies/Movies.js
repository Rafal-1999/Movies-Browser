import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectMovies,
    selectCurrentPage,
    selectMoviesPerPage,
    selectMoviesPerApiPage,
    fetchMoviesRequest
} from "./moviesSlice";
import { getApiPagesForView } from "../../utils/getApiPagesForView";
import MoviesList from "./MoviesList";
import { HeaderTwo } from "../../styles/headers";
import { selectMoviesState, setMoviesPerPage} from "./moviesSlice";

const Movies = () => {

    const itemsPerPage = useSelector(selectMoviesState);
    const [totalPages, setTotalPages] = useState(1);


    const movies = useSelector(selectMovies);
    const currentPage = useSelector(selectCurrentPage);
    const moviesPerPage = useSelector(selectMoviesPerPage);
    const moviesPerApiPage = useSelector(selectMoviesPerApiPage);

    const dispatch = useDispatch();

    useEffect(() => {
        const { startApiPage, endApiPage } = getApiPagesForView(currentPage, moviesPerPage, moviesPerApiPage);

        for (let page = startApiPage; page <= endApiPage; page++) {
            const apiPage = page + 1;

            if (!movies[apiPage]) {
                dispatch(fetchMoviesRequest({ url: `https://api.themoviedb.org/3/movie/popular?api_key=c6fee36799c48aee18ba4964841fa55c&page=${apiPage}`, type: "movies" }));
            }
        }
    }, [
        movies,
        currentPage,
        moviesPerPage,
        moviesPerApiPage,
        dispatch
    ]);


    useEffect(() => {
        const updateItemsPerPageByScreenWidth = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1200) {
                dispatch(setMoviesPerPage(8));
            } else if (screenWidth >= 992) {
                dispatch(setMoviesPerPage(6));
            } else {
                dispatch(setMoviesPerPage(8));
            }

            console.log(`Wartość currentPage: ${currentPage}`);
            console.log(`Wartość itemsPerPage: ${itemsPerPage}`);
        };

        updateItemsPerPageByScreenWidth();

        window.addEventListener("resize", updateItemsPerPageByScreenWidth);
        return () => window.removeEventListener("resize", updateItemsPerPageByScreenWidth);
    }, [dispatch, currentPage, itemsPerPage]);

    useEffect(() => {
        const pages = Math.ceil((500 * 20) / itemsPerPage);
        setTotalPages(pages);
    }, [currentPage, itemsPerPage]);

    return (
        <section>
            <HeaderTwo>Movies list</HeaderTwo>
            <MoviesList />
        </section>
    )
};

export default Movies;
