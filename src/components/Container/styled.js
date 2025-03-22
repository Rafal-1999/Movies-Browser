import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${({ $maxWidthValue }) => $maxWidthValue};
    margin: 0 auto;
    padding: ${({ $paddingValue }) => $paddingValue};
`;
