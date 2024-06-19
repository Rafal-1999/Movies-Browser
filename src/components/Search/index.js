import {
    StyledForm,
    InputBox,
    FormLabel,
    FormInput
} from "./styled";

const Search = ({
    idName,
    typeValue,
    placeholderText
}) => (
    <StyledForm>
        <InputBox>
            <FormLabel htmlFor={idName}>
                Search for movies
            </FormLabel>
            <FormInput
                id={idName}
                type={typeValue}
                placeholder={placeholderText}
                value={``}
                onChange={`Search`}
            />
        </InputBox>
    </StyledForm>
);

export default Search;
