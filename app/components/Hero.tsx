"use client";

import Reveal from "@/components/Reveal";
import { useTypewriter } from "@/hooks/useTypewriter";

const TITLES = ["Full Stack Developer", "Backend Developer"];

export default function Hero() {
  const typed = useTypewriter(TITLES, 80, 2000, 40, 600);

  return (
    <Reveal>
      <section
        id="hero"
        className="h-screen flex items-center bg-cover bg-center"
      >
        <div className="ml-auto max-w-5xl w-full space-y-4 text-right rounded-3xl p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Farheen
            </span>
            .
          </h1>

          {/* big animated rotating title */}
          <p className="text-4xl md:text-5xl font-extrabold leading-tight">
            {" "}
            <h1>I&apos;m a {" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {typed}
            </span>
            {/* cursor: always blinking, independent of typed text */}
            <span className="inline-block h-6 w-[2px] align-middle bg-[rgb(var(--text))] ml-1 animate-pulse" />
            </h1>
          </p>

          <p className="text-sm md:text-base text-[rgb(var(--muted))] max-w-xl ml-auto">
            I build HRMS platforms, admin dashboards, and backend‑heavy systems
            using Node.js, MongoDB, Angular, and Next.js.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-end">
            <a
              href="projects"
              className="px-7 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium shadow-lg"
            >
              View Projects
            </a>
            <a
              href="contact"
              className="px-7 py-2.5 rounded-full border border-[rgb(var(--border))] text-sm font-medium hover:bg-[rgb(var(--card))] transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
