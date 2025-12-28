import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMovieById } from "../moviesSlice";
import Categories from "../Categories";
import {
    StyledCardDetails,
    ImageContainer,
    Image,
    CardTitle,
    Text,
    CardInformation,
    CardYear,
} from "./styled";

const MovieDetails = () => {
    const { id } = useParams();
    const movie = useSelector(state => getMovieById(state, id));

    return (
        movie ? (
            <StyledCardDetails>
                <ImageContainer>
                    <Image
                        src={<></>}
                        width={<></>}
                        height={<></>}
                        alt={<></>}
                    />
                </ImageContainer>
                <CardInformation>
                    <CardTitle>Tytuł</CardTitle>
                    <CardYear>2020</CardYear>
                    <Categories categories={["1", "2", "3"]} />
                </CardInformation>
                <Text />
            </StyledCardDetails>
        ) : (
            <p>Przepraszamy, brak szczegółów filmu.</p>
        )
    )
};

export default MovieDetails;
