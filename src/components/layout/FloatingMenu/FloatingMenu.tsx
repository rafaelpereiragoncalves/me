import { useLocation } from "react-router-dom";

import { menuItems } from "./menu-items";
import { FloatingMenuItem } from "./FloatingMenuItem";

export function FloatingMenu() {
  const location = useLocation();

  return (
    <nav
      aria-label="Primary Navigation"
      className="
        fixed
        left-12
        top-1/2
        z-50
        flex
        -translate-y-1/2
        flex-col
        gap-2
        rounded-2xl
        border
        border-[#7a1d1d]/50
        bg-[#2a0505]/55
        pl-2.5
        pr-4
        py-3
        shadow-[0_20px_60px_-18px_rgba(20,3,3,0.9),0_0_40px_-20px_rgba(255,70,70,0.18)]
        backdrop-blur-xl
      "
    >
      {menuItems.map((item) => (
        <FloatingMenuItem
          key={item.id}
          item={item}
          isActive={item.path === location.pathname}
        />
      ))}
    </nav>
  );
}