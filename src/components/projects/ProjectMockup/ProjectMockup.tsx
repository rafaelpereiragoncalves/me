import type { Project } from "@/data/projects";

interface ProjectMockupProps {
  project: Project;
}

export function ProjectMockup({ project }: ProjectMockupProps) {
  return (
    <figure data-gsap="project-mockup" className="group relative w-full">
      {/* Luz ambiente (hover) */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -inset-3
          rounded-[var(--radius-lg)]
          bg-[radial-gradient(60%_60%_at_50%_0%,rgba(122,29,29,0.35),transparent_70%)]
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Moldura de navegador */}
      <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-[#150404]/60 shadow-[0_20px_50px_-20px_rgba(20,3,3,0.9)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#7a1d1d]/60 group-hover:shadow-[0_30px_60px_-20px_rgba(20,3,3,0.9),0_0_40px_-16px_rgba(122,29,29,0.4)]">
        {/* Barra superior */}
        <div className="flex items-center gap-3 border-b border-white/5 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
          </div>

          <div className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-xs text-text-muted">
            {project.name}
          </div>
        </div>

        {/* Corpo (mockup / vazio) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} mockup`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : null}
        </div>
      </div>
    </figure>
  );
}