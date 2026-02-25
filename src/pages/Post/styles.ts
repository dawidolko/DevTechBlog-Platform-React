import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled("article")`
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

export const PostHeader = styled("header")`
  margin-bottom: 2.5rem;
`;

export const CategoryBadge = styled("span")<{ bgColor?: string }>`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: ${({ bgColor }) => bgColor || "#2e186a"};
  margin-bottom: 1rem;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const PostTitle = styled("h1")`
  font-size: 2.8rem;
  line-height: 1.2;
  color: #18216d;
  margin: 0 0 1.5rem 0;
  font-family: "Motiva Sans Bold", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 414px) {
    font-size: 1.6rem;
  }
`;

export const PostMeta = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0ee;
  flex-wrap: wrap;
`;

export const AuthorSection = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AuthorAvatar = styled("span")`
  font-size: 2.2rem;
`;

export const AuthorDetails = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled("span")`
  font-size: 0.95rem;
  font-weight: 700;
  color: #18216d;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const AuthorRole = styled("span")`
  font-size: 0.8rem;
  color: #6b6b8d;
`;

export const MetaInfo = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: #6b6b8d;
`;

export const MetaDot = styled("span")`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #c0c0d0;
`;

export const HeroImage = styled("div")`
  background: linear-gradient(135deg, #18216d 0%, #2e186a 50%, #18216d 100%);
  border-radius: 12px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  min-height: 250px;

  img {
    width: 200px;
    height: 200px;
    opacity: 0.85;
  }

  @media only screen and (max-width: 575px) {
    padding: 2rem;
    min-height: 180px;

    img {
      width: 140px;
      height: 140px;
    }
  }
`;

export const PostContent = styled("div")`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #2a2a4a;

  p {
    margin-bottom: 1.5rem;
    color: #2a2a4a;
    font-size: 1.15rem;
  }

  strong {
    color: #18216d;
    font-family: "Motiva Sans Bold", sans-serif;
  }

  ul,
  ol {
    margin: 1rem 0 1.5rem 1.5rem;
    color: #2a2a4a;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }

  code {
    background: #f0f1ff;
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.95rem;
    color: #2e186a;
  }

  pre {
    background: #1a1a2e;
    color: #e0e0ee;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: none;
      color: inherit;
      padding: 0;
    }
  }
`;

export const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0ee;
`;

export const Tag = styled("span")`
  padding: 0.35rem 0.85rem;
  background: #f0f1ff;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #18216d;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const RelatedSection = styled("section")`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 2px solid #f0f1ff;
`;

export const RelatedTitle = styled("h3")`
  font-size: 1.5rem;
  color: #18216d;
  margin-bottom: 1.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const RelatedGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;
