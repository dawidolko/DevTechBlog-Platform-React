import styled from "styled-components";

export const Card = styled("div")`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled("div")`
  background: linear-gradient(135deg, #18216d 0%, #2e186a 100%);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;

  img {
    width: 120px;
    height: 120px;
    opacity: 0.9;
  }
`;

export const CardBody = styled("div")`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CategoryBadge = styled("span")<{ bgColor?: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  background: ${({ bgColor }) => bgColor || "#2e186a"};
  width: fit-content;
  margin-bottom: 0.75rem;
  font-family: "Motiva Sans Bold", sans-serif;
  letter-spacing: 0.3px;
`;

export const CardTitle = styled("h3")`
  font-size: 1.2rem;
  line-height: 1.4;
  color: #18216d;
  margin: 0 0 0.75rem 0;
  font-family: "Motiva Sans Bold", sans-serif;

  @media only screen and (max-width: 414px) {
    font-size: 1.1rem;
  }
`;

export const CardExcerpt = styled("p")`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4a4a6a;
  margin: 0 0 1rem 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardMeta = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f5;
  margin-top: auto;
`;

export const AuthorInfo = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AuthorAvatar = styled("span")`
  font-size: 1.5rem;
`;

export const AuthorName = styled("span")`
  font-size: 0.8rem;
  color: #18216d;
  font-family: "Motiva Sans Bold", sans-serif;
`;

export const ReadTime = styled("span")`
  font-size: 0.8rem;
  color: #8888a0;
`;

export const DateText = styled("span")`
  font-size: 0.75rem;
  color: #8888a0;
  display: block;
`;

export const FeaturedBadge = styled("div")`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgb(255, 130, 92);
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardImageWrapper = styled("div")`
  position: relative;
`;
