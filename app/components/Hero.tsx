"use client";

import Reveal from "@/components/Reveal";
import { useTypewriter } from "@/hooks/useTypewriter";

const line = "Full Stack Developer focused on backend-heavy systems.";

export default function Hero() {
  const typed = useTypewriter(line, 35);

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

          <p className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))]">
            {typed}
            <span className="inline-block h-5 w-1 align-middle bg-[rgb(var(--text))] ml-1 animate-pulse" />
          </p>

          {/* <p className="text-sm md:text-base text-[rgb(var(--muted))] max-w-xl ml-auto">
            I build HRMS platforms, admin dashboards, and backend‑heavy systems
            using Node.js, MongoDB, Angular, and Next.js.
          </p> */}

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
