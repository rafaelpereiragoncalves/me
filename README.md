# Engineered Simplicity

> Personal portfolio — [rafaelpereiragoncalves](https://github.com/rafaelpereiragoncalves)

This portfolio is not just a collection of projects.
It is a practical demonstration of how software should be built.

Every visual, structural, and technical decision was made to communicate organization, clarity, and attention to detail. The interface disappears and the content takes the stage.

Full philosophy: [docs/design-manifesto.md](docs/design-manifesto.md)

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Motion + GSAP (motion with purpose only)
- React Router 7 (lazy-loaded routes)
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Type-check (`tsc -b`) and build for prod |
| `npm run lint`    | Run ESLint                               |
| `npm run preview` | Preview the production build             |

## Project structure

```text
src/
├── app/            # router, providers, AppShell
├── pages/          # Overview (/), Projects (/projects), About (/about)
├── components/
│   ├── ui/         # Typography, Section, InfoList
│   ├── layout/     # AppShell, FloatingMenu, PageContainer, PageGrid, PageTransition
│   ├── overview/   # Hero, Focus, Stack, FeaturedProjects
│   ├── projects/   # ProjectList, ProjectListItem, ProjectPreview, ProjectMockup
│   └── about/      # AboutHeader, AboutLayout, CodeEditor, LanguageBar, Readme
├── data/           # projects, about, editor content
├── design-system/  # tokens and shared primitives
├── styles/         # globals, theme, tokens
├── hooks/          # e.g. useScrollNavigation
└── lib/            # utils
docs/               # product spec, design system, components, architecture, roadmap
```

## Pages

- `/` — Overview: hero, focus, stack, featured projects
- `/projects` — full project list
- `/about` — story and principles

Every page is exactly `100vw × 100vh`. There is no scroll. When content grows, we create another page — we never grow the page.

## Design principles

- Every element has a purpose
- Content first
- Less is better
- Fast is beautiful
- Consistency creates trust

See the [design manifesto](docs/design-manifesto.md) and [design principles](docs/design-principles.md).

## Documentation

- [docs/product-spec.md](docs/product-spec.md) — product specification
- [docs/design-system.md](docs/design-system.md) — tokens, typography, components
- [docs/components.md](docs/components.md) — component catalog
- [docs/architecture.md](docs/architecture.md) — technical architecture
- [docs/content.md](docs/content.md) — site copy
- [docs/roadmap.md](docs/roadmap.md) — roadmap
