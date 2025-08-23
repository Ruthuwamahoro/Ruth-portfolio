"use client";
import React, { useState, useEffect } from 'react';
import { Download, Eye, Sun, Moon, User, FolderOpen, Mail, Home } from 'lucide-react';
import Skills from './Skills';
import Experience from './Experience';
import { projects } from '@/constants/pagesConstants';
import Link from 'next/link';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigateToPage = (page: string) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setNextPage(page);
    
    // Smooth transition timing
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setIsTransitioning(false);
        setNextPage('');
      }, 50);
    }, 400);
  };

  const themeClasses = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
        isDark 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
      } shadow-lg`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );

  const HomePage = () => (
    <div className={`min-h-screen ${themeClasses} relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${isDark ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-blue-400 to-purple-400'}`}></div>
          
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-gray-600'} opacity-30`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            
            <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-gray-900 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  } animate-pulse`}>
                    Available for work
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block">Hey, I&apos;m</span>
                  <span className={`block bg-gradient-to-r ${
                    isDark 
                      ? 'from-purple-400 via-pink-400 to-cyan-400' 
                      : 'from-blue-600 via-purple-600 to-pink-600'
                  } bg-clip-text text-transparent animate-pulse`}>
                    Ruth 👋
                  </span>
                  <span className="block text-3xl lg:text-4xl mt-2 font-medium opacity-80">
                    Full Stack Software Developer
                  </span>
                </h1>

                {/* Mobile Image - Between Title and Description */}
                <div className="lg:hidden flex justify-center mb-8">
                  <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    {/* Decorative rings */}
                    <div className="absolute -inset-4">
                      <div className={`w-full h-full rounded-full border-2 opacity-30 animate-spin ${
                        isDark ? 'border-purple-500' : 'border-blue-500'
                      }`} style={{animationDuration: '20s'}}></div>
                    </div>
                    <div className="absolute -inset-8">
                      <div className={`w-full h-full rounded-full border border-dashed opacity-20 animate-spin ${
                        isDark ? 'border-pink-500' : 'border-purple-500'
                      }`} style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                    </div>

                    {/* Main Image Container */}
                    <div className="relative group">
                      <div className={`w-64 h-64 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 ${
                        isDark 
                          ? 'shadow-2xl shadow-purple-500/20 border-4 border-gray-700' 
                          : 'shadow-2xl shadow-blue-500/20 border-4 border-white'
                      }`}>
                        
                        {/* Profile Image */}
                        <div className="w-full h-full relative overflow-hidden py-10">
                          <img 
                            src="/images/my-image.jpeg" 
                            alt="Ruth - Senior Software Developer" 
                            className="w-full h-full object-cover object-center scale-110"
                          />
                        </div>
                        
                        {/* Hover overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-t from-purple-900/50 to-transparent' 
                            : 'bg-gradient-to-t from-blue-900/30 to-transparent'
                        }`}></div>
                      </div>

                      <div className="absolute -bottom-4 -left-4 animate-bounce" style={{animationDelay: '2s'}}>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-gray-600 text-white' 
                            : 'bg-gray-500 text-white'
                        } shadow-lg`}>
                          3+ Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xl mb-8 leading-relaxed max-w-2xl ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Passionate full-stack developer with expertise in modern web technologies. 
                  I craft scalable, user-centric applications that solve real-world problems 
                  with clean, efficient code.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button 
                    onClick={() => navigateToPage('projects')}
                    className={`group flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isDark 
                        ? 'bg-gray-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25'
                    }`}
                  >
                    <Eye className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                    View Projects
                  </button>
                  
                  <button className={`group flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                    isDark 
                      ? 'border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10' 
                      : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}>
                    <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
                    <Link href="/files/Ruth-UWAMAHORO_RESUME.pdf" target="_blank" className="flex items-center">
                      View Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side - Right - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
              <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Decorative rings */}
                <div className="absolute -inset-4">
                  <div className={`w-full h-full rounded-full border-2 opacity-30 animate-spin ${
                    isDark ? 'border-purple-500' : 'border-blue-500'
                  }`} style={{animationDuration: '20s'}}></div>
                </div>
                <div className="absolute -inset-8">
                  <div className={`w-full h-full rounded-full border border-dashed opacity-20 animate-spin ${
                    isDark ? 'border-pink-500' : 'border-purple-500'
                  }`} style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                </div>

                {/* Main Image Container */}
                <div className="relative group">
                  <div className={`w-80 h-80 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 ${
                    isDark 
                      ? 'shadow-2xl shadow-purple-500/20 border-4 border-gray-700' 
                      : 'shadow-2xl shadow-blue-500/20 border-4 border-white'
                  }`}>
                    
                    {/* Profile Image */}
                    <div className="w-full h-full relative overflow-hidden">
                      <img 
                        src="/images/my-image.jpeg" 
                        alt="Ruth - Senior Software Developer" 
                        className="w-full h-full object-cover object-center scale-110"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-t from-purple-900/50 to-transparent' 
                        : 'bg-gradient-to-t from-blue-900/30 to-transparent'
                    }`}></div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 animate-bounce" style={{animationDelay: '2s'}}>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-500 text-white'
                    } shadow-lg`}>
                      3+ Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );

  const AboutPage = () => (
    <div className={`min-h-screen ${themeClasses} px-6 py-20`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className={`text-5xl font-bold mb-8 text-left bg-gradient-to-r ${
            isDark ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            About Me
          </h1>
          <div className='w-44 h-1 bg-gradient-to-r from-purple-500 to-pink-500'></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-full h-96 rounded-2xl overflow-hidden ${
                isDark ? 'shadow-2xl shadow-purple-500/20' : 'shadow-2xl shadow-blue-500/20'
              }`}>
                <img 
                  src="/images/image3.jpeg" 
                  alt="Ruth - About"
                  className=" object-cover object-center h-[500px] w-[700px]"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Hi! I&apos;m Ruth UWAMAHORO, a passionate  Software Developer with over 3 years of experience 
                creating innovative digital solutions. I specialize in full-stack development using 
                modern technologies like React, Next.js, TypeScript, Python, and database.
              </p>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey in tech started with a curiosity about how things work behind the scenes. 
                Today, I&apos;m driven by the challenge of solving complex problems and creating 
                user-friendly applications that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Projects', value: '10+' },
                  { label: 'Technologies', value: '10+' },
                  { label: 'Satisfaction', value: '99%' }
                ].map((stat) => (
                  <div key={stat.label} className={`p-4 rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
                  } text-center`}>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${
                      isDark ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-purple-600'
                    } bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Experience isDark={isDark} />
        <Skills />
        </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className={`min-h-screen ${themeClasses} px-6 py-20`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className={`text-5xl font-bold mb-8 text-left bg-gradient-to-r ${
            isDark ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            My Projects
          </h1>
          <div className='w-44 h-2 bg-gradient-to-r from-purple-500 to-pink-500'></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 text-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isDark 
                          ? 'bg-purple-600/20 text-purple-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? isDark 
                        ? 'bg-green-600/20 text-green-300' 
                        : 'bg-green-100 text-green-700'
                      : isDark 
                        ? 'bg-yellow-600/20 text-yellow-300' 
                        : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                  
                  <button className={`text-sm font-medium ${
                    isDark 
                      ? 'text-purple-400 hover:text-purple-300' 
                      : 'text-blue-600 hover:text-blue-700'
                  } transition-colors`}>
                    <Link href={project.link ?? '#'}>visit link →</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className={`min-h-screen ${themeClasses} px-6 py-20`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className={`text-5xl font-bold mb-8  bg-gradient-to-r ${
            isDark ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Get In Touch
          </h1>
          <div className='w-44 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-10'></div>

          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let&apos;s work together!
              </h2>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'ruthuwamahoro250@gmail.com', icon: '📧' },
                  { label: 'Location', value: 'Kigali, Rwanda', icon: '📍' },
                  { label: 'Phone', value: '+250 785557397', icon: '📱' }
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center space-x-4">
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {contact.label}
                      </div>
                      <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg border border-gray-200'
            }`}>
              <form className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-purple-500' : 'focus:ring-blue-500'
                    }`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-purple-500' : 'focus:ring-blue-500'
                    }`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      isDark ? 'focus:ring-purple-500' : 'focus:ring-blue-500'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-gray-600 hover:from-purple-700 hover:to-gray-700 text-white' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="relative">
      <ThemeToggle />
      
      {/* Page Container with Smooth Transitions */}
      <div className="relative overflow-hidden">
        {/* Current Page */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? 'transform -translate-x-full opacity-0 scale-95' 
              : 'transform translate-x-0 opacity-100 scale-100'
          }`}
        >
          {renderCurrentPage()}
        </div>

        {/* Next Page (sliding in from right) */}
        {isTransitioning && nextPage && (
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isTransitioning 
                ? 'transform translate-x-0 opacity-100 scale-100' 
                : 'transform translate-x-full opacity-0 scale-95'
            }`}
          >
            {(() => {
              switch(nextPage) {
                case 'home': return <HomePage />;
                case 'about': return <AboutPage />;
                case 'projects': return <ProjectsPage />;
                case 'contact': return <ContactPage />;
                default: return <HomePage />;
              }
            })()}
          </div>
        )}

        {/* Transition Overlay */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-300 ${
            isTransitioning 
              ? 'bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-100' 
              : 'opacity-0'
          }`} 
        />
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
          isDark ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
        } backdrop-blur-sm shadow-lg transition-all duration-300`}>
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'about', label: 'About', icon: User },
            { id: 'projects', label: 'Projects', icon: FolderOpen },
            { id: 'contact', label: 'Contact', icon: Mail }
          ].map((page) => (
            <button
              key={page.id}
              onClick={() => navigateToPage(page.id)}
              className={`p-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                currentPage === page.id
                  ? isDark 
                    ? 'bg-purple-600 text-white shadow-lg scale-110' 
                    : 'bg-blue-600 text-white shadow-lg scale-110'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700 hover:scale-105' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:scale-105'
              } ${isTransitioning ? 'pointer-events-none' : ''} group`}
              disabled={isTransitioning}
            >
              {/* Ripple effect */}
              {currentPage === page.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-ping" />
              )}
              
              <page.icon size={20} className={`relative z-10 transition-transform duration-200 ${
                currentPage === page.id ? 'scale-110' : 'group-hover:scale-105'
              }`} />
              
              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none ${
                isDark 
                  ? 'bg-gray-700 text-white border border-gray-600' 
                  : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
              }`}>
                {page.label}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 ${
                  isDark 
                    ? 'border-transparent border-t-gray-700' 
                    : 'border-transparent border-t-white'
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Page Transition Particles */}
      {isTransitioning && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDark ? 'bg-purple-400' : 'bg-blue-400'
              } opacity-60 animate-ping`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeOutScale {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.05);
          }
        }
        
        .page-enter {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .page-exit {
          animation: slideOutLeft 0.5s ease-out forwards;
        }
        
        .page-fade-enter {
          animation: fadeInScale 0.5s ease-out forwards;
        }
        
        .page-fade-exit {
          animation: fadeOutScale 0.5s ease-out forwards;
        }
        
        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDark ? '#1f2937' : '#f1f5f9'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? '#6366f1' : '#3b82f6'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? '#8b5cf6' : '#2563eb'};
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Performance optimizations */
        .page-container {
          contain: layout style paint;
          will-change: transform, opacity;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .transition-container {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;