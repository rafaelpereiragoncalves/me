/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { AppShell } from "@/components/layout/AppShell";

const OverviewPage = lazy(() =>
  import("@/pages/Overview").then((mod) => ({ default: mod.OverviewPage })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/Projects").then((mod) => ({ default: mod.ProjectsPage })),
);
const AboutPage = lazy(() =>
  import("@/pages/About").then((mod) => ({ default: mod.AboutPage })),
);

const PageFallback = () => null;

export const router = createBrowserRouter([
  {
    element: <AppShell />,

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <OverviewPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<PageFallback />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);