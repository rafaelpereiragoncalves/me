import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

import { usePageTransition } from "@/components/layout/PageTransition";
import { menuItems } from "@/components/layout/FloatingMenu/menu-items";

const THRESHOLD = 32;
const COOLDOWN_MS = 1200;

function elementScrollsInDirection(
  target: EventTarget | null,
  deltaY: number,
): boolean {
  const dir = deltaY > 0 ? "down" : "up";

  let el = target instanceof Element ? target : null;
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const scrollable =
      style.overflowY === "auto" || style.overflowY === "scroll";

    if (scrollable) {
      const canGoDown =
        el.scrollTop + el.clientHeight < el.scrollHeight - 1;
      const canGoUp = el.scrollTop > 1;

      if (dir === "down" && canGoDown) return true;
      if (dir === "up" && canGoUp) return true;
    }

    el = el.parentElement;
  }

  return false;
}

function atInnerScrollBoundary(
  target: EventTarget | null,
  deltaY: number,
): boolean {
  const dir = deltaY > 0 ? "down" : "up";

  let el = target instanceof Element ? target : null;
  while (el && el !== document.body) {
    const style = getComputedStyle(el);
    const scrollable =
      style.overflowY === "auto" || style.overflowY === "scroll";

    if (scrollable) {
      const canGoDown =
        el.scrollTop + el.clientHeight < el.scrollHeight - 1;
      const canGoUp = el.scrollTop > 1;
      const atLimit = dir === "down" ? !canGoDown : !canGoUp;
      return atLimit;
    }

    el = el.parentElement;
  }

  return false;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface Armed {
  path: string;
  dir: number;
}

const NEXT_TEXT = "continue scrolling to the next page";
const PREV_TEXT = "continue scrolling to the previous page";

export function ScrollNavigation() {
  const { go } = usePageTransition();
  const location = useLocation();

  const accumulator = useRef(0);
  const lastFired = useRef(0);
  const resetTimer = useRef<number | null>(null);
  const armed = useRef<Armed | null>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const hintShown = useRef(false);
  const hintDirRef = useRef(1);
  const [hintText, setHintText] = useState(NEXT_TEXT);
  const [hintIsDown, setHintIsDown] = useState(true);

  const showHint = useCallback((dir: number) => {
    const el = hintRef.current;
    if (!el || hintShown.current) return;
    hintShown.current = true;
    hintDirRef.current = dir;

    setHintText(dir > 0 ? NEXT_TEXT : PREV_TEXT);
    setHintIsDown(dir > 0);

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    );
  }, []);

  const hideHint = useCallback(() => {
    const el = hintRef.current;
    if (!el || !hintShown.current) return;
    hintShown.current = false;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 0 });
      return;
    }

    gsap.to(el, {
      opacity: 0,
      y: hintDirRef.current > 0 ? 16 : -16,
      duration: 0.2,
      ease: "power2.in",
    });
  }, []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const now = Date.now();
      const dirSign = event.deltaY > 0 ? 1 : -1;

      // Navegação armada: aguarda um NOVO scroll na mesma direção.
      if (armed.current) {
        if (dirSign !== armed.current.dir) {
          // Inverteu a direção → cancela a navegação pendente.
          armed.current = null;
          accumulator.current = 0;
          hideHint();
        } else {
          accumulator.current += event.deltaY;
          if (Math.abs(accumulator.current) >= THRESHOLD) {
            const path = armed.current.path;
            armed.current = null;
            accumulator.current = 0;
            hideHint();
            lastFired.current = now;
            go(path);
          }
        }
        return;
      }

      if (now - lastFired.current < COOLDOWN_MS) return;

      // Painel interno ainda pode rolar → deixa rolar, sem navegar.
      if (elementScrollsInDirection(event.target, event.deltaY)) {
        accumulator.current = 0;
        hideHint();
        return;
      }

      accumulator.current += event.deltaY;

      if (Math.abs(accumulator.current) < THRESHOLD) {
        if (resetTimer.current) window.clearTimeout(resetTimer.current);
        resetTimer.current = window.setTimeout(() => {
          accumulator.current = 0;
        }, 250);
        return;
      }

      const deltaY = accumulator.current;
      accumulator.current = 0;

      const currentIndex = menuItems.findIndex(
        (item) => item.path === location.pathname,
      );
      if (currentIndex === -1) return;

      const nextIndex = deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      const next = menuItems[nextIndex];
      if (!next) return;

      // Limite de um scroll interno: segura, mostra a dica e arma.
      if (atInnerScrollBoundary(event.target, event.deltaY)) {
        showHint(dirSign);
        armed.current = { path: next.path, dir: dirSign };
        return;
      }

      lastFired.current = now;
      hideHint();
      go(next.path);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, [go, location.pathname, hideHint, showHint]);

  // Limpa acumulador/estado quando a rota muda (transição concluída).
  useEffect(() => {
    accumulator.current = 0;
    armed.current = null;
    hideHint();
  }, [location.pathname, hideHint]);

  return (
    <div
      aria-hidden
      className={hintIsDown ? "pointer-events-none fixed inset-x-0 bottom-0 z-40" : "pointer-events-none fixed inset-x-0 top-0 z-40"}
    >
      <div ref={hintRef} className="opacity-0">
        <div
          className={
            hintIsDown
              ? "flex justify-center bg-gradient-to-t from-[#240404]/70 to-transparent pb-6 pt-14"
              : "flex justify-center bg-gradient-to-b from-[#240404]/70 to-transparent pb-14 pt-6"
          }
        >
          <span className="text-[11px] font-light uppercase tracking-[0.32em] text-text-muted/70">
            {hintText}
          </span>
        </div>
      </div>
    </div>
  );
}