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

const Guidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PageContainer>
        <BackLink to="/">&#8592; Back to home</BackLink>
        <PageTitle>Editorial Guidelines</PageTitle>
        <LastUpdated>Last updated: February 2025</LastUpdated>

        <Section>
          <SectionTitle>Our Standards</SectionTitle>
          <Paragraph>
            Every article published on DevPulse meets the following criteria:
          </Paragraph>
          <List>
            <li>
              <strong>Accuracy:</strong> All code examples are tested and
              verified. Technical claims are backed by documentation or
              reproducible results.
            </li>
            <li>
              <strong>Practicality:</strong> We focus on real-world patterns, not
              theoretical exercises. Every article should leave readers with
              actionable takeaways.
            </li>
            <li>
              <strong>Clarity:</strong> Complex topics are broken down into
              digestible sections. We avoid unnecessary jargon and explain
              concepts from first principles.
            </li>
            <li>
              <strong>Originality:</strong> Content is original and adds genuine
              value. We don't rehash documentation — we explain the "why" behind
              the "how."
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Writing for DevPulse</SectionTitle>
          <Paragraph>
            We welcome contributions from experienced developers. Here's what
            we look for:
          </Paragraph>
          <List>
            <li>In-depth technical articles (1,500–4,000 words)</li>
            <li>Working code examples with clear explanations</li>
            <li>
              Topics covering React, TypeScript, Node.js, DevOps, system design,
              AI/ML, or web performance
            </li>
            <li>
              Unique perspectives — share what you learned building real systems
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Review Process</SectionTitle>
          <Paragraph>
            All submissions go through a two-stage review:
          </Paragraph>
          <List>
            <li>
              <strong>Technical review:</strong> Code accuracy, best practices,
              and correctness verified by a subject matter expert.
            </li>
            <li>
              <strong>Editorial review:</strong> Clarity, structure, and
              readability checked by our editorial team.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Get Started</SectionTitle>
          <Paragraph>
            Interested in contributing? Reach out at{" "}
            <a href="mailto:hello@devpulse.dev">hello@devpulse.dev</a> with a
            brief pitch describing your article idea and your background.
          </Paragraph>
        </Section>
      </PageContainer>
    </Container>
  );
};

export default Guidelines;
