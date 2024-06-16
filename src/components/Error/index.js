import { Container, ErrorImage, MainHeader, InfoHeader, ErrorLink } from "./styled";

const Error = () => (
    <Container>
        <ErrorImage />
        <MainHeader>Opps! Something went wrong...</MainHeader>
        <InfoHeader>Please check your network connection <br /> and try again</InfoHeader>
        <ErrorLink>Back to home page</ErrorLink>
    </Container>
);

export default Error;