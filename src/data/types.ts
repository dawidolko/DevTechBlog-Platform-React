export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  tags: string[];
  author: Author;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
}

export type Category =
  | "React"
  | "TypeScript"
  | "Node.js"
  | "DevOps"
  | "System Design"
  | "AI & ML"
  | "Web Performance"
  | "Career";

export interface CategoryInfo {
  name: Category;
  description: string;
  color: string;
  icon: string;
}
