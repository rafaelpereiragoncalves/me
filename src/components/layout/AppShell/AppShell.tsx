import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { preloadPages } from "@/app/preload";
import { ScrollNavigation } from "@/hooks/useScrollNavigation.tsx";

import { FloatingMenu } from "../FloatingMenu";
import { PageTransition, PageTransitionScreen } from "../PageTransition";

export function AppShell() {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    preloadPages();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const scope = shellRef.current;
      if (!scope) return;

      const grain = scope.querySelector<HTMLElement>("[data-gsap='grain']");
      if (!grain) return;

      const grainX = gsap.quickTo(grain, "x", {
        duration: 0.7,
        ease: "power3",
      });
      const grainY = gsap.quickTo(grain, "y", {
        duration: 0.7,
        ease: "power3",
      });

      const layers = gsap.utils
        .toArray<HTMLElement>(scope.querySelectorAll("[data-depth]"))
        .map((el) => {
          const depth = parseFloat(el.dataset.depth ?? "");
          if (!Number.isFinite(depth) || depth <= 0) return null;

          return {
            depth,
            xTo: gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" }),
            yTo: gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" }),
          };
        })
        .filter(
          (layer): layer is NonNullable<typeof layer> => layer !== null,
        );

      const onMove = (e: MouseEvent) => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const nx = (e.clientX / w - 0.5) * 2;
        const ny = (e.clientY / h - 0.5) * 2;

        grainX(nx * 28);
        grainY(ny * 28);

        for (const layer of layers) {
          layer.xTo(nx * layer.depth);
          layer.yTo(ny * layer.depth);
        }
      };

      scope.addEventListener("mousemove", onMove);

      return () => scope.removeEventListener("mousemove", onMove);
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-gsap='grain'], [data-depth]", { clearProps: "all" });
    });

    return () => mm.revert();
  }, { scope: shellRef });

  return (
    <PageTransition>
      <ScrollNavigation />

      <FloatingMenu />

      <div
        ref={shellRef}
        className="relative h-screen w-screen overflow-hidden bg-[radial-gradient(1200px_900px_at_20%_0%,#4a0e0e_0%,#380808_45%,#240404_100%)] bg-fixed"
      >
        {/* Textura grain */}
        <div
          aria-hidden
          data-gsap="grain"
          className="
          pointer-events-none
          absolute
          -inset-8
          bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27200%27%20height%3D%27200%27%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3CfeColorMatrix%20type%3D%27saturate%27%20values%3D%270%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27200%27%20height%3D%27200%27%20filter%3D%27url(%23n)%27%2F%3E%3C%2Fsvg%3E')]
          bg-repeat
          opacity-[0.2]
          mix-blend-screen
          will-change-transform
        "
        />

        <main className="h-full w-full">
          <PageTransitionScreen />
        </main>
      </div>
    </PageTransition>
  );
}