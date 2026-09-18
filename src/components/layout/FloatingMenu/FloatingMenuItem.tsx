import { motion } from "motion/react";

import { usePageTransition } from "@/components/layout/PageTransition";

import { cn } from "@/lib/utils";

import type { FloatingMenuItemData } from "./types";

interface Props {
  item: FloatingMenuItemData;
  isActive: boolean;
}

export function FloatingMenuItem({ item, isActive }: Props) {
  const { go } = usePageTransition();

  return (
    <button
      type="button"
      onClick={() => go(item.path)}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        // ==========================================================
        // Layout
        // ==========================================================
        "relative flex h-10 w-full cursor-pointer items-center",

        // ==========================================================
        // Espaçamento
        // ==========================================================
        "pl-1.5 pr-4",

        // ==========================================================
        // Aparência
        // ==========================================================
        "rounded-md",

        // ==========================================================
        // Transições
        // ==========================================================
        "transition-all duration-200",

        // ==========================================================
        // Estado (ativo / inativo)
        // ==========================================================
        isActive
          ? "border border-white/10 bg-white/10"
          : "border border-transparent hover:bg-white/5 hover:text-text-primary hover:translate-x-0.5"
      )}
    >
      {/* ==========================================================
          Indicador da página ativa
          ========================================================== */}

      <div className="mr-2 w-1 shrink-0">
        {isActive && (
          <motion.div
            layoutId="menu-indicator"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="
              h-4
              w-0.5
              rounded-full
              bg-text-primary
            "
          />
        )}
      </div>

      {/* ==========================================================
          Texto do menu
          ========================================================== */}

      <span
        className={cn(
          "flex-1 text-left text-sm transition-all duration-200",

          isActive
            ? "font-semibold text-text-primary"
            : "font-normal text-text-secondary"
        )}
      >
        {item.label}
      </span>
    </button>
  );
}