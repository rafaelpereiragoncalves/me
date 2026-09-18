import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Hero() {
  return (
    <section
      className="
        col-span-12
        flex
        flex-col
        justify-center
      "
    >
      {/* Saudação */}
      <p
        data-gsap="hero-greeting"
        data-depth="3"
        className="
          text-lg
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
mt-4
        text-[64px]
        leading-[72px]
        font-semibold
        tracking-tight
        text-text-primary
        "
      >
        backend developer
      </h1>

      {/* Descrição */}
      <p
        data-gsap="hero-description"
        data-depth="4"
        className="
          mt-4
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
          mt-8
          flex
          items-center
          gap-5
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
    </section>
  );
}
