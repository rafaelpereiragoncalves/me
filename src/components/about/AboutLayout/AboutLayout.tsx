import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { CodeEditor } from "../CodeEditor";

export function AboutLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl
        .fromTo(
          "[data-gsap='editor-panel']",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
        )
        .fromTo(
          "[data-gsap='editor-tabs']",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='editor-body']",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.25",
        )
        .fromTo(
          "[data-gsap='editor-full-preview']",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.25",
        );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gsap]", { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-full w-full">
      <CodeEditor />
    </div>
  );
}