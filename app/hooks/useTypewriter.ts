// hooks/useTypewriter.ts
"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  texts: string[],
  typingSpeed = 80,
  pauseTime = 2000,
  deletingSpeed = 40,
  afterDeletePause = 600,
) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentText.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === currentText.length) {
      // full word typed -> wait, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayed.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      // finished deleting -> wait, then move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, afterDeletePause);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed.length,
    index,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    afterDeletePause,
  ]);

  return displayed;
}
