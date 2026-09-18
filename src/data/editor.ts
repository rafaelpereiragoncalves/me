export type EditorLanguage = "markdown" | "typescript" | "tsx";

export interface EditorFile {
  id: string;
  name: string;
  language: EditorLanguage;
  content: string;
}

export interface PreviewSection {
  title: string;
  items: string[];
}

export const aboutProfile = {
  username: "rafaelpereiragoncalves",
  name: "Rafael Pereira Gonçalves Silva",
  role: "backend developer",
  location: "Brazil",
  tagline:
    "Building software with simplicity, architecture, and attention to detail.",
  github: "github.com/rafaelpereiragoncalves",
  linkedin: "linkedin.com/in/rafael-gonçalves",
  photo: "/profile.png",
};

export const stacks = {
  focus: ["Kotlin", "TypeScript", "C#"],
  tools: ["Spring Boot", "Fastify", ".NET", "Firebase"],
  storage: ["PostgreSQL", "SQLite"],
};

export const experiences = [
  { year: "2023 — now", role: "backend developer", stack: "Kotlin · Spring Boot" },
  { year: "2021 — 2022", role: "fullstack apps", stack: "TypeScript · React" },
  { year: "2020", role: "first lines", stack: "C# · .NET" },
];

const str = (s: string) => `"${s}"`;

export const editorFiles: EditorFile[] = [
  {
    id: "about",
    name: "about.md",
    language: "markdown",
    content: [
      `# ${aboutProfile.name}`,
      `### 💼 ${aboutProfile.role} · 📍 based in ${aboutProfile.location}`,
      "",
      `> ${aboutProfile.tagline}`,
      "",
      `🔗 github: ${aboutProfile.github}`,
      `💼 linkedin: ${aboutProfile.linkedin}`,
      "",
      "## 💡 values",
      "- 🧱 clean architecture over clever solutions",
      "- 📖 readable code before short code",
      "- ✅ ship things, then document things",
      "",
      "## ⚡ now",
      "- 🚀 REST APIs · Kotlin · .NET · TypeScript",
      "- 🔧 boring, proven, reliable tools",
    ].join("\n"),
  },
  {
    id: "stack",
    name: "stack.ts",
    language: "typescript",
    content: [
      "export interface Stack {",
      "  focus: string[];",
      "  tools: string[];",
      "  storage: string[];",
      "}",
      "",
      "export const stack: Stack = {",
      `  focus: [${stacks.focus.map(str).join(", ")}],`,
      `  tools: [${stacks.tools.map(str).join(", ")}],`,
      `  storage: [${stacks.storage.map(str).join(", ")}],`,
      "};",
    ].join("\n"),
  },
  {
    id: "experience",
    name: "experience.ts",
    language: "typescript",
    content: [
      "export interface Experience {",
      "  year: string;",
      "  role: string;",
      "  stack: string;",
      "}",
      "",
      "export const experience: Experience[] = [",
      ...experiences.map(
        (e) => `  { year: ${str(e.year)}, role: ${str(e.role)}, stack: ${str(e.stack)} },`,
      ),
      "];",
    ].join("\n"),
  },
  {
    id: "contact",
    name: "contact.tsx",
    language: "tsx",
    content: [
      "export function Contact() {",
      "  return (",
      "    <section>",
      "      <span>open to talk about</span>",
      "      <strong>apis · architecture · coffee</strong>",
      "      <a href={github}>github.com/rafaelpereiragoncalves</a>",
      "      <a href={linkedin}>linkedin.com/in/rafael-gonçalves</a>",
      "    </section>",
      "  );",
      "}",
    ].join("\n"),
  },
];

export function getFilePreviews(id: string): PreviewSection[] {
  switch (id) {
    case "stack":
      return [
        {
          title: "focus",
          items: stacks.focus.map((item) => `- ${item}`),
        },
        {
          title: "tools",
          items: stacks.tools.map((item) => `- ${item}`),
        },
        {
          title: "storage",
          items: stacks.storage.map((item) => `- ${item}`),
        },
      ];

    case "experience":
      return experiences.map((e) => ({
        title: e.year,
        items: [`${e.role} · ${e.stack}`],
      }));

    case "contact":
      return [
        {
          title: "github",
          items: ["github.com/rafaelpereiragoncalves"],
        },
        {
          title: "linkedin",
          items: ["linkedin.com/in/rafael-gonçalves"],
        },
        {
          title: "open to talk about",
          items: ["apis · architecture · coffee"],
        },
      ];

    default:
      return [];
  }
}