import {
    StyledForm,
    InputBox,
    HiddenFormLabel,
    FormInput
} from "./styled";

const Search = ({
    idName,
    typeValue,
    placeholderText,
    valueContent,
    onChangeContent
}) => (
    <StyledForm>
        <InputBox>
            <HiddenFormLabel htmlFor={idName}>
                Search for movies
            </HiddenFormLabel>
            <FormInput
                id={idName}
                type={typeValue}
                placeholder={placeholderText}
                value={valueContent}
                onChange={onChangeContent}
            />
        </InputBox>
    </StyledForm>
);

export default Search;
