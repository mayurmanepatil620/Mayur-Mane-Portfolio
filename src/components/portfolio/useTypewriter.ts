import { useEffect, useMemo, useState } from "react";

export function useTypewriter(words: string[]) {
  const safeWords = useMemo(() => (words.length ? words : [""]), [words]);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[textIndex] ?? "";

    const isAtEnd = !isDeleting && charIndex === current.length;
    const isAtStart = isDeleting && charIndex === 0;

    const baseDelay = isDeleting ? 60 : 90;
    const pauseDelay = isAtEnd ? 1400 : 0;
    const nextDelay = baseDelay + pauseDelay;

    const id = window.setTimeout(() => {
      if (isAtEnd) {
        setIsDeleting(true);
        return;
      }

      if (isAtStart && isDeleting) {
        setIsDeleting(false);
        setTextIndex((v) => (v + 1) % safeWords.length);
        return;
      }

      setCharIndex((v) => v + (isDeleting ? -1 : 1));
    }, nextDelay);

    return () => window.clearTimeout(id);
  }, [safeWords, textIndex, charIndex, isDeleting]);

  const full = safeWords[textIndex] ?? "";
  return full.slice(0, charIndex);
}
