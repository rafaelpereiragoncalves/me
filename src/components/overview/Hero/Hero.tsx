import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Hero() {
  return (
    <section
      className="
        col-span-12
        flex
        flex-col
        md:flex-row
        gap-6
        items-center
        pt-8
      "
    >
      {/* Left column: greeting, title, description, links */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* SaudaÃ§Ã£o */}
        <p
          data-gsap="hero-greeting"
          data-depth="3"
          className="
            text-base
            font-medium
            text-text-primary
          "
        >
          Hi, I'm Rafael!
        </p>

        {/* Cargo */}
        <h1
          data-gsap="hero-title"
          data-depth="6"
          className="
        mt-0
        whitespace-nowrap
        text-[48px]
        leading-[56px]
        font-semibold
        tracking-tight
        text-text-primary
      "
        >
          backend developer
        </h1>

        {/* DescriÃ§Ã£o */}
        <p
          data-gsap="hero-description"
          data-depth="4"
          className="
        mt-0
        max-w-xl
        text-xl
        leading-relaxed
        text-text-muted
      "
        >
          Building software with simplicity, architecture and attention to detail.
        </p>

        {/* Links */}
        <div
          data-gsap="hero-links"
          data-depth="5"
          className="
        mt-0
        flex
        items-center
        gap-4
      "
        >
          <a
            href="https://github.com/rafaelpereiragoncalves"
            target="_blank"
            rel="noreferrer"
            className="
              text-text-primary
              transition-opacity
              duration-200
              hover:opacity-50
            "
          >
            <FiGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-gon%C3%A7alves-46bab412b/"
            target="_blank"
            rel="noreferrer"
            className="
              text-text-primary
              transition-opacity
              duration-200
              hover:opacity-50
            "
          >
            <FiLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Right column: profile picture */}
      <div className="flex flex-col items-center md:w-1/2">
        <img
          data-gsap="hero-photo"
          data-depth="2"
          src="/profile.png"
          alt="Rafael GonÃ§alves"
          className="
            w-40
            h-40
            rounded-full
            object-cover
            border-2
            border-text-primary
          "
        />
      </div>
    </section>
  );
}
