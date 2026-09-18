import { FiArrowUpRight, FiChevronRight, FiFolder, FiGithub } from "react-icons/fi";
import { motion } from "motion/react";

import { getLangColor } from "@/data/projects";
import type { Project } from "@/data/projects";

import { ProjectMockup } from "../ProjectMockup";

interface ProjectPreviewProps {
  project: Project;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* Barra de endereço (explorador) */}
      <div className="flex shrink-0 items-center gap-2 border-b border-[#7a1d1d]/30 bg-white/[0.02] px-4 py-2.5">
        <FiChevronRight size={14} className="text-text-muted" aria-hidden />

        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 text-xs text-text-muted">
          <FiFolder size={13} className="shrink-0" aria-hidden />

          <span className="truncate">~/projects/{project.name}</span>
        </div>
      </div>

      {/* Conteúdo (scroll dentro do componente) */}
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col p-8"
        >
          {/* Mockup no topo */}
          <ProjectMockup project={project} />

          {/* Nome + linguagem */}
          <header className="mt-8">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: getLangColor(project.lang) }}
              />

              <h2 className="text-[32px] font-semibold tracking-tight text-text-primary">
                {project.name}
              </h2>
            </div>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
              {project.description}
            </p>
          </header>

          {/* Detalhes */}
          <div className="mt-8 flex flex-col gap-6 border-t border-[#7a1d1d]/30 pt-6">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
                Technologies
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
                Impact
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-primary">
                {project.result}
              </p>
            </div>
          </div>

          {/* Link */}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              pt-8
              text-sm
              font-medium
              text-text-primary
              transition-colors
              duration-200
              hover:text-text-muted
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/20
            "
          >
            <FiGithub size={16} aria-hidden />

            View repository

            <FiArrowUpRight size={15} aria-hidden />
          </a>
        </motion.div>
      </div>
    </div>
  );
}