import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import BlogCard from "../BlogCard";
import { getLatestPosts } from "../../data/posts";
import { categories } from "../../data/categories";
import { Category } from "../../data/types";
import {
  BlogSectionWrapper,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  PostsGrid,
  CategoriesRow,
  CategoryChip,
} from "./styles";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const allPosts = getLatestPosts(9);

  const filteredPosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  return (
    <BlogSectionWrapper id="articles">
      <SectionHeader>
        <Fade direction="up" triggerOnce>
          <SectionTitle>Latest Posts</SectionTitle>
          <SectionSubtitle>
            Fresh insights and tutorials from our engineering team
          </SectionSubtitle>
        </Fade>
      </SectionHeader>

      <CategoriesRow>
        <CategoryChip
          active={activeCategory === "All"}
          onClick={() => setActiveCategory("All")}
        >
          All
        </CategoryChip>
        {categories
          .filter((cat) => allPosts.some((p) => p.category === cat.name))
          .map((cat) => (
            <CategoryChip
              key={cat.name}
              active={activeCategory === cat.name}
              chipColor={cat.color}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.icon} {cat.name}
            </CategoryChip>
          ))}
      </CategoriesRow>

      <PostsGrid>
        {filteredPosts.map((post, index) => (
          <Fade
            key={post.id}
            direction="up"
            triggerOnce
            delay={index * 80}
          >
            <div style={{ height: "100%" }}>
              <BlogCard post={post} />
            </div>
          </Fade>
        ))}
      </PostsGrid>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
