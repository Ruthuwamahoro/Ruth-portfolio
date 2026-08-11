export type SkillGroup = {
    key: string;
    label: string;
    skills: string[];
  };
  
export const skillGroups: SkillGroup[] = [
    {
      key: "frontend",
      label: "frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Tanstack Query"]
    },
    {
      key: "backend",
      label: "backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "Django", "Java", "Spring Boot"],
    },
    {
      key: "database",
      label: "database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma","MySQL"],
    },
    {
      key: "devops",
      label: "devops",
      skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git", "Github"],
    },
  ];