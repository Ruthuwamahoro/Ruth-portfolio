// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ArrowUpRight, Check } from "lucide-react";
// import Link from "next/link";
// import { highlights, services } from "@/constants/services";



// export default function About() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const node = sectionRef.current;
//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   const fadeUp = (delayMs: number): React.CSSProperties => ({
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? "translateY(0)" : "translateY(16px)",
//     transition: `opacity 0.6s ease-out ${delayMs}ms, transform 0.6s ease-out ${delayMs}ms`,
//   });

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden bg-[#1F2124] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
//       <style>{`
//         @media (prefers-reduced-motion: reduce) {
//           [data-fade-up] { transition: none !important; }
//           .about-float { animation: none !important; }
//         }
//         @keyframes about-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//       `}</style>

//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//         }}
//       />
//       <div
//         aria-hidden
//         className="about-float pointer-events-none absolute left-[6%] top-1/4 -z-0 h-[380px] w-[380px] rounded-full bg-[#9EF2C6]/10 blur-[120px]"
//       />

//       <div className="relative mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
//         <div className="flex h-full flex-col rounded-2xl bg-[#2D2F33] px-8 py-10 ring-1 ring-white/5 sm:px-12 sm:py-12">
//           <div className="flex flex-1 flex-col justify-center divide-y divide-white/10">
//             {services.map(({ title, description, href, Icon, project }, i) => (
//               <div
//                 key={title}
//                 data-fade-up
//                 style={fadeUp(i * 120)}
//                 className="group flex items-start gap-5 py-7 first:pt-0 last:pb-0"
//               >
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#333438] text-[#9EF2C6] ring-1 ring-white/5 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#9EF2C6] group-hover:text-[#10240F]">
//                   <Icon className="h-5 w-5" strokeWidth={2} />
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="font-mono text-[17px] font-bold text-[#F8F8F8]">
//                     {title}
//                   </h3>
//                   <p className="mt-2 font-mono text-[13px] leading-[1.65] text-[#A4A5A9]">
//                     {description}
//                   </p>
//                   <Link
//                     href={href}
//                     className="mt-3 inline-flex items-center gap-1 font-mono text-[12px] font-bold uppercase tracking-wide text-[#9EF2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EF2C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D2F33]"
//                   >
//                     <span className="underline decoration-[#9EF2C6]/40 underline-offset-4 transition-colors duration-200 group-hover:decoration-[#9EF2C6]">
//                       {project} Projects
//                     </span>
//                     <ArrowUpRight
//                       className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                       strokeWidth={2.5}
//                     />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div
//           data-fade-up
//           style={fadeUp(150)}
//           className="flex h-full flex-col justify-center xl:pl-6"
//         >
//           <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9EF2C6]">
//             Introduce
//           </span>

//           <h2 className="mt-4 font-mono text-[34px] font-bold leading-[1.15] tracking-tight text-[#F8F8F8] sm:text-[40px]">
//             About me
//           </h2>

//           <p className="mt-6 max-w-[480px] font-mono text-[14px] leading-[1.75] text-[#A4A5A9]">
//             I&apos;m a full-stack developer who cares as much about how
//             something feels to use as how it&apos;s built underneath. Four
//             years in, I&apos;ve shipped 13+ projects across 18 countries —
//             from small business sites to systems that needed to hold up
//             under real load. My approach stays the same at any scale:
//             simple, functional, and built to last.
//           </p>

//           <ul className="mt-8 flex flex-col gap-3">
//             {highlights.map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-3 font-mono text-[13.5px] text-[#F8F8F8]"
//               >
//                 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9EF2C6]">
//                   <Check className="h-3 w-3 text-[#10240F]" strokeWidth={3} />
//                 </span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { highlights, services } from "@/constants/services";

export default function About() {
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
    transition: `opacity 0.5s ease-out ${delayMs}ms, transform 0.5s ease-out ${delayMs}ms`,
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1F2124] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-fade-up] { transition: none !important; }
          .about-float { animation: none !important; }
        }
        @keyframes about-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F8F8F8 1px, transparent 1px), linear-gradient(90deg, #F8F8F8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="about-float pointer-events-none absolute left-[6%] top-1/4 -z-0 h-[300px] w-[300px] rounded-full bg-[#9EF2C6]/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-12">
        <div data-fade-up style={fadeUp(0)} className="flex flex-col justify-center xl:pl-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src="/images/landingpage.jpeg"
                alt="Portrait"
                fill
                sizes="56px"
                className="object-cover zoom-in"
              />
            </div>
            <div>
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#9EF2C6]">
                Introduce
              </span>
              <h2 className="font-mono text-[26px] font-bold leading-[1.1] tracking-tight text-[#F8F8F8] sm:text-[30px]">
                About me
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-[480px] font-mono text-[13px] leading-[1.65] text-[#A4A5A9]">
          Hi! I&apos;m Ruth UWAMAHORO, a passionate Software Developer with over 3 years of experience creating innovative digital solutions. I specialize in full-stack development using modern technologies like React, Next.js, TypeScript, Python, and database.

My journey in tech started with a curiosity about how things work behind the scenes. Today, I&apos;m driven by the challenge of solving complex problems and creating user-friendly applications that make a real impact.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 rounded-full bg-[#2D2F33] py-1.5 pl-1.5 pr-3 font-mono text-[12px] text-[#F8F8F8] ring-1 ring-white/5"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#9EF2C6]">
                  <Check className="h-2.5 w-2.5 text-[#10240F]" strokeWidth={3.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-fade-up
          style={fadeUp(120)}
          className="rounded-2xl bg-[#2D2F33] px-6 py-5 ring-1 ring-white/5 sm:px-8 sm:py-6"
        >
          <div className="divide-y divide-white/10">
            {services.map(({ title, description, href, Icon, project }) => (
              <div
                key={title}
                className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#333438] text-[#9EF2C6] ring-1 ring-white/5 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#9EF2C6] group-hover:text-[#10240F]">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-mono text-[14px] font-bold text-[#F8F8F8]">
                    {title}
                  </h3>
                  <p className="mt-0.5 truncate font-mono text-[12px] leading-[1.4] text-[#A4A5A9]">
                    {description}
                  </p>
                </div>

                <Link
                  href={href}
                  className="flex shrink-0 items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wide text-[#9EF2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EF2C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D2F33]"
                >
                  {project}
                  <ArrowUpRight
                    className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}