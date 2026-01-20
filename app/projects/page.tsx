"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <Reveal>
    <section id="projects" className="py-3 text-center px-6">

        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Real-world applications focused on backend systems, scalability, and
          role-based access.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-purple-500 transition"
              onClick={() => setActive(project)}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
            <div className="bg-zinc-900 p-8 rounded-xl max-w-md w-full text-left">
              <h3 className="text-2xl font-bold mb-3">{active.title}</h3>
              <p className="text-gray-400 mb-6">{active.description}</p>

              <div className="flex gap-4">
                <a
                  href={active.github}
                  target="_blank"
                  className="border px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>
                <a
                  href={active.live}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                >
                  Live Demo
                </a>
              </div>

              <button
                className="mt-6 text-gray-400 hover:text-white"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </Reveal>
  );
}
