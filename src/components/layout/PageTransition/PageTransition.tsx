import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type PropsWithChildren,
} from "react";
import { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

import { menuItems } from "@/components/layout/FloatingMenu/menu-items";

type Direction = "up" | "down";

interface PageTransitionContextValue {
  go: (path: string) => void;
  screenRef: React.RefObject<HTMLDivElement | null>;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

// eslint-disable-next-line react-refresh/only-export-components
export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within PageTransition");
  }
  return ctx;
}

function getDirection(from: string, to: string): Direction {
  const indexOf = (path: string) =>
    menuItems.findIndex((item) => item.path === path);

  const fromIndex = indexOf(from);
  const toIndex = indexOf(to);

  if (fromIndex === -1 || toIndex === -1) return "down";
  return toIndex > fromIndex ? "down" : "up";
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const PageFallback = () => null;

export function PageTransition({ children }: PropsWithChildren) {
  const location = useLocation();
  const navigate = useNavigate();

  const screenRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const directionRef = useRef<Direction | null>(null);
  const prevPathRef = useRef(location.pathname);

  const go = useCallback(
    (path: string) => {
      const from = location.pathname;
      if (path === from || busyRef.current) return;

      const direction = getDirection(from, path);
      busyRef.current = true;
      directionRef.current = direction;

      const screen = screenRef.current;
      if (!screen || prefersReducedMotion()) {
        navigate(path);
        return;
      }

      gsap.to(screen, {
        y: direction === "down" ? -60 : 60,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => navigate(path),
      });
    },
    [location.pathname, navigate],
  );

  useEffect(() => {
    const path = location.pathname;
    if (prevPathRef.current === path) return;
    prevPathRef.current = path;

    const screen = screenRef.current;
    if (!screen || prefersReducedMotion()) {
      busyRef.current = false;
      return;
    }

    const direction = directionRef.current ?? "down";
    directionRef.current = null;

    gsap.fromTo(
      screen,
      { y: direction === "down" ? 60 : -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          busyRef.current = false;
        },
      },
    );
  }, [location.pathname]);

  const value = useMemo(
    () => ({ go, screenRef }),
    [go],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function PageTransitionScreen() {
  const { screenRef } = usePageTransition();

  return (
    <div ref={screenRef} className="h-full w-full">
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </div>
  );
}