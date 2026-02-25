import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Container from "../../common/Container";
import BlogCard from "../../components/BlogCard";
import { getPostById, blogPosts } from "../../data/posts";
import { categories } from "../../data/categories";
import {
  PostContainer,
  BackLink,
  PostHeader,
  CategoryBadge,
  PostTitle,
  PostMeta,
  AuthorSection,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  AuthorRole,
  MetaInfo,
  MetaDot,
  HeroImage,
  PostContent,
  TagsContainer,
  Tag,
  RelatedSection,
  RelatedTitle,
  RelatedGrid,
} from "./styles";

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const post = getPostById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    history.push("/");
    return null;
  }

  const categoryInfo = categories.find((c) => c.name === post.category);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, idx) => {
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={idx}>
            {items.map((item, i) => (
              <li key={i}>{renderInline(item.slice(2))}</li>
            ))}
          </ul>
        );
      }

      if (/^\d+\.\s/.test(paragraph)) {
        const items = paragraph
          .split("\n")
          .filter((l) => /^\d+\.\s/.test(l));
        return (
          <ol key={idx}>
            {items.map((item, i) => (
              <li key={i}>{renderInline(item.replace(/^\d+\.\s/, ""))}</li>
            ))}
          </ol>
        );
      }

      return <p key={idx}>{renderInline(paragraph)}</p>;
    });
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <Container>
      <PostContainer>
        <BackLink to="/">&#8592; Back to all articles</BackLink>

        <PostHeader>
          <CategoryBadge bgColor={categoryInfo?.color}>
            {categoryInfo?.icon} {post.category}
          </CategoryBadge>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <AuthorSection>
              <AuthorAvatar>{post.author.avatar}</AuthorAvatar>
              <AuthorDetails>
                <AuthorName>{post.author.name}</AuthorName>
                <AuthorRole>{post.author.role}</AuthorRole>
              </AuthorDetails>
            </AuthorSection>
            <MetaInfo>
              <span>{formatDate(post.date)}</span>
              <MetaDot />
              <span>{post.readTime}</span>
            </MetaInfo>
          </PostMeta>
        </PostHeader>

        <HeroImage>
          <img src={`/img/svg/${post.image}`} alt={post.title} />
        </HeroImage>

        <PostContent>{renderContent(post.content)}</PostContent>

        <TagsContainer>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>

        {relatedPosts.length > 0 && (
          <RelatedSection>
            <RelatedTitle>Related Articles</RelatedTitle>
            <RelatedGrid>
              {relatedPosts.map((relPost) => (
                <div
                  key={relPost.id}
                  onClick={() => history.push(`/post/${relPost.id}`)}
                >
                  <BlogCard post={relPost} />
                </div>
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </PostContainer>
    </Container>
  );
};

export default Post;
