"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (isDeleting) {
      // Deleting characters
      setDisplayText((prev) => prev.slice(0, -1));

      if (displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      // Typing characters
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        // Finished typing, pause then delete
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [displayText, isDeleting, isPaused, currentPhrase, phrases.length, pauseDuration]);

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);

    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPaused, typingSpeed, deletingSpeed]);

  return displayText;
}
