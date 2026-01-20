// app/page.tsx
"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/about/page";
import SkillBadge from "@/skills/page";
import Projects from "@/projects/page";
import Contact from "@/contact/page";
import Footer from "@/components/Footer";
import { useSection } from "@/components/SectionContent";

export type SectionId = "hero" | "about" | "skills" | "projects" | "contact";

export default function Home() {
  const { active } = useSection();
  // const [active, setActive] = useState<SectionId>("hero");

  const renderSection = () => {
    switch (active) {
      case "about":
        return <About />;
      case "skills":
        return <SkillBadge />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* pass setter to sidenav via context or props (see next step) */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-6xl">{renderSection()}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
