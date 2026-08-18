export type SkillGroup = {
    key: string;
    label: string;
    skills: string[];
  };
  
export const skillGroups: SkillGroup[] = [
    {
      key: "Languages",
      label: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
      key: "frontend",
      label: "frontend",
      skills: ["React", "Next.js","BootStrap", "Tailwind CSS", "Redux", "Tanstack Query"]
    },
    {
      key: "backend",
      label: "backend",
      skills: ["Node.js", "Express", "REST APIs","Django","Spring Boot"],
    },
    {
      key: "database",
      label: "database",
      skills: ["PostgreSQL", "MongoDB","MySQL"],
    },
    {
      key: "DevOps",
      label: "devops",
      skills: ["Docker", "AWS", "CI/CD", "Linux", "GitHub Actions"],
    },
    {
      key: "Tools",
      label: "Tools",
      skills: ["Git", "GitHub", "Jira", "Figma", "Postman","Trello"],
    }
  ];