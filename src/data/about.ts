export interface AboutProfile {
  avatar: string;
  name: string;
  username: string;
  tagline: string;
  contact: string;
  stats: { label: string; value: string }[];
}

export interface ReadmeSection {
  title: string;
  lines: (string | { gap?: boolean; check?: string; code?: string })[];
}

export const aboutProfile: AboutProfile = {
  avatar: "RG",
  name: "Rafael Gonçalves",
  username: "rafaelpereiragoncalves",
  tagline:
    "Backend developer building software with simplicity, architecture, and attention to detail.",
  contact: "https://github.com/rafaelpereiragoncalves",
  stats: [
    { label: "repos", value: "11" },
    { label: "years coding", value: "5+" },
    { label: "daily driver", value: "Kotlin" },
  ],
};

export const readmeSections: ReadmeSection[] = [
  {
    title: "about",
    lines: [
      "Backend engineer focused on clean architecture and readable code.",
      "I care about simple systems that are easy to maintain and hard to break.",
      "Currently shipping APIs and solving real problems with boring, proven tools.",
    ],
  },
  {
    title: "what i build",
    lines: [
      { check: "REST APIs — Kotlin / Spring Boot, C# / .NET, Node + TypeScript" },
      { check: "Integrations — Firebase auth, notifications, real-time ranking" },
      { check: "Data modeling — normalized schemas, indexed queries, seed pipelines" },
      { check: "Frontend — React, Vite and SCSS, always careful with the details" },
    ],
  },
  {
    title: "stack",
    lines: [
      {
        code: "kotlin   → Spring Boot · Spring Data JPA",
      },
      {
        code: "typescript → Node.js · Fastify · Prisma · React",
      },
      {
        code: "c#       → .NET · Entity Framework",
      },
      { code: "firebase → auth · google sign-in" },
      { code: "database → PostgreSQL · SQLite" },
    ],
  },
  {
    title: "beyond code",
    lines: [
      "Clean architecture over clever solutions.",
      "Documentation and good commit messages count as code.",
      "Coffee, CLI tools and finishing the thing I started.",
    ],
  },
];