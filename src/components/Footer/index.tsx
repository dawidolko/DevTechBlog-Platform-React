import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { useHistory } from "react-router-dom";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const history = useHistory();

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      history.push("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>Contact</Language>
              <Para>
                Have a topic idea or want to contribute? We'd love to hear from you.
              </Para>
              <a href="mailto:hello@devpulse.dev">
                <Chat>Let's Chat</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Legal</Title>
              <Large to="/privacy">Privacy Policy</Large>
              <Large to="/guidelines">Editorial Guidelines</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/" onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToContact(); }}>
                Newsletter
              </Large>
              <Large to="/" onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToContact(); }}>
                Write for Us
              </Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>Based in</Language>
              <Para>San Francisco, CA</Para>
              <Para>United States</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Explore</Title>
              <Large to="/">Home</Large>
              <Large to="/privacy">Privacy</Large>
              <Large to="/guidelines">Guidelines</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Para style={{ fontSize: "13px", marginTop: "1rem" }}>
                &copy; {new Date().getFullYear()} DevPulse. All rights reserved.
              </Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="140px"
                  height="50px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com"
                src="twitter.svg"
              />
              <SocialLink
                href="https://linkedin.com"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com"
                src="medium.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
