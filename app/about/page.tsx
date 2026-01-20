import Image from "next/image";
import Reveal from "@/components/Reveal";
import Skills from "@/skills/page";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-55 h-55 md:w-100 md:h-100 rounded-3xl overflow-hidden border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-[0_18px_50px_rgba(15,23,42,0.25)]">
              <Image
                src="/images/me.jpeg"
                alt="Farheen profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-indigo-500">Me</span>
            </h2>
            <p className="text-[rgb(var(--muted))] leading-relaxed mb-6">
              I&apos;m{" "}
              <span className="font-semibold text-[rgb(var(--text))]">
                Farheen
              </span>
              , a full stack developer focused on backend‑heavy systems, HRMS
              platforms, and admin dashboards using Node.js, MongoDB, Angular,
              and Next.js.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3">
                <p className="font-medium mb-1">What I enjoy</p>
                <p className="text-[rgb(var(--muted))]">
                  Designing clean APIs, role‑based access, and scalable data
                  models.
                </p>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3">
                <p className="font-medium mb-1">Stack in practice</p>
                <p className="text-[rgb(var(--muted))]">
                  Node.js · Express · MongoDB · Angular · Next.js · Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </Reveal>
  );
}
