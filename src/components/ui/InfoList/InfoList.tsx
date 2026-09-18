import type { InfoListProps } from "./types";

export function InfoList({ children }: InfoListProps) {
  return (
    <ul className="space-y-2">
      {children}
    </ul>
  );
}