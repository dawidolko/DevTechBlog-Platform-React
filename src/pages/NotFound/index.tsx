import Container from "../../common/Container";
import { PageContainer, BackLink, PageTitle, Paragraph } from "../Privacy/styles";

const NotFound = () => (
  <Container>
    <PageContainer>
      <PageTitle>Page not found</PageTitle>
      <Paragraph>This address does not match any article or page on DevPulse.</Paragraph>
      <BackLink to="/">&#8592; Back to all articles</BackLink>
    </PageContainer>
  </Container>
);

export default NotFound;
