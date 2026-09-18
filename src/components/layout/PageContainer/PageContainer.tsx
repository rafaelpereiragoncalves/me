import type { PropsWithChildren } from "react";

type PageContainerProps = PropsWithChildren;

export function PageContainer({ children }: PageContainerProps) {
  return (
    <section
      className="
        flex
        h-screen

        pl-72
        pr-20

        py-16
      "
    >
      <div
        className="
          mx-auto

          flex
          h-full
          w-full

          max-w-7xl
        "
      >
        {children}
      </div>
    </section>
  );
}
