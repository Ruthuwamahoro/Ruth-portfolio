export type SkillGroup = {
    key: string;
    label: string;
    skills: string[];
  };
  
export const skillGroups: SkillGroup[] = [
    {
      key: "frontend",
      label: "frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      key: "backend",
      label: "backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
    },
    {
      key: "database",
      label: "database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      key: "devops",
      label: "devops",
      skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git"],
    },
  ];