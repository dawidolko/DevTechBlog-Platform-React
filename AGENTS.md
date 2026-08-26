# AGENTS.md

Guide for agents working on DevPulse. Add a section per area as conventions
emerge — do not pad sections with content that is not established yet.

## What this project is

A developer tech blog built with React 18, TypeScript, Ant Design and styled
components, using HashRouter so it can be served from GitHub Pages. Posts,
authors and categories live in a typed data layer under `src/data/`.

Read [README.md](README.md) first — it documents the architecture and the
commands used day to day.

## Language

**UI copy and code comments are English.** Labels, buttons, validation messages,
page titles, empty states and error text are all English. User-supplied data is
rendered exactly as entered and never normalised.

## Comments

Comments explain **why**, not what. The code already says what it does.

- Use multi-line block comments for anything that needs explaining; avoid
  trailing one-line comments tacked onto the end of a statement.
- A comment that restates the code is deleted rather than reworded.
- Document the constraint, the trade-off or the failure mode that made the code
  look the way it does — that is the part a reader cannot recover from the code.

## Accessibility

Non-negotiable, and cheap if you keep to the existing components:

- Never remove the global `:focus-visible` outline.
- Decorative icons are `aria-hidden="true"`; a meaningful icon gets a
  visually-hidden text equivalent.
- One `<h1>` per page and no skipped heading levels.
- Every page has `<header>`, `<nav>`, `<main id="main-content">` and `<footer>`,
  with a skip link as the first focusable element.
- Every form control has an associated label; errors use `role="alert"`.
- Honour `prefers-reduced-motion`.

## Static export

The site is exported as static files and served from GitHub Pages. Anything
that needs a server at request time will not work. In particular, any value
passed in at build time is compiled into the public bundle — a build-time
"secret" is readable by anyone who opens the page.

## Data layer

Content is data, not markup. A new post is an entry in `src/data/posts.ts` — it
never means editing a component. Keep the presentation layer free of literal
post content so the two can change independently.

## Before finishing

- [ ] `npm run build` succeeds.
- [ ] New content went into `src/data/`, not into a component.
- [ ] No secrets committed.
- [ ] Copy is English.
