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

      <div className="my-1 border-t border-[#7a1d1d]/30" />

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="
          group
          relative
          flex
          h-10
          w-full
          cursor-pointer
          items-center
          gap-2.5
          rounded-md
          border
          border-transparent
          pl-1.5
          pr-4
          transition-all
          duration-200
          hover:bg-white/5
          hover:text-text-primary
          hover:translate-x-0.5
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          />
        </svg>

        <span className="text-sm font-normal text-text-secondary transition-colors duration-200 group-hover:text-text-primary">
          Resume
        </span>
      </a>
    </nav>
  );
}