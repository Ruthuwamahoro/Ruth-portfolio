import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
  color: string;
  description: string;
}

const skills: Skill[] = [
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

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Language", "Styling", "API"];

interface SkillsProps {
  isDark?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark = true }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);


  // Pentagon formation positions - arranged to form a large pentagon
  const getPentagonPosition = (index: number) => {
    const positions = [
      // Top pentagon (center)
      { x: 50, y: 15, scale: 1.1 },
      // Second row (2 pentagons)
      { x: 25, y: 35, scale: 1 },
      { x: 75, y: 35, scale: 1 },
      // Third row (3 pentagons)
      { x: 12, y: 58, scale: 0.9 },
      { x: 50, y: 58, scale: 1 },
      { x: 88, y: 58, scale: 0.9 },
      // Fourth row (3 pentagons)
      { x: 20, y: 78, scale: 0.85 },
      { x: 50, y: 85, scale: 0.9 },
      { x: 80, y: 78, scale: 0.85 }
    ];
    return positions[index] || { x: 50, y: 50, scale: 1 };
  };

  const PentagonSkill: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setProgress(skill.level);
      }, index * 150 + 500);

      return () => clearTimeout(timer);
    }, [skill.level, index, selectedCategory]);

    const pentagonPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    const position = getPentagonPosition(index);
    const isHovered = hoveredSkill === skill.name;
    const baseSize = 140;
    const size = baseSize * position.scale;
    
    return (
      <div 
        className={`absolute cursor-pointer transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        style={{ 
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`,
          transitionDelay: `${index * 100}ms`,
          zIndex: isHovered ? 50 : 10
        }}
      >
        {/* Pentagon container */}
        <div 
          className="relative mx-auto"
          style={{ 
            width: `${size}px`,
            height: `${size}px`,
            clipPath: pentagonPath,
            background: `linear-gradient(135deg, ${skill.color.split(' ')[1]} 0%, ${skill.color.split(' ')[3]} 100%)`,
            filter: isHovered ? 'brightness(1.15)' : 'brightness(1)',
            transition: 'all 0.4s ease'
          }}
        >
          {/* Inner pentagon with glass effect */}
          <div 
            className="absolute inset-2 bg-black/30 backdrop-blur-sm"
            style={{ clipPath: pentagonPath }}
          >
            <div 
              className="absolute inset-1 bg-white/15 backdrop-blur-md"
              style={{ clipPath: pentagonPath }}
            />
          </div>

          {/* Glowing border effect on hover */}
          {isHovered && (
            <div 
              className={`absolute -inset-2 bg-gradient-to-r ${skill.color} opacity-60 animate-pulse`}
              style={{ clipPath: pentagonPath }}
            />
          )}

          {/* Content container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 z-10">
            {/* Colored Icon */}
            <div className={`mb-2 p-2 rounded-full bg-white/25 backdrop-blur-sm transition-all duration-300 ${
              isHovered ? 'scale-125 bg-white/35' : 'scale-100'
            }`}>
              {skill.icon}
            </div>

            {/* Skill name */}
            <h3 className={`font-bold text-white mb-2 leading-tight ${
              size > 120 ? 'text-sm' : 'text-xs'
            }`}>
              {skill.name}
            </h3>

            {/* Progress circle */}
            <div className={`relative mb-2 ${size > 120 ? 'w-10 h-10' : 'w-8 h-8'}`}>
              <svg className={`transform -rotate-90 ${size > 120 ? 'w-10 h-10' : 'w-8 h-8'}`} viewBox="0 0 36 36">
                <circle 
                  cx="18" 
                  cy="18" 
                  r="15" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="2"
                />
                <circle 
                  cx="18" 
                  cy="18" 
                  r="15" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 15}`}
                  strokeDashoffset={`${2 * Math.PI * 15 * (1 - progress / 100)}`}
                  style={{
                    transition: 'stroke-dashoffset 1.2s ease-out',
                    transitionDelay: `${index * 150 + 800}ms`
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`font-bold text-white ${
                  size > 120 ? 'text-xs' : 'text-xxs'
                }`} style={{ fontSize: size > 120 ? '10px' : '8px' }}>
                  {progress}%
                </span>
              </div>
            </div>

            {/* Category tag */}
            <div className={`px-2 py-1 bg-white/25 rounded-full text-white/95 font-medium ${
              size > 120 ? 'text-xs' : 'text-xxs'
            }`} style={{ fontSize: size > 120 ? '10px' : '8px' }}>
              {skill.category}
            </div>
          </div>

          {/* Hover description overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-sm transition-all duration-400 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} style={{ clipPath: pentagonPath }}>
            <div className="text-center p-3">
              <h4 className="text-white font-bold mb-1 text-xs">{skill.name}</h4>
              <p className="text-white/90 text-xs leading-relaxed">{skill.description}</p>
            </div>
          </div>
        </div>

        {/* Enhanced shadow effect */}
        <div 
          className={`absolute top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${skill.color} transition-all duration-400 blur-xl ${
            isHovered ? 'opacity-40 scale-110' : 'opacity-15 scale-100'
          }`}
          style={{ 
            width: `${size}px`,
            height: `${size}px`,
            clipPath: pentagonPath, 
            zIndex: -1 
          }}
        />
      </div>
    );
  };

  return (
    <div >
      <div className="mmax-w-6xl mx-auto">


        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-2 font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white scale-105'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:scale-102'
                    : 'text-gray-600 hover:text-gray-900 hover:scale-102'
              }`}
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #06b6d4, #8b5cf6)' 
                  : isDark 
                    ? 'rgba(255,255,255,0.1)' 
                    : 'rgba(0,0,0,0.1)',
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                backdropFilter: 'blur(10px)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pentagon formation container */}
        <div className="relative w-full max-w-4xl mx-auto" style={{ height: '600px' }}>
          {/* Background pentagon outline */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              clipPath: "polygon(50% 5%, 95% 35%, 80% 90%, 20% 90%, 5% 35%)",
              background: `linear-gradient(135deg, ${
                isDark ? 'rgba(147, 51, 234, 0.3) 0%, rgba(219, 39, 119, 0.3) 100%' : 'rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%'
              })`,
              border: `2px solid ${isDark ? 'rgba(147, 51, 234, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
              borderRadius: '20px'
            }}
          />
          
          {/* Individual pentagon skills */}
          {filteredSkills.map((skill, index) => (
            <PentagonSkill key={`${skill.name}-${selectedCategory}`} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;