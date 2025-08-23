import { Skill } from "@/types/skills";

export const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration",
      image: "./images/image4.png",
      tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      status: "Live"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop functionality",
      image: "./images/image5.png",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      status: "Development"
    },
    {
      id: 3,
      title: "AI Chat Bot",
      description: "Intelligent chatbot using OpenAI API with context awareness",
      image: "./images/image2.jpeg",
      tech: ["Python", "FastAPI", "OpenAI", "Redis"],
      status: "Live"
    }
  ];


export const experiences = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "TechCorp Solutions",
      location: "Kigali, Rwanda",
      period: "2022 - Present",
      duration: "2+ years",
      type: "Full-time",
      logo: "🚀",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Led a team of 5 developers in building a enterprise-level e-commerce platform",
        "Reduced application load time by 60% through code optimization and caching strategies",
        "Implemented CI/CD pipelines that improved deployment efficiency by 80%",
        "Mentored 8 junior developers, with 6 receiving promotions during my tenure"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      highlights: [
        { icon: "👥", text: "Team Lead" },
        { icon: "🏆", text: "Best Employee 2023" },
        { icon: "📈", text: "40% Revenue Growth" }
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateHub",
      location: "Kigali, Rwanda",
      period: "2020 - 2022",
      duration: "2 years",
      type: "Full-time",
      logo: "💻",
      description: "Developed and maintained multiple web applications using modern technologies.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Integrated payment systems (Stripe, PayPal) for 10+ client projects",
        "Collaborated with UI/UX team to improve user experience, increasing user retention by 35%",
        "Optimized database queries, reducing response time by 45%"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Python", "Docker"],
      highlights: [
        { icon: "🎯", text: "15+ Projects" },
        { icon: "⚡", text: "Performance Expert" },
        { icon: "🤝", text: "Client Favorite" }
      ]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Creators",
      location: "Kigali, Rwanda", 
      period: "2019 - 2020",
      duration: "1 year",
      type: "Full-time",
      logo: "🎨",
      description: "Specialized in creating beautiful, responsive user interfaces and user experiences.",
      achievements: [
        "Converted 20+ Figma designs into pixel-perfect React components",
        "Improved website accessibility scores from 65% to 95% across all projects",
        "Reduced bounce rate by 30% through better UI/UX implementation",
        "Created reusable component library used across 8+ projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "SASS", "Bootstrap"],
      highlights: [
        { icon: "🎨", text: "UI/UX Expert" },
        { icon: "📱", text: "Mobile First" },
        { icon: "♿", text: "A11y Champion" }
      ]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "StartupLab",
      location: "Kigali, Rwanda",
      period: "2018 - 2019",
      duration: "1 year",
      type: "Full-time",
      logo: "🌱",
      description: "Started my journey in web development, learning and contributing to various projects.",
      achievements: [
        "Successfully completed 25+ small to medium web projects",
        "Learned and implemented 5+ new technologies during first year",
        "Contributed to open-source projects with 100+ GitHub commits",
        "Received 'Rising Star' award for exceptional learning curve"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      highlights: [
        { icon: "🌟", text: "Rising Star" },
        { icon: "📚", text: "Fast Learner" },
        { icon: "💪", text: "Growth Mindset" }
      ]
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