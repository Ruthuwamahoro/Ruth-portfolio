import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink, TrendingUp } from 'lucide-react';
import { experiences } from '@/constants/pagesConstants';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience = ({ isDark = true }: ExperienceProps) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 py-8 my-24 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900/95 via-purple-800/90 to-purple-900/95 border border-gray-700/50' 
        : 'bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 border border-gray-200/50 shadow-2xl shadow-blue-500/10'
    } backdrop-blur-sm rounded-3xl`}>

      {/* Header */}
      <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
          isDark ? 'from-purple-400 via-pink-400 to-cyan-400' : 'from-blue-600 via-purple-600 to-pink-600'
        } bg-clip-text text-transparent`}>
          Professional Journey
        </h2>
        <div className={`w-24 h-1 mx-auto bg-gradient-to-r ${
          isDark ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-purple-500'
        }`} />
        <p className={`mt-4 text-lg ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        } max-w-2xl mx-auto leading-relaxed`}>
          A timeline of my growth and achievements in the world of software development
        </p>
      </div>

      <div className="relative">
        <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full rounded-full ${
          isDark 
            ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500' 
            : 'bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600'
        } shadow-lg`} />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex items-center mb-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-0.5 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-900 border-purple-500 shadow-xl shadow-purple-500/50' 
                : 'bg-white border-blue-600 shadow-xl shadow-blue-600/30'
            } z-10 hover:scale-110`} />

            <div className={`ml-10 md:ml-0 w-full ${
              index % 2 === 0 
                ? 'md:pr-12 md:text-left md:w-1/2' 
                : 'md:pl-12 md:ml-auto md:text-left md:w-1/2'
            }`}>
              <div className={`group transition-all duration-500 cursor-pointer rounded-2xl p-6 backdrop-blur-sm hover:scale-105`} onClick={() => toggleExpanded(exp.id)}>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="mr-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          isDark
                            ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30'
                            : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50'
                        }`}>
                          {exp.logo}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        } mb-1`}>
                          {exp.title}
                        </h3>
                        <div className={`flex items-center space-x-2 ${
                          isDark ? 'text-purple-400' : 'text-blue-600'
                        } font-semibold hover:underline`}>
                          <span>{exp.company}</span>
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-3 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } mb-4`}>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                          : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <button className={`p-2 rounded-full transition-all duration-200 ${
                    isDark 
                      ? 'hover:bg-gray-700/50 text-gray-400 hover:text-purple-300' 
                      : 'hover:bg-gray-100/80 text-gray-600 hover:text-blue-600'
                  }`}>
                    {expandedItem === exp.id ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </button>
                </div>

                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } mb-4 leading-relaxed`}>
                  {exp.description}
                </p>

=                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 border border-blue-200/50'
                    }`}>
                      <span className="mr-1">{highlight.icon}</span>
                      {highlight.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={`px-3 py-1 text-xs rounded-full font-medium ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-300 border border-gray-600/30' 
                        : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-400 border border-gray-600/30' 
                        : 'bg-gray-100/80 text-gray-600 border border-gray-200/50'
                    }`}>
                      +{exp.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {expandedItem === exp.id && (
                  <div className={`mt-6 pt-6 border-t ${
                    isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                  } animate-fade-in`}>
                    <h4 className={`font-bold text-lg mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      🏆 Key Achievements
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <div className="flex items-start w-full">
                            <TrendingUp size={16} className={`mr-3 mt-0.5 flex-shrink-0 ${
                              isDark ? 'text-green-400' : 'text-green-600'
                            }`} />
                            <span className="flex-1 leading-relaxed">{achievement}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h4 className={`font-bold text-lg mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        🛠️ Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className={`px-3 py-2 text-sm rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                            isDark 
                              ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 border border-purple-500/30 hover:border-purple-400' 
                              : 'bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700 border border-blue-200/50 hover:border-blue-300'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        @media (max-width: 768px) {
          .md\\:left-1\\/2 {
            left: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;