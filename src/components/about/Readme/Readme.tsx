import { readmeSections } from "@/data/about";
import type { ReadmeSection as ReadmeSectionType } from "@/data/about";

interface ReadmeSectionProps {
  section: ReadmeSectionType;
}

function RenderLine({ line }: { line: ReadmeSectionType["lines"][number] }) {
  if (typeof line === "string") {
    return <p className="text-sm leading-relaxed text-text-secondary">{line}</p>;
  }

  if (line.check) {
    return (
      <p className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
        <span className="mt-[3px] text-[13px] text-[#7a1d1d]">✓</span>

        {line.check}
      </p>
    );
  }

  if (line.code) {
    return (
      <div className="overflow-x-auto rounded-[var(--radius-sm)] border border-white/5 bg-black/30 px-4 py-3">
        <code className="font-mono text-[13px] leading-relaxed text-text-primary">
          {line.code}
        </code>
      </div>
    );
  }

  return null;
}

export function ReadmeSection({ section }: ReadmeSectionProps) {
  return (
    <div
      data-gsap="readme-section"
      className="border-t border-[#7a1d1d]/20 pt-6 first:border-t-0 first:pt-0"
    >
      <h2
        className="
          flex
          items-center
          gap-3
          text-lg
          font-semibold
          tracking-tight
          text-text-primary
        "
      >
        <span className="h-px w-6 bg-[#7a1d1d]/60" />

        {section.title}
      </h2>

      <div className="mt-4 flex flex-col gap-3">
        {section.lines.map((line, index) => (
          <RenderLine key={index} line={line} />
        ))}
      </div>
    </div>
  );
}

export function Readme() {
  return (
    <div className="flex h-full flex-col p-8">
      {/* Cabeçalho do arquivo */}
      <div data-gsap="about-readme-head" className="mb-8 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#7a1d1d]" />

        <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
          README.md
        </span>
      </div>

      {/* Seções */}
      <div className="flex flex-col">
        {readmeSections.map((section) => (
          <ReadmeSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}