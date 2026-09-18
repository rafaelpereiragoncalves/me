# Architecture

> Technical foundation of Engineered Simplicity

Versão: 1.0.0


# 1. Overview

Este projeto é um portfólio pessoal construído como uma aplicação web moderna.

O objetivo técnico é demonstrar:

- organização de código
- qualidade arquitetural
- performance
- escalabilidade
- boas práticas de desenvolvimento


# 2. Technology Stack


## Core

Framework:

React


Build Tool:

Vite


Language:

TypeScript


Styling:

Tailwind CSS


Animation:

Framer Motion


Icons:

Lucide React


Routing:

React Router


Deployment:

Vercel / Cloudflare Pages



# 3. Architecture Principles


## Component Driven

A aplicação deve ser construída utilizando componentes pequenos e reutilizáveis.


## Feature Oriented

Cada domínio possui sua própria organização.


## Separation of Concerns

UI, dados e regras devem permanecer separados.


## Explicit Over Magic

Preferir código claro ao invés de abstrações complexas.



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


A aplicação será dividida em páginas:


Home

Apresentação principal.


About

História e princípios.


Projects

Projetos e experiências técnicas.


Experience

Trajetória profissional.


Skills

Conhecimentos técnicos.


Contact

Canais de contato.



# 6. State Management


Princípio:

Não utilizar estado global sem necessidade.


Preferência:

1. Estado local React

2. Context API

3. Zustand somente quando necessário



# 7. Styling Strategy


Toda estilização deve utilizar:

Design Tokens

Tailwind utilities

Component variants


Evitar:

CSS espalhado

Valores mágicos

Estilos duplicados



# 8. Performance Goals


Objetivos:

Lighthouse:

90+


Performance:

carregamento inicial rápido


Prioridades:

- lazy loading
- otimização de imagens
- componentes leves
- bundle reduzido



# 9. Accessibility


Requisitos:

WCAG AA


Implementar:

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


Obrigatório:

ESLint

Prettier

TypeScript strict mode


Código deve ser:

legível

simples

consistente

