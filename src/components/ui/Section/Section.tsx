import { cn } from "@/lib/utils";

import type { SectionProps } from "./types";

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col">
      {/* Cabeçalho */}
      <header className="mb-6">
        <h2
          className={cn(
            // Tipografia
            "text-xs font-medium uppercase tracking-[0.24em]",

            // Cor
            "text-text-muted",
          )}
        >
          {title}
        </h2>
      </header>

      {/* Conteúdo */}
      <div className="space-y-3">
        {children}
      </div>
    </section>
  );
}