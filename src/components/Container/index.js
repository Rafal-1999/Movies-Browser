import { StyledContainer } from "./styled";

const Container = ({
    maxWidth,
    padding,
    children
}) => (
    <StyledContainer
        $maxWidthValue={maxWidth}
        $paddingValue={padding}
    >
        {children}
    </StyledContainer>
);

export default Container;
