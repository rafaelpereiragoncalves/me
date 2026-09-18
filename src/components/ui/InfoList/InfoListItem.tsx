import type { InfoListItemProps } from "./types";

export function InfoListItem({ children }: InfoListItemProps) {
  return (
    <li className="group flex items-center gap-3">
      <span
        className="
      h-3
      w-px
      rounded-full
      bg-white/20
      transition-colors
      duration-200
      group-hover:bg-white/60
    "
      />

      <span
        className="
      text-sm
      text-text-secondary
      transition-colors
      duration-200
      group-hover:text-text-primary
    "
      >
        {children}
      </span>
    </li>
  );
}
