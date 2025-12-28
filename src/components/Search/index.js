import {
    useQueryParameter,
    useReplaceQueryParameter
} from "../../features/movies/queryParameters";
import { SearchForm, SearchFormInput } from "./styled";
import { VisuallyHidden } from "../../styles/global";

const Search = ({ labelText, placeholderText }) => {
    const query = useQueryParameter("search");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "search",
            inputValue: target.value.trim() ? target.value : ""
        });
    };

    return (
        <SearchForm role="search">
            <VisuallyHidden as="label" htmlFor="search">
                {labelText}
            </VisuallyHidden>
            <SearchFormInput
                id="search"
                type="search"
                placeholder={placeholderText}
                minLength="3"
                value={query || ""}
                onChange={onInputChange}
            />
            <VisuallyHidden as="button" type="submit" tabIndex="-1" aria-hidden="true">Search</VisuallyHidden>
        </SearchForm>
    )
};

export default Search;
