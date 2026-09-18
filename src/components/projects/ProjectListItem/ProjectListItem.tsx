import { FiFile } from "react-icons/fi";

import { getLangColor } from "@/data/projects";
import type { Project } from "@/data/projects";

import { cn } from "@/lib/utils";

interface ProjectListItemProps {
  project: Project;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function ProjectListItem({
  project,
  selected,
  onSelect,
}: ProjectListItemProps) {
  return (
    <button
      type="button"
      data-gsap="project-row"
      aria-pressed={selected}
      onClick={() => onSelect(project.id)}
      className={cn(
        // Layout
        "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left",

        // Transições
        "transition-colors duration-200",

        // Foco
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",

        // Estado
        selected
          ? "bg-white/10 text-text-primary"
          : "text-text-secondary hover:bg-white/5 hover:text-text-primary",
      )}
    >
      <FiFile size={15} className="shrink-0" aria-hidden />

      <span className="min-w-0 flex-1 truncate text-sm">{project.name}</span>

      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: getLangColor(project.lang) }}
      />
    </button>
  );
}