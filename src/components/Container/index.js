import { StyledContainer } from "./styled";

const Container = ({
    maxWidth,
    padding,
    children
}) => (
    <StyledContainer
        $maxWidth={maxWidth}
        $padding={padding}
    >
        {children}
    </StyledContainer>
);

export default Container;
