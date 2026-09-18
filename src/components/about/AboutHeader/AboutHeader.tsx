import { FiGithub, FiLinkedin } from "react-icons/fi";

import { aboutProfile } from "@/data/about";

import { LanguageBar } from "../LanguageBar";

export function AboutHeader() {
  return (
    <div className="flex h-full flex-col p-8">
      {/* Avatar */}
      <div
        data-gsap="about-avatar"
        className="
          flex
          h-24
          w-24
          items-center
          justify-center

          rounded-full
          border
          border-[#7a1d1d]/50
          bg-[radial-gradient(circle_at_30%_25%,#4a0e0e,#240404_70%)]
          text-[32px]
          font-semibold
          tracking-tight
          text-text-primary
        "
      >
        {aboutProfile.avatar}
      </div>

      {/* Nome + username */}
      <div data-gsap="about-name" className="mt-6">
        <h2 className="text-[28px] font-semibold tracking-tight text-text-primary">
          {aboutProfile.name}
        </h2>

        <p className="mt-1 text-sm text-text-muted">{aboutProfile.username}</p>
      </div>

      {/* Tagline */}
      <p
        data-gsap="about-tagline"
        className="mt-4 text-sm leading-relaxed text-text-secondary"
      >
        {aboutProfile.tagline}
      </p>

      {/* Links */}
      <div data-gsap="about-links" className="mt-5 flex items-center gap-4">
        <a
          href={aboutProfile.contact}
          target="_blank"
          rel="noreferrer"
          className="text-text-primary transition-opacity duration-200 hover:opacity-50"
        >
          <FiGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/rafael-gon%C3%A7alves-46bab412b/"
          target="_blank"
          rel="noreferrer"
          className="text-text-primary transition-opacity duration-200 hover:opacity-50"
        >
          <FiLinkedin size={18} />
        </a>
      </div>

      {/* Stats */}
      <div
        data-gsap="about-stats"
        className="mt-8 grid grid-cols-3 gap-2 border-t border-[#7a1d1d]/30 pt-6"
      >
        {aboutProfile.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-lg font-medium text-text-primary">
              {stat.value}
            </p>

            <p className="mt-0.5 text-xs text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Linguagens */}
      <div
        data-gsap="about-langs"
        className="mt-8 border-t border-[#7a1d1d]/30 pt-6"
      >
        <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
          Languages
        </h3>

        <div className="mt-4">
          <LanguageBar />
        </div>
      </div>
    </div>
  );
}