import React, { useState, useEffect } from 'react';
import { skillsData } from '@/constants/pagesConstants';



const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Language", "Styling", "API"];

interface SkillsProps {
  isDark?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark = true }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    // Reset animations when category changes
    setAnimatedSkills(new Set());
    
    // Trigger animations with staggered delays
    const timeouts = filteredSkills.map((skill, index) => 
      setTimeout(() => {
        setAnimatedSkills(prev => new Set(prev).add(skill.id));
      }, index * 150 + 300)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [selectedCategory]);

  const SkillCard: React.FC<{ skill: typeof skillsData[0]; index: number }> = ({ skill, index }) => {
    const isAnimated = animatedSkills.has(skill.id);
    
    return (
      <div 
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
          isDark 
            ? 'from-gray-800/80 to-gray-900/80 border-gray-600/30' 
            : 'from-white to-gray-50/80 border-gray-200/50'
        } border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Animated border */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          <div className={`absolute inset-[1px] rounded-2xl ${
            isDark ? 'bg-gray-800/95' : 'bg-white/95'
          }`} />
        </div>
        
        <div className="relative p-6">
          {/* Icon and Category */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDark 
                ? 'bg-gray-700/80 text-gray-200 border border-gray-600/30' 
                : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
            }`}>
              {skill.category}
            </span>
          </div>

          {/* Skill Name */}
          <h3 className={`text-xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${skill.color} transition-all duration-300`}>
            {skill.name}
          </h3>



          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Proficiency
              </span>
              <span className={`text-sm font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.level}%
              </span>
            </div>
            
            <div className={`w-full h-3 rounded-full ${
              isDark ? 'bg-gray-700/60' : 'bg-gray-200/60'
            } overflow-hidden shadow-inner`}>
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: isAnimated ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 400}ms`
                }}
              />
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl"
               style={{ background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` }} />
        </div>

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute top-1/2 left-1/2 w-0 h-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-full group-hover:w-96 group-hover:h-96 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out`} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className=" mb-12">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
          <div className={`w-24 h-1  bg-gradient-to-r text-left mt-7 ${
          isDark ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-purple-500'
        }`} />
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl `}>
          A comprehensive overview of my technical skills and proficiency levels across various technologies
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-left gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-full overflow-hidden group ${
              selectedCategory === category
                ? 'text-white shadow-lg scale-105'
                : isDark 
                  ? 'text-gray-400 hover:text-white hover:scale-102 bg-gray-800/50 hover:bg-gray-700/50'
                  : 'text-gray-600 hover:text-gray-900 hover:scale-102 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {selectedCategory === category && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            )}
            <span className="relative z-10">{category}</span>
            
            {/* Hover effect for non-selected buttons */}
            {selectedCategory !== category && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <SkillCard 
              key={`${skill.id}-${selectedCategory}`} 
              skill={skill} 
              index={index}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center py-20">
            <div className="text-center">
              <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                🔍
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No skills found
              </h3>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                No skills available in the &quot;{selectedCategory}&quot; category yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;