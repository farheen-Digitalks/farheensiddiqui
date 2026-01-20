// context/SectionContext.tsx
"use client";

import { SectionId } from "@/page";
import { createContext, useContext, useState, ReactNode } from "react";

type SectionContextValue = {
  active: SectionId;
  setActive: (id: SectionId) => void;
};

const SectionContext = createContext<SectionContextValue | null>(null);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectionId>("hero");
  return (
    <SectionContext.Provider value={{ active, setActive }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within SectionProvider");
  return ctx;
}
