# Architecture

> Technical foundation of Engineered Simplicity

Version: 1.0.0


# 1. Overview

This project is a personal portfolio built as a modern web application.

The technical goal is to demonstrate:

- code organization
- architectural quality
- performance
- scalability
- best development practices


# 2. Technology Stack

## Core

Framework: React

Build Tool: Vite

Language: TypeScript

Styling: Tailwind CSS

Animation: Framer Motion (Motion)

Icons: Lucide React

Routing: React Router

Deployment: Vercel / Cloudflare Pages


# 3. Architecture Principles

### Component Driven

The application should be built using small, reusable components.


### Feature Oriented

Each domain has its own organization.


### Separation of Concerns

UI, data, and rules must remain separate.


### Explicit Over Magic

Prefer clear code over complex abstractions.


# 4. Folder Structure

src/

├── app/

│   ├── routes

│   ├── providers

│   └── config


├── components/

│   ├── ui

│   ├── layout

│   └── shared


├── features/

│   ├── home

│   ├── projects

│   ├── about

│   ├── experience

│   ├── skills

│   └── contact


├── design-system/

│   ├── tokens

│   ├── components

│   └── themes


├── hooks/


├── lib/


├── assets/


├── styles/


└── types/


# 5. Application Structure

The application will be divided into pages:



Home

Main presentation.



About

History and principles.



Projects

Technical projects and experiences.



Experience

Professional trajectory.



Skills

Technical knowledge.



Contact

Contact channels.



# 6. State Management

Principle:

Do not use global state without necessity.


Preference:

1. React local state

2. Context API

3. Zustand only when necessary


# 7. Styling Strategy

All styling should use:

Design Tokens

Tailwind utilities

Component variants


Avoid:

Spread-out CSS

Magic values

Duplicate styles


# 8. Performance Goals

Objectives:

Lighthouse:

90+



Performance:

Initial loading fast



Priorities:

- lazy loading
- image optimization
- lightweight components
- reduced bundle


# 9. Accessibility

Requirements:

WCAG AA


Implement:

- semantic HTML
- keyboard navigation
- focus states
- aria labels


# 10. Deployment

Pipeline:

Development

↓

Build

↓

Preview

↓

Production


# 11. Code Quality

Mandatory:

ESLint

Prettier

TypeScript strict mode

Code must be:

readable

simple

consistent