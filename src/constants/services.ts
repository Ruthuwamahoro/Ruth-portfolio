import { Code2, PenTool, Rocket, Server } from "lucide-react";

export type Service = {
    title: string;
    description: string;
    href: string;
    project: number;
    Icon: typeof Code2;
};
  
export const services: Service[] = [
    {
      title: "Frontend Development",
      description:
        "I build fast, accessible interfaces with React, Next.js, and TypeScript",
      href: "/services/frontend",
      project: 3,
      Icon: Code2,
    },
    {
      title: "Backend Development",
      description:
        "APIs, databases, and infrastructure that hold up under real traffic.",
      href: "/services/backend",
       project: 2,
      Icon: Server,
    },
    {
      title: "UI/UX Design",
      description:
        "Interfaces should explain themselves. I design with a clear visual hierarchy.",
      href: "/services/design",
      project: 4,
      Icon: PenTool,
    },
    {
      title: "DevOps & Deployment",
      description:
        "CI/CD, containers, and cloud infrastructure set up so shipping is routine, not risky.",
      href: "/services/devops",
      project: 1,
      Icon: Rocket,
    },
  ];
  
export const highlights = [
    "Clean, maintainable code",
    "Responsive on every screen",
    "Delivered on schedule",
  ];