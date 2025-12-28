import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMoviesState, setCurrentPage } from "../features/movies/moviesSlice";
import MoviesFeature from "../features/movies/Movies";
import Pagination from "../components/Pagination";

const Movies = () => {
    const { currentPage, itemsPerPage } = useSelector(selectMoviesState);
    const [totalPages, setTotalPages] = useState(1);

    return (
        <>
            <Pagination
                currentPage={currentPage}
                dispatchPageChange={setCurrentPage}
                totalPages={totalPages}
            />
            <MoviesFeature />
        </>
    )
};

export default Movies;
