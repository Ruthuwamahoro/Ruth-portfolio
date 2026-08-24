"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";
import { skillGroups } from "@/constants/skills";



export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delayMs: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.6s ease-out ${delayMs}ms, transform 0.6s ease-out ${delayMs}ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2D2F33] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      id="skills"
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-fade-up] { transition: none !important; }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] bottom-0 -z-0 h-[380px] w-[380px] rounded-full bg-[#9EF2C6]/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1450px]">
        <div data-fade-up style={fadeUp(0)} className="max-w-[560px]">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9EF2C6]">
            Toolbox
          </span>
          <h2 className="mt-4 font-mono text-[34px] font-bold leading-[1.15] tracking-tight text-[#F8F8F8] sm:text-[40px]">
            Skills &amp; stack
          </h2>
          <p className="mt-6 font-mono text-[14px] leading-[1.75] text-[#A4A5A9]">
            The tools I reach for most, grouped the way I&apos;d organize a
            real config file &mdash; not a wall of logos. Each of these has
            shipped in production, not just in a tutorial.
          </p>
        </div>

        <div
          data-fade-up
          style={fadeUp(150)}
          className="mt-12 overflow-hidden rounded-2xl bg-[#26282B] ring-1 ring-white/5"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#2D2F33] px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 flex items-center gap-1.5 font-mono text-[12px] text-[#A4A5A9]">
              <Terminal className="h-3.5 w-3.5" strokeWidth={2} />
              stack.config.ts
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 p-6 sm:p-10 md:grid-cols-2">
            {skillGroups.map(({ key, label, skills }, i) => (
              <div
                key={key}
                data-fade-up
                style={fadeUp(220 + i * 100)}
                className="font-mono text-[13.5px] leading-relaxed"
              >
                <div className="text-[#F8F8F8]">
                  <span className="text-[#9EF2C6]">{label}</span>
                  <span className="text-[#A4A5A9]">: [</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 pl-4">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#333438] px-3 py-1.5 text-[12.5px] text-[#F8F8F8] ring-1 ring-white/5 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#9EF2C6] hover:ring-[#9EF2C6]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-[#A4A5A9]">],</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}