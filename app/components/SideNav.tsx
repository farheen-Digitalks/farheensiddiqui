"use client";

import {
    Home,
    User,
    FileText,
    Image,
    Server,
    Mail,
  } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useSection } from "./SectionContent";
  
  const navItems = [
    { id: "hero", icon: Home },
    { id: "about", icon: User },
    // { id: "skills", icon: Server },
    { id: "projects", icon: Image },
    { id: "contact", icon: Mail },
  ];
  
  // SideNavbar.tsx
  export default function SideNavbar() {
    const { active, setActive } = useSection();

    return (
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id as never)}
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                border
                ${
                  isActive
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-[rgb(var(--card))] border-[rgb(var(--border))] text-[rgb(var(--muted))]"
                }
                transition
              `}
            >
              <Icon size={20} />
            </button>
          );
        })}
        <ThemeToggle />
      </div>
    );
  }
  
  