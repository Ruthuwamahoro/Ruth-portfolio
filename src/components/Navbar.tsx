"use client";

import { Mail, Github, Twitter, ChevronLeft, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Notes", href: "#notes" },
  { label: "Contacts", href: "#contacts" },
];

export function Navbar() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-6 px-26 mx-auto max-w-[1450px]">
        {/* Logo */}
        <a href="/" className="font-mono text-lg tracking-tight">
          <span className="font-bold text-foreground">Ruth</span>{" "}
          <span className="font-normal text-muted-foreground">UWAMAHORO</span>
        </a>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a
            href="#services"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80 text-[#9EF2C6]"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Services
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/90 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-foreground/90 transition-colors hover:text-primary"
          >
            <Twitter className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Ruthuwamahoro"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-foreground/90 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            Github
          </a>
          <a
            href="mailto:ruthuwamahoro250@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary/10"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}