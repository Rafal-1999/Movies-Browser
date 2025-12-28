import { useSelector } from "react-redux";
import { selectMoviesForPage } from "../moviesSlice";
import Categories from "../Categories";
import {
    Cards,
    Card,
    ImageBox,
    Image,
    CardContent,
    CardTitle,
    CardYear,
    CardRate,
    CardStarIcon,
    CardRateResult,
    CardVotesResult
} from "./styled";

const MoviesList = () => {
    const movies = useSelector(selectMoviesForPage);

    return (
        movies && (
            <Cards>
                {movies.map(movie => (
                    <Card key={<></>}>
                        <strong>{movie.title}</strong><br /><br />
                        <a href="#">
                            Przejdź do szczegółów filmu
                        </a>
                        <CardContent>
                            <ImageBox>
                                {movie.poster_path ? (
                                    <Image
                                        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                                        width={<></>}
                                        height={<></>}
                                        alt={<></>}
                                    />
                                ) : (
                                    <p>{movie}.</p>
                                )}
                            </ImageBox>
                            <div>
                                <CardTitle>Tytuł</CardTitle>
                                <CardYear>2020</CardYear>
                                <Categories categories={["1", "2", "3"]} />
                                <CardRate>
                                    <CardStarIcon />
                                    <CardRateResult>7.5</CardRateResult>
                                    <CardVotesResult>35 votes</CardVotesResult>
                                </CardRate>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Cards>
        )
    )
};

export default MoviesList;
