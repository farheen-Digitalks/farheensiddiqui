import Reveal from "@/components/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Reveal>
      <footer className="bg-[rgb(var(--bg-soft))] border-t border-[rgb(var(--border))] relative">
        {/* background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">Farheen Siddiqui</span>. All rights reserved.
          </p>

          {/* Center */}
          <p className="text-gray-500 text-sm">
            Built with <span className="text-purple-400">Next.js</span>,{" "}
            <span className="text-purple-400">Tailwind CSS</span> & ❤️
          </p>

          {/* Right - Icons */}
          <div className="flex gap-6 text-2xl justify-center">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-400 hover:text-[#181717] transition"
              aria-label="GitHub"
            >
              {/* <FaGithub className="text-[#181717]" /> */}
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-400 hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[#0A66C2]" />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-red-500" />
            </a>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
