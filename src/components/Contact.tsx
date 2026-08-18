"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Twitter,Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ruthuwamahoro250@gmail.com", href: "ruthuwamahoro250@gmail.com" },
  { icon: MapPin, label: "Based in", value: "Kigali, Rwanda", href: undefined },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Wire this up to your API route or form provider of choice.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-[#1F2124] px-4 py-3 font-mono text-[13.5px] text-[#F8F8F8] placeholder:text-[#6C6E72] outline-none transition-colors duration-200 focus:border-[#9EF2C6]/50 focus:ring-2 focus:ring-[#9EF2C6]/20";

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2D2F33] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
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
        className="pointer-events-none absolute right-0 top-0 -z-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/4 rounded-full bg-[#9EF2C6]/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div data-fade-up style={fadeUp(0)} className="flex flex-col justify-center">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9EF2C6]">
            Get in touch
          </span>
          <h2 className="mt-4 font-mono text-[34px] font-bold leading-[1.15] tracking-tight text-[#F8F8F8] sm:text-[40px]">
            Let&apos;s build
            <br />
            something.
          </h2>
          <p className="mt-6 max-w-[440px] font-mono text-[14px] leading-[1.75] text-[#A4A5A9]">
            Have a project in mind or just want to talk shop? My inbox is
            open, and I usually reply within a day or two.
          </p>

          <div className="mt-9 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#333438] text-[#9EF2C6] ring-1 ring-white/5 transition-all duration-300 group-hover:bg-[#9EF2C6] group-hover:text-[#10240F]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-[#A4A5A9]">
                      {label}
                    </p>
                    <p className="font-mono text-[13.5px] text-[#F8F8F8]">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <Link key={label} href={href}>
                  {content}
                </Link>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-9 flex items-center gap-4 border-t border-white/5 pt-7">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333438] text-[#A4A5A9] ring-1 ring-white/5 transition-all duration-200 hover:text-[#9EF2C6] hover:ring-[#9EF2C6]/40"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>

        <div
          data-fade-up
          style={fadeUp(150)}
          className="rounded-2xl bg-[#26282B] p-8 ring-1 ring-white/5 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-[12px] uppercase tracking-wide text-[#A4A5A9]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g: Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-[12px] uppercase tracking-wide text-[#A4A5A9]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g: email@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-[12px] uppercase tracking-wide text-[#A4A5A9]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me a bit about the project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#9EF2C6] px-6 py-3.5 font-mono text-[13px] font-bold uppercase tracking-wide text-[#10240F] transition-all duration-200 hover:bg-[#8be3b6] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              {status !== "submitting" && (
                <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              )}
            </button>

            {status === "sent" && (
              <p className="font-mono text-[12.5px] text-[#9EF2C6]">
                Thanks &mdash; your message is on its way. I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-[12.5px] text-[#F87171]">
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}