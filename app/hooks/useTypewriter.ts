// hooks/useTypewriter.ts
"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 50) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return displayed;
}
