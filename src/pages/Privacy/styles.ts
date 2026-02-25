import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #18216d;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  transition: color 0.2s;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;

export const PageTitle = styled("h1")`
  font-size: 2.5rem;
  color: #18216d;
  margin-bottom: 0.5rem;
  font-family: "Motiva Sans Bold", sans-serif;

  @media only screen and (max-width: 414px) {
    font-size: 1.8rem;
  }
`;

export const LastUpdated = styled("p")`
  font-size: 0.9rem;
  color: #6b6b8d;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0ee;
`;

export const Section = styled("section")`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled("h2")`
  font-size: 1.4rem;
  color: #18216d;
  margin-bottom: 0.75rem;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const Paragraph = styled("p")`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2a2a4a;
  margin-bottom: 1rem;
`;

export const List = styled("ul")`
  margin: 0.5rem 0 1rem 1.5rem;
  color: #2a2a4a;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.7;
    font-size: 1.05rem;
  }
`;
