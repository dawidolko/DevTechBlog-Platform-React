import { Author } from "./types";

export const authors: Record<string, Author> = {
  alexChen: {
    name: "Alex Chen",
    avatar: "👨‍💻",
    role: "Senior Frontend Engineer",
    bio: "Building performant web apps with React & TypeScript. Open source contributor.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  sarahKim: {
    name: "Sarah Kim",
    avatar: "👩‍💻",
    role: "Full Stack Developer",
    bio: "Passionate about Node.js, cloud architecture, and developer experience.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  marcusJohnson: {
    name: "Marcus Johnson",
    avatar: "🧑‍💻",
    role: "DevOps Engineer",
    bio: "Infrastructure as code enthusiast. Kubernetes and CI/CD pipelines specialist.",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  emmaWilson: {
    name: "Emma Wilson",
    avatar: "👩‍🔬",
    role: "ML Engineer & Tech Writer",
    bio: "Exploring the intersection of AI and web development. Conference speaker.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
};
