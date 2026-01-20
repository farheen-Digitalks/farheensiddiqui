import { Framework } from "@/components/Framework";
import Reveal from "@/components/Reveal";
import SkillCircle from "@/components/SkillCircle";

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <Reveal>
          <div className="mb-10 text-center">
            <h5 className="text-xs italic text-[rgb(var(--muted))]">My skills</h5>
          </div>
        </Reveal>

        {/* BASIC SKILLS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 place-items-center">
          <Reveal>
            <SkillCircle title="HTML" percent={98} />
          </Reveal>
          <Reveal>
            <SkillCircle title="CSS" percent={95} />
          </Reveal>
          <Reveal>
            <SkillCircle title="JavaScript" percent={85} />
          </Reveal>
        </div>

        {/* FRAMEWORKS */}
        <Reveal>
          <Framework />
        </Reveal>
      </div>
    </section>
  );
}
