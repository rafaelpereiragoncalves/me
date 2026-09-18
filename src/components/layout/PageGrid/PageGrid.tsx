import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export function PageGrid({
  children,
}: Props) {
  return (
    <div
      className="
        grid

        h-full
        w-full

        grid-cols-12
        gap-8
      "
    >
      {children}
    </div>
  );
}