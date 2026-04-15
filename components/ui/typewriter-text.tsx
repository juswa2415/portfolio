"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterTextProps = {
  words: string[];
};

export function TypewriterText({ words }: TypewriterTextProps) {
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);
  const longestWord = words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  , words[0] ?? "");

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(words[0] ?? "");
      return;
    }

    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = displayText === currentWord;
    const isWordDeleted = displayText.length === 0;
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isWordComplete) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          return;
        }

        if (!isDeleting && isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isWordDeleted) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      },
      !isDeleting && isWordComplete ? 1300 : isDeleting ? 40 : 80
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, reducedMotion, wordIndex, words]);

  return (
    <span className="relative inline-grid min-h-[1.3em] items-center align-middle">
      <span className="invisible whitespace-nowrap">{longestWord}</span>
      <span className="absolute inset-0 inline-flex items-center whitespace-nowrap">
        <span>{displayText}</span>
        {!reducedMotion ? (
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1.1em] w-px animate-caret bg-accent"
          />
        ) : null}
      </span>
    </span>
  );
}
