import { useEffect } from "react";
import Container from "../../common/Container";
import {
  PageContainer,
  BackLink,
  PageTitle,
  LastUpdated,
  Section,
  SectionTitle,
  Paragraph,
  List,
} from "./styles";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PageContainer>
        <BackLink to="/">&#8592; Back to home</BackLink>
        <PageTitle>Privacy Policy</PageTitle>
        <LastUpdated>Last updated: February 2025</LastUpdated>

        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <Paragraph>
            DevPulse is committed to protecting your privacy. We collect minimal
            data necessary to provide our services:
          </Paragraph>
          <List>
            <li>
              <strong>Contact form submissions:</strong> Name, email, and
              message content when you reach out to us.
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymous usage statistics such as
              page views and referral sources to improve our content.
            </li>
            <li>
              <strong>Cookies:</strong> Essential cookies for site functionality
              and optional analytics cookies.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Data</SectionTitle>
          <Paragraph>
            We use collected information solely to:
          </Paragraph>
          <List>
            <li>Respond to your inquiries and contact form submissions</li>
            <li>Improve our content and user experience</li>
            <li>Send newsletter updates (only with your explicit consent)</li>
            <li>Analyze site traffic to understand what content resonates</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Data Sharing</SectionTitle>
          <Paragraph>
            We do not sell, trade, or share your personal information with third
            parties. Analytics data is processed through privacy-respecting
            tools and is never linked to individual identities.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Your Rights</SectionTitle>
          <Paragraph>You have the right to:</Paragraph>
          <List>
            <li>Request access to your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics tracking</li>
            <li>Unsubscribe from communications at any time</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <Paragraph>
            For privacy-related questions, please contact us at{" "}
            <a href="mailto:hello@devpulse.dev">hello@devpulse.dev</a>.
          </Paragraph>
        </Section>
      </PageContainer>
    </Container>
  );
};

export default Privacy;
