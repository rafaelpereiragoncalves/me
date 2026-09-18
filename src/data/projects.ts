export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  result: string;
  href: string;
  lang: string;
  image?: string;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Kotlin: "#a97bff",
  "C#": "#512bd4",
  SCSS: "#cd6799",
  Firebase: "#ffca28",
  Other: "#71717a",
};

export function getLangColor(lang: string): string {
  return langColors[lang] ?? langColors.Other;
}

export const projects: Project[] = [
  {
    id: "beautysalon-api",
    name: "beautysalon-api",
    description:
      "REST API for a beauty salon. Clients, services and appointments backed by a clean, layered architecture.",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL", "Spring Data JPA"],
    result: "Normalized schema and indexed lookups keep appointment queries fast.",
    href: "https://github.com/rafaelpereiragoncalves/beautysalon-api",
    lang: "Kotlin",
  },
  {
    id: "bolaocopaonline",
    name: "bolaocopaonline",
    description:
      "Online betting pool for tournaments: create pools, submit guesses and follow live rankings.",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL"],
    result: "Real-time ranking updates pushed to every participant.",
    href: "https://github.com/rafaelpereiragoncalves/bolaocopaonline",
    lang: "Kotlin",
  },
  {
    id: "notifications-service",
    name: "notifications-service",
    description:
      "Notification service: schedule, deliver and keep a history of every notification sent.",
    tech: ["Node.js", "TypeScript", "PostgreSQL"],
    result: "Centralized delivery pipeline with retry and a complete delivery log.",
    href: "https://github.com/rafaelpereiragoncalves/notifications-service",
    lang: "TypeScript",
  },
  {
    id: "nlw.api",
    name: "nlw.api",
    description:
      "API built during Next Level Week: HTTP routes, persistence and organized backend structure.",
    tech: ["Node.js", "TypeScript", "Fastify", "Prisma"],
    result: "REST API with clearly separated data and business layers.",
    href: "https://github.com/rafaelpereiragoncalves/nlw.api",
    lang: "TypeScript",
  },
  {
    id: "nlw.mobile",
    name: "nlw.mobile",
    description:
      "Mobile companion app from Next Level Week, built with React Native.",
    tech: ["React Native", "TypeScript", "Expo"],
    result: "Cross-platform interface sharing the same flows as the API.",
    href: "https://github.com/rafaelpereiragoncalves/nlw.mobile",
    lang: "TypeScript",
  },
  {
    id: "NLW-api",
    name: "NLW-api",
    description:
      "Backend of a Next Level Week event: routes, business rules and persistence.",
    tech: ["Node.js", "TypeScript", "SQLite"],
    result: "Working API with documented event flows.",
    href: "https://github.com/rafaelpereiragoncalves/NLW-api",
    lang: "TypeScript",
  },
  {
    id: "NLW-web",
    name: "NLW-web",
    description:
      "Frontend of a Next Level Week event, consuming the API with a simple flow.",
    tech: ["React", "TypeScript", "Vite"],
    result: "Fast interface with consistent data handling.",
    href: "https://github.com/rafaelpereiragoncalves/NLW-web",
    lang: "TypeScript",
  },
  {
    id: "ignite-lab-ds",
    name: "ignite-lab-ds",
    description:
      "Design system created during Ignite Lab: reusable tokens and UI primitives.",
    tech: ["React", "TypeScript", "Storybook"],
    result: "Consistent components with a single source of truth.",
    href: "https://github.com/rafaelpereiragoncalves/ignite-lab-ds",
    lang: "TypeScript",
  },
  {
    id: "BeautySalon.Api",
    name: "BeautySalon.Api",
    description:
      "Beauty salon backend in .NET: routes, domain logic and data access separated by layer.",
    tech: ["C#", ".NET", "Entity Framework"],
    result: "Clean separation across controllers, services and data access.",
    href: "https://github.com/rafaelpereiragoncalves/BeautySalon.Api",
    lang: "C#",
  },
  {
    id: "beautysalon-app",
    name: "beautysalon-app",
    description:
      "Frontend for the salon solution, focused on readability and consistent styling.",
    tech: ["JavaScript", "SCSS"],
    result: "Responsive interface with a uniform visual language.",
    href: "https://github.com/rafaelpereiragoncalves/beautysalon-app",
    lang: "SCSS",
  },
  {
    id: "google-auth",
    name: "google-auth",
    description:
      "Authentication flow using Firebase to sign in with a Google account.",
    tech: ["React", "Firebase"],
    result: "Secure sign-in integrated without custom auth infrastructure.",
    href: "https://github.com/rafaelpereiragoncalves/google-auth",
    lang: "Firebase",
  },
];