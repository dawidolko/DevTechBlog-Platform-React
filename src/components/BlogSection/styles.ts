import styled from "styled-components";

export const BlogSectionWrapper = styled("section")`
  padding: 4rem 0;
  position: relative;
`;

export const SectionHeader = styled("div")`
  text-align: center;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled("h2")`
  font-size: 2.5rem;
  color: #18216d;
  margin-bottom: 0.5rem;
  font-family: "Motiva Sans Bold", sans-serif;

  @media only screen and (max-width: 414px) {
    font-size: 1.8rem;
  }
`;

export const SectionSubtitle = styled("p")`
  font-size: 1.1rem;
  color: #6b6b8d;
  max-width: 600px;
  margin: 0 auto;
`;

export const PostsGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoriesRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

export const CategoryChip = styled("button")<{ active?: boolean; chipColor?: string }>`
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  border: 2px solid ${({ chipColor, active }) => (active ? chipColor || "#2e186a" : "#e0e0ee")};
  background: ${({ active, chipColor }) =>
    active ? chipColor || "#2e186a" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#18216d")};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Motiva Sans Light", sans-serif;

  &:hover {
    border-color: ${({ chipColor }) => chipColor || "#2e186a"};
    background: ${({ chipColor }) => chipColor || "#2e186a"};
    color: #fff;
  }
`;
