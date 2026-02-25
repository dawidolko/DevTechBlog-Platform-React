import { BlogPost } from "./types";
import { authors } from "./authors";

export const blogPosts: BlogPost[] = [
  {
    id: "react-server-components-2025",
    title: "React Server Components: A Practical Guide for 2025",
    excerpt:
      "Server Components have changed how we think about React architecture. Learn when to use them, common pitfalls, and real-world patterns that actually work in production.",
    content: `React Server Components (RSC) represent a fundamental shift in how we build React applications. Unlike traditional client-side rendering, RSCs execute on the server and send serialized output to the client — no JavaScript bundle required for those components.

**When to use Server Components:**
- Data fetching close to the source
- Accessing backend resources directly
- Keeping large dependencies server-side
- Reducing client-side JavaScript

**When to stick with Client Components:**
- Interactive UI with state and effects
- Browser-only APIs (localStorage, geolocation)
- Event handlers and user interactions

The key insight is that Server Components aren't a replacement for Client Components — they're complementary. Think of your component tree as a mix of both, with 'use client' boundaries marking the transition points.`,
    category: "React",
    tags: ["React", "Server Components", "Next.js", "Architecture"],
    author: authors.alexChen,
    date: "2025-02-20",
    readTime: "8 min read",
    featured: true,
    image: "developer.svg",
  },
  {
    id: "typescript-5-decorators",
    title: "TypeScript 5.x Decorators: Beyond the Basics",
    excerpt:
      "The new TC39 standard decorators in TypeScript 5 are production-ready. Explore advanced patterns for validation, logging, and dependency injection.",
    content: `TypeScript 5 shipped with the new TC39 standard decorators, replacing the experimental decorator implementation. This is a big deal — decorators are now stable and interoperable across frameworks.

The new decorators work with classes, methods, accessors, and fields. They receive a context object that provides metadata about the decorated element.

Key differences from legacy decorators:
- No more experimentalDecorators flag needed
- Standard TC39 proposal (Stage 3)
- Better type safety out of the box
- Works with accessor keyword for reactive properties`,
    category: "TypeScript",
    tags: ["TypeScript", "Decorators", "Design Patterns"],
    author: authors.alexChen,
    date: "2025-02-15",
    readTime: "6 min read",
    featured: false,
    image: "code.svg",
  },
  {
    id: "building-ai-powered-cli",
    title: "Building an AI-Powered CLI Tool with Node.js and Claude",
    excerpt:
      "Step-by-step guide to creating a developer CLI that uses Claude's API for code review, refactoring suggestions, and documentation generation.",
    content: `The rise of AI-powered developer tools has opened up incredible possibilities. In this guide, we'll build a CLI tool that leverages Claude's API to help with everyday development tasks.

Our CLI will support three commands:
- review: Analyze code for bugs, security issues, and improvements
- refactor: Get AI-powered refactoring suggestions
- docs: Generate documentation from source code

We'll use Commander.js for CLI parsing, the Anthropic SDK for API calls, and chalk for beautiful terminal output.`,
    category: "AI & ML",
    tags: ["AI", "Claude", "Node.js", "CLI", "Developer Tools"],
    author: authors.emmaWilson,
    date: "2025-02-12",
    readTime: "12 min read",
    featured: true,
    image: "ai-brain.svg",
  },
  {
    id: "docker-multi-stage-builds",
    title: "Docker Multi-Stage Builds: Shrink Your Images by 90%",
    excerpt:
      "Production Docker images don't need to be gigabytes. Learn multi-stage build patterns that create lean, secure containers for Node.js and React apps.",
    content: `Most Docker images for Node.js applications are unnecessarily large. A typical node:18 based image can be 1GB+, but your production image can be under 100MB with multi-stage builds.

The key principle: separate your build environment from your runtime environment. Your build stage needs dev dependencies, compilers, and build tools. Your runtime stage only needs the compiled output and production dependencies.

Pattern 1: Builder + Runner
Pattern 2: Builder + Distroless
Pattern 3: Builder + Alpine with security scanning`,
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containers", "Node.js", "Performance"],
    author: authors.marcusJohnson,
    date: "2025-02-08",
    readTime: "7 min read",
    featured: false,
    image: "product-launch.svg",
  },
  {
    id: "event-driven-architecture-node",
    title: "Event-Driven Architecture in Node.js: Patterns That Scale",
    excerpt:
      "Move beyond REST. Explore event-driven patterns with message queues, event sourcing, and CQRS that handle millions of events in Node.js services.",
    content: `As your Node.js services grow, synchronous request-response patterns start to show their limits. Event-driven architecture (EDA) offers a path to loosely coupled, highly scalable systems.

Core concepts:
- Event Producers: Services that emit events when something happens
- Event Consumers: Services that react to events
- Event Broker: The middleware that routes events (Redis Streams, RabbitMQ, Kafka)

We'll explore three patterns:
1. Simple Pub/Sub with Redis Streams
2. Event Sourcing for audit trails
3. CQRS for read/write optimization`,
    category: "System Design",
    tags: ["System Design", "Node.js", "Architecture", "Microservices"],
    author: authors.sarahKim,
    date: "2025-02-05",
    readTime: "10 min read",
    featured: true,
    image: "graphs.svg",
  },
  {
    id: "core-web-vitals-react",
    title: "Core Web Vitals in React: From Red to Green in a Weekend",
    excerpt:
      "Your Lighthouse score doesn't have to be embarrassing. Practical techniques to improve LCP, INP, and CLS in React applications without a full rewrite.",
    content: `Google's Core Web Vitals directly impact your search ranking and user experience. The three metrics that matter most:

- LCP (Largest Contentful Paint): How fast your main content loads
- INP (Interaction to Next Paint): How responsive your app feels
- CLS (Cumulative Layout Shift): How stable your layout is

Quick wins for React apps:
1. Lazy load below-the-fold components with React.lazy()
2. Use priority hints for critical images
3. Avoid layout shifts with explicit dimensions
4. Debounce expensive re-renders with useDeferredValue
5. Preload critical fonts and data`,
    category: "Web Performance",
    tags: ["Performance", "React", "Core Web Vitals", "SEO"],
    author: authors.alexChen,
    date: "2025-01-30",
    readTime: "9 min read",
    featured: false,
    image: "graphs.svg",
  },
  {
    id: "kubernetes-dev-workflow",
    title: "Kubernetes for Developers: A No-Nonsense Local Setup",
    excerpt:
      "You don't need to be a DevOps expert to use Kubernetes. Set up a productive local K8s environment with hot reload, debugging, and fast iteration.",
    content: `Kubernetes can feel overwhelming for developers who just want to ship features. But a good local setup makes K8s feel almost as simple as docker-compose.

Tools we'll use:
- k3d: Lightweight K8s clusters in Docker
- Tilt: Hot reload for Kubernetes
- kubectl: The essential CLI
- Lens: Visual dashboard for your cluster

The goal: change code, save, and see it running in your local cluster within seconds — just like local development, but in a production-like environment.`,
    category: "DevOps",
    tags: ["Kubernetes", "DevOps", "Docker", "Developer Experience"],
    author: authors.marcusJohnson,
    date: "2025-01-25",
    readTime: "11 min read",
    featured: false,
    image: "product-launch.svg",
  },
  {
    id: "senior-engineer-communication",
    title: "The #1 Skill That Separates Senior Engineers (It's Not Code)",
    excerpt:
      "Technical skills get you hired, but communication skills get you promoted. Learn frameworks for writing better RFCs, giving feedback, and influencing decisions.",
    content: `After 10 years in the industry, the pattern is clear: the engineers who advance fastest aren't necessarily the best coders — they're the best communicators.

Three communication frameworks that changed my career:

1. The STAR Method for Technical Decisions
   - Situation: What's the current state?
   - Task: What needs to change?
   - Action: What do you propose?
   - Result: What's the expected outcome?

2. The 30/60/90 RFC Structure
   - 30%: Share the problem and rough direction early
   - 60%: Get feedback on the detailed approach
   - 90%: Final review before implementation

3. Feedback That Lands
   - Observation: What you saw (no judgment)
   - Impact: Why it matters
   - Request: What you'd like to see instead`,
    category: "Career",
    tags: ["Career", "Communication", "Leadership", "Soft Skills"],
    author: authors.sarahKim,
    date: "2025-01-20",
    readTime: "6 min read",
    featured: false,
    image: "waving.svg",
  },
  {
    id: "rag-patterns-production",
    title: "RAG Patterns for Production: Beyond the Tutorial",
    excerpt:
      "Most RAG tutorials stop at 'it works locally.' Learn production patterns for chunking, retrieval, re-ranking, and evaluation that actually work at scale.",
    content: `Retrieval-Augmented Generation (RAG) is the most practical way to give LLMs access to your private data. But the gap between a demo and a production system is enormous.

Production RAG requires solving:
1. Intelligent chunking (not just splitting by tokens)
2. Hybrid search (semantic + keyword)
3. Re-ranking retrieved documents
4. Evaluation and monitoring
5. Handling stale or conflicting information

We'll build a production-grade RAG pipeline using LangChain, a vector database, and Claude as the generation model.`,
    category: "AI & ML",
    tags: ["AI", "RAG", "LLMs", "Python", "Production"],
    author: authors.emmaWilson,
    date: "2025-01-15",
    readTime: "14 min read",
    featured: false,
    image: "ai-brain.svg",
  },
];

export const getFeaturedPosts = (): BlogPost[] =>
  blogPosts.filter((post) => post.featured);

export const getPostsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter((post) => post.category === category);

export const getLatestPosts = (count: number = 6): BlogPost[] =>
  [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const getPostById = (id: string): BlogPost | undefined =>
  blogPosts.find((post) => post.id === id);
