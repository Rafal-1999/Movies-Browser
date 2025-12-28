import { useDispatch } from "react-redux";
import { fetchDataFromApi } from "../services/fetchDataFromApi";

const People = () => {
    const dispatch = useDispatch();
    dispatch(fetchDataFromApi("https://api.themoviedb.org/3/movie/popular?api_key=c6fee36799c48aee18ba4964841fa55c&page=1"));

    return (
        <p>Lista osób (aktorów).</p>
    )
};

export default People;
