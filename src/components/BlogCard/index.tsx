import { Link } from "react-router-dom";
import { BlogPost } from "../../data/types";
import { categories } from "../../data/categories";
import {
  Card,
  CardImage,
  CardImageWrapper,
  CardBody,
  CategoryBadge,
  CardTitle,
  CardExcerpt,
  CardMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  ReadTime,
  DateText,
  FeaturedBadge,
} from "./styles";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const categoryInfo = categories.find((c) => c.name === post.category);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardImageWrapper>
          <CardImage>
            <img src={`/img/svg/${post.image}`} alt={post.title} />
          </CardImage>
          {post.featured && <FeaturedBadge>Featured</FeaturedBadge>}
        </CardImageWrapper>
        <CardBody>
          <CategoryBadge bgColor={categoryInfo?.color}>
            {categoryInfo?.icon} {post.category}
          </CategoryBadge>
          <CardTitle>{post.title}</CardTitle>
          <CardExcerpt>{post.excerpt}</CardExcerpt>
          <CardMeta>
            <AuthorInfo>
              <AuthorAvatar>{post.author.avatar}</AuthorAvatar>
              <div>
                <AuthorName>{post.author.name}</AuthorName>
                <DateText>{formatDate(post.date)}</DateText>
              </div>
            </AuthorInfo>
            <ReadTime>{post.readTime}</ReadTime>
          </CardMeta>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
