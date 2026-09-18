import type { Project } from "@/data/projects";

import { ProjectListItem } from "../ProjectListItem";

interface ProjectListProps {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ProjectList({
  projects,
  selectedId,
  onSelect,
}: ProjectListProps) {
  return (
    <div className="flex w-72 shrink-0 flex-col border-r border-[#7a1d1d]/30">
      {/* Cabeçalho do explorador */}
      <div className="flex items-center justify-between border-b border-[#7a1d1d]/30 px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
          projects
        </span>

        <span className="text-xs text-text-muted">{projects.length}</span>
      </div>

      {/* Lista de projetos */}
      <ul className="custom-scrollbar flex-1 space-y-0.5 overflow-y-auto p-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectListItem
              project={project}
              selected={project.id === selectedId}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}