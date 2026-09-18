import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { projects } from "@/data/projects";

import { ProjectList } from "../ProjectList";
import { ProjectPreview } from "../ProjectPreview";

export function ProjectsLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const selected =
    projects.find((project) => project.id === selectedId) ?? projects[0];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl
        .fromTo(
          "[data-gsap='projects-panel']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
        )
        .fromTo(
          "[data-gsap='project-row']",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.04, duration: 0.4 },
          "-=0.25",
        )
        .fromTo(
          "[data-gsap='project-mockup']",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25",
        );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gsap]", { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      data-gsap="projects-panel"
      className="
        flex
        h-full
        w-full

        overflow-hidden
        rounded-[var(--radius-lg)]
        border
        border-[#7a1d1d]/40
        bg-[#2a0505]
      "
    >
      <ProjectList
        projects={projects}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <ProjectPreview project={selected} />
    </div>
  );
}