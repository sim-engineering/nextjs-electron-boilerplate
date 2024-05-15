"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function TypewriterEffectSmoothComponent({ words }) {
  return (
    <div className="flex flex-col items-center justify-center h-[5rem] mb-8">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
