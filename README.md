# DevPulse — Developer Tech Blog

A modern developer tech blog built with React, TypeScript, Ant Design, and Styled Components. Features practical articles on React, TypeScript, Node.js, DevOps, AI, system design, and more.

## Features

- Responsive single-page application with smooth scroll navigation
- Blog post detail pages with full article content
- Blog post cards with category filtering (React, TypeScript, Node.js, DevOps, AI & ML, etc.)
- Data layer separated from presentation (posts, authors, categories in TypeScript files)
- Privacy Policy and Editorial Guidelines pages
- Scroll-triggered animations
- Contact form with client-side validation
- Mobile-friendly with hamburger menu
- PWA-ready with manifest and icons
- Automatic deployment to GitHub Pages

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Styled Components** — CSS-in-JS styling
- **Ant Design** — UI component library
- **React Router v5** — Client-side routing (HashRouter)
- **React Awesome Reveal** — Scroll animations
- **GitHub Actions** — CI/CD deployment

## Prerequisites

- **Node.js** >= 14.x
- **npm** >= 6.x (or **yarn** >= 1.22)

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/DevTechBlog-Platform-React.git
cd DevTechBlog-Platform-React
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

4. **Build for production**

```bash
npm run build
```

The optimized build will be output to the `build/` folder.

## Deployment (GitHub Pages)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

**To enable:**

1. Go to your repository **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

The workflow file is at `.github/workflows/deploy.yml`.

## Project Structure

```
src/
├── common/          # Reusable UI components (Button, Input, Container, etc.)
├── components/      # Feature components (Header, Footer, BlogCard, BlogSection, etc.)
├── content/         # JSON content for page sections
├── data/            # Data layer — blog posts, authors, categories (TypeScript)
├── locales/         # i18n translation files
├── pages/           # Page components (Home, Post, Privacy, Guidelines)
├── router/          # Route configuration
└── styles/          # Global styles
```

## Data Layer

All blog data is stored in `src/data/` and separated from the presentation layer:

- **`posts.ts`** — Blog post entries with title, excerpt, content, metadata
- **`authors.ts`** — Author profiles
- **`categories.ts`** — Category definitions with colors and icons
- **`types.ts`** — TypeScript interfaces for all data models

To add a new blog post, edit `src/data/posts.ts` and add an entry to the `blogPosts` array.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm test` | Run tests with Jest |

## License

MIT
