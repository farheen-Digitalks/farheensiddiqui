"use client";

import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="
          py-6 lg:py-24
          px-4 sm:px-8
        "
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />

          <p className="text-[rgb(var(--muted))] max-w-2xl mx-auto mb-12 text-center">
            Real-world applications focused on backend systems, scalability, and
            role-based access.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-gray-800/90
                  cursor-pointer
                  h-69
                  shadow-sm
                  transition-[transform,box-shadow,border-color] duration-300 ease-out
                  hover:shadow-2xl hover:border-blue-500/70 hover:-translate-y-1 hover:scale-[1.02]
                "
              >
                {/* FRONT FACE */}
                <div
                  className="
                    h-full w-full
                    flex items-center justify-center
                    px-8
                    text-center
                    transition-opacity duration-200 ease-out
                    group-hover:opacity-0
                  "
                >
                  <div className="flex flex-col items-center gap-3">
                    {/* <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      Project
                    </span> */}
                    <span className="text-2xl text-[rgb(var(--muted))] font-semibold">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* SMOOTH FADE + SLIDE DETAILS */}
                <div
                  className="
    pointer-events-none
    absolute inset-0
    z-10
    flex flex-col justify-between
    px-6 py-5

    opacity-0 translate-y-4
    transition-all duration-300 ease-out
    delay-150
    group-hover:opacity-100 group-hover:translate-y-0
    group-hover:delay-150
  "
                >
                  <div className="text-left">
                    <h3 className="text-lg text-[rgb(var(--muted))] font-bold mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[rgb(var(--muted))] leading-snug line-clamp-5">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 text-xs text-center
                        border border-gray-400
                        rounded-lg px-3 py-2
                        text-[rgb(var(--muted))]
                        hover:bg-gray-100/80
                        transition-colors duration-200
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 text-xs text-center
                        rounded-lg px-3 py-2
                        bg-gradient-to-r from-blue-500 to-purple-500
                        text-white
                        hover:from-blue-600 hover:to-purple-600
                        shadow-md hover:shadow-lg
                        transition-all duration-200
                      "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
