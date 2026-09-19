import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { PageGrid } from "@/components/layout/PageGrid";

import { Focus } from "../Focus";
import { Hero } from "../Hero";
import { Stack } from "../Stack";

export function OverviewLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl
        // ── Hero ──────────────────────────────────────────────
        .fromTo(
          "[data-gsap='hero-greeting']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
        )
        .fromTo(
          "[data-gsap='hero-title']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='hero-description']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='hero-links']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='hero-photo']",
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
          "-=0.3",
        )

        // ── Focus ─────────────────────────────────────────────
        .fromTo(
          "[data-gsap='focus-section'] header",
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='focus-section'] li",
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, stagger: 0.08 },
          "-=0.3",
        )

        // ── Stack ─────────────────────────────────────────────
        .fromTo(
          "[data-gsap='stack-section'] header",
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.3",
        )
        .fromTo(
          "[data-gsap='stack-section'] p",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.12 },
          "-=0.3",
        );
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gsap], [data-depth]", { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-full w-full">
      <PageGrid>
        <Hero />

        <Focus />

        <Stack />
      </PageGrid>
    </div>
  );
}