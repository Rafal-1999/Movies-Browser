import {
    SearchForm,
    SearchIcon,
    FormInput
} from "./styled";
import { VisuallyHidden } from "../../styles/global";

const Search = ({ labelText, placeholderText }) => {
    return (
        <SearchForm>
            <VisuallyHidden as="label" htmlFor="search">
                {labelText}
            </VisuallyHidden>
            <SearchIcon className="icon-search" />
            <FormInput
                id="search"
                type="search"
                placeholder={placeholderText}
                value={""}
                onChange={() => "Funkcja"}
            />
            <VisuallyHidden as="button" type="submit">Wyszukaj</VisuallyHidden>
        </SearchForm>
    )
};

export default Search;
