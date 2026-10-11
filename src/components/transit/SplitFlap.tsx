import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const FLIPS = 8;
const FLIP_MS = 45;

const FlapChar = ({ char, delay }: { char: string; delay: number }) => {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? char : " ");

  useEffect(() => {
    if (reduced || char === " ") {
      setShown(char);
      return;
    }
    let flips = 0;
    let timer = 0;
    const tick = () => {
      flips += 1;
      if (flips > FLIPS) {
        setShown(char);
        return;
      }
      setShown(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
      timer = window.setTimeout(tick, FLIP_MS);
    };
    timer = window.setTimeout(tick, delay);
    return () => window.clearTimeout(timer);
  }, [char, delay, reduced]);

  return <span className="flap-cell">{shown === " " ? "\u00a0" : shown}</span>;
};

interface FlapTextProps {
  text: string;
  length: number;
  delay?: number;
  stagger?: number;
  className?: string;
}

/** Fixed-width split-flap text. Decorative: pair it with real text for assistive tech. */
export const FlapText = ({ text, length, delay = 0, stagger = 30, className }: FlapTextProps) => {
  const chars = text.toUpperCase().padEnd(length, " ").slice(0, length).split("");
  return (
    <span aria-hidden="true" className={cn("inline-flex gap-[2px]", className)}>
      {chars.map((char, i) => (
        <FlapChar key={i} char={char} delay={delay + i * stagger} />
      ))}
    </span>
  );
};
