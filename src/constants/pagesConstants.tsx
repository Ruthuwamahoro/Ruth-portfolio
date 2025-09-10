import { Skill } from "@/types/skills";
import { Code, Database, Globe, Layers, Palette, Server, Smartphone, Zap } from "lucide-react";

export const projects = [
    {
      id: 1,
      title: "emoHub Platform",
      description: "This Plaform is a comprehensive solution for managing emotional well-being, offering features like journaling, mood tracking, and community support.",
      image: "./images/image4.png",
      tech: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tailwind CSS"],
      status: "Live",
      link: "https://emo-hub.vercel.app/"
    },
    {
      id: 2,
      title: "Women WorkPlace Wellness App",
      description: "This Platform is designed to support women in the workplace, providing resources for mental health, career development, and community engagement.",
      image: "./images/image5.png",
      tech: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tailwind CSS"],
      status: "live",
      link: "http://womenworkplacewellness.com"
    },
    {
      id: 3,
      title: "Camp FeedBack App",
      description: "This project is designed to allow campers provide feedback on the camp, comment, suggestions and interact with organizers",
      image: "./images/image2.png",
      tech: ["Typescript", "Express", "NextJs", "Shadcn Component", "mongoDB"],
      link: "https://github.com/Ruthuwamahoro/Camp-Feedback-App",
      status: "Development"
    }
  ];


  export const experiences = [
    {
      id: 1,
      title: "Mentor",
      company: "DevX Program",
      location: "Kigali, Rwanda",
      period: "Aug 2025",
      duration: "2 weeks",
      type: "Mentorship",
      logo: "👨‍🏫",
      description: "Designed and delivered coding curriculum for advanced high school students, focusing on software development and teamwork.",
      achievements: [
        "Designed and delivered a comprehensive two-week coding curriculum",
        "Provided technical mentorship in programming concepts and project development",
        "Helped students gain confidence in applying their coding skills",
        "Inspired and encouraged young women in technology, promoting inclusion in IT education"
      ],
      technologies: ["Programming Concepts", "Software Development", "Project Management"],
      highlights: [
        { icon: "👩‍💻", text: "Women in Tech Advocate" },
        { icon: "🎯", text: "Curriculum Designer" },
        { icon: "🌟", text: "Student Mentor" }
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer Apprentice",
      company: "SevenX",
      location: "Kigali, Rwanda",
      period: "July 2024 - Oct 2024",
      duration: "4 months",
      type: "Apprenticeship",
      logo: "💻",
      description: "Developed comprehensive management systems and contributed to health platform development using modern web technologies.",
      achievements: [
        "Developed a People and Group Management System enhancing organizational efficiency",
        "Contributed to Health Connect's Platform Development improving user engagement",
        "Collaborated with cross-functional teams on comprehensive system design",
        "Gained proficiency in both frontend and backend development"
      ],
      technologies: ["Next.js", "TypeScript", "Drizzle", "Shadcn"],
      highlights: [
        { icon: "🏥", text: "Health Tech" },
        { icon: "👥", text: "Team Collaboration" },
        { icon: "⚡", text: "Full-Stack" }
      ]
    },
    {
      id: 3,
      title: "Full-Stack Developer Intern",
      company: "Tost Group",
      location: "Kigali, Rwanda",
      period: "Jan 2024 - April 2024",
      duration: "4 months",
      type: "Internship",
      logo: "🚀",
      description: "Focused on backend development and API design for scalable web applications.",
      achievements: [
        "Built and optimized server-side logic using Node.js and Express.js",
        "Developed and integrated RESTful APIs for seamless frontend-backend communication",
        "Implemented security measures and optimized database interactions",
        "Delivered scalable and high-performing web applications"
      ],
      technologies: ["Node.js", "Express.js", "JavaScript", "RESTful APIs"],
      highlights: [
        { icon: "🔧", text: "Backend Focus" },
        { icon: "🔗", text: "API Expert" },
        { icon: "⚡", text: "Performance Optimizer" }
      ]
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Andela Technical Leadership Program (ATLP)",
      location: "Kigali, Rwanda",
      period: "Jan 2024 - Sept 2024",
      duration: "9 months",
      type: "Training Program",
      logo: "🎓",
      description: "Comprehensive software development training with focus on full-stack development and Agile methodologies.",
      achievements: [
        "Engineered and maintained RESTful APIs using Node.js, Express, and MongoDB",
        "Created comprehensive API documentation using Swagger",
        "Acted as Scrum Master organizing Agile ceremonies and driving team productivity",
        "Developed dynamic frontend applications using Next.js, React, and TypeScript"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Next.js", "React", "TypeScript", "Redux Toolkit", "Swagger", "Storybook"],
      highlights: [
        { icon: "👑", text: "Scrum Master" },
        { icon: "📚", text: "API Documentation" },
        { icon: "🔄", text: "Agile Expert" }
      ]
    },
    {
      id: 5,
      title: "Junior Software Developer Intern",
      company: "Aosis Infobytes",
      location: "Remote, India",
      period: "June 2023 - July 2023",
      duration: "2 months",
      type: "Internship",
      logo: "🌐",
      description: "Contributed to software product development and gained experience in code reviews and custom feature development.",
      achievements: [
        "Contributed to successful launch of a new software product",
        "Participated in code reviews ensuring adherence to established guidelines",
        "Developed custom features for existing applications",
        "Tailored solutions to meet specific client needs"
      ],
      technologies: ["Software Development", "Code Review", "Custom Features"],
      highlights: [
        { icon: "🚀", text: "Product Launch" },
        { icon: "🔍", text: "Code Review" },
        { icon: "🛠️", text: "Custom Solutions" }
      ]
    },
    {
      id: 6,
      title: "IT Support Specialist",
      company: "H.Gavin Company",
      location: "Kigali, Rwanda",
      period: "June 2020 - April 2021",
      duration: "11 months",
      type: "Full-time",
      logo: "🔧",
      description: "Provided comprehensive IT support and established efficient helpdesk systems to minimize downtime.",
      achievements: [
        "Coordinated with IT support teams to resolve systems-related issues",
        "Minimized downtime and disruptions for end users",
        "Established centralized helpdesk system for user requests",
        "Streamlined IT support processes improving efficiency"
      ],
      technologies: ["IT Support", "Helpdesk Systems", "System Troubleshooting"],
      highlights: [
        { icon: "🛠️", text: "System Optimizer" },
        { icon: "📞", text: "Helpdesk Expert" },
        { icon: "⚡", text: "Downtime Reducer" }
      ]
    }
  ];






export const skillsData = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: 95,
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    description: "Building dynamic user interfaces with React hooks and components"
  },
  {
    id: 2,
    name: "TypeScript",
    category: "Language",
    level: 90,
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-600 to-blue-800",
    description: "Strongly typed JavaScript for better code quality and development experience"
  },
  {
    id: 3,
    name: "Node.js",
    category: "Backend",
    level: 88,
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    description: "Server-side JavaScript runtime for scalable backend applications"
  },
  {
    id: 4,
    name: "Next.js",
    category: "Frontend",
    level: 92,
    icon: <Globe className="w-6 h-6" />,
    color: "from-gray-700 to-gray-900",
    description: "Full-stack React framework for production-ready applications"
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Database",
    level: 85,
    icon: <Database className="w-6 h-6" />,
    color: "from-green-600 to-green-800",
    description: "NoSQL database for flexible and scalable data storage"
  },
  {
    id: 6,
    name: "React Native",
    category: "Mobile",
    level: 80,
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    description: "Cross-platform mobile development using React"
  },
  {
    id: 7,
    name: "Tailwind CSS",
    category: "Styling",
    level: 93,
    icon: <Palette className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-500",
    description: "Utility-first CSS framework for rapid UI development"
  },
  {
    id: 8,
    name: "Express",
    category: "Database",
    level: 82,
    icon: <Layers className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 9,
    name: "Python",
    category: "Language",
    level: 78,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-pink-500",
    description: "Cloud computing services for scalable applications"
  },
  {
    id: 10,
    name: "Java",
    category: "Language",
    level: 78,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-green-500",
    description: "Cloud computing services for scalable applications"
  },
  {
    id: 11,
    name: "SpringBoot",
    category: "Backend",
    level: 78,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-purple-500",
    description: "Cloud computing services for scalable applications"
  },
  {
    id: 12,
    name: "MongoDB",
    category: "Database",
    level: 78,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-emerald-500",
    description: "Cloud computing services for scalable applications"
  },
  {
    id: 13,
    name: "Django",
    category: "Backend",
    level: 78,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-gray-500",
    description: "Cloud computing services for scalable applications"
  }
];




export const skills: Skill[] = [
    {
      name: "Next.js",
      level: 95,
      icon: <div className="text-black font-bold text-lg">N</div>,
      category: "Frontend",
      color: "from-gray-800 to-black",
      description: "Full-stack React framework"
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <div className="text-blue-600 font-bold text-lg">TS</div>,
      category: "Language",
      color: "from-blue-600 to-blue-800",
      description: "Type-safe JavaScript"
    },
    {
      name: "React",
      level: 92,
      icon: <div className="text-cyan-400 font-bold text-lg">⚛️</div>,
      category: "Frontend",
      color: "from-cyan-400 to-blue-500",
      description: "Modern UI library"
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <div className="text-teal-400 font-bold text-lg">🎨</div>,
      category: "Styling",
      color: "from-teal-400 to-green-500",
      description: "Utility-first CSS framework"
    },
    {
      name: "Node.js",
      level: 85,
      icon: <div className="text-green-500 font-bold text-lg">📗</div>,
      category: "Backend",
      color: "from-green-500 to-emerald-600",
      description: "Server-side JavaScript"
    },
    {
      name: "React Native",
      level: 82,
      icon: <div className="text-purple-500 font-bold text-lg">📱</div>,
      category: "Mobile",
      color: "from-purple-500 to-pink-500",
      description: "Cross-platform mobile apps"
    },
    {
      name: "GraphQL",
      level: 78,
      icon: <div className="text-pink-500 font-bold text-lg">🚀</div>,
      category: "API",
      color: "from-pink-500 to-rose-500",
      description: "Query language for APIs"
    },
    {
      name: "MongoDB",
      level: 80,
      icon: <div className="text-emerald-500 font-bold text-lg">🍃</div>,
      category: "Database",
      color: "from-emerald-500 to-teal-600",
      description: "NoSQL database"
    },
    {
      name: "Python",
      level: 87,
      icon: <div className="text-yellow-500 font-bold text-lg">🐍</div>,
      category: "Language",
      color: "from-yellow-500 to-orange-500",
      description: "Versatile programming language"
    }
  ];