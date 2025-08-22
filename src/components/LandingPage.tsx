"use client";
import React, { useState, useEffect } from 'react';
import { Download, Eye, Sun, Moon,  User, FolderOpen, Mail, Home } from 'lucide-react';
import Skills from './Skills';
import Experience from './Experience';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigateToPage = (page: React.SetStateAction<string>) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 600);
  };

  const projects = [
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

  const themeClasses = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  // Theme Toggle Only (positioned fixed)
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

  // Home Page
  const HomePage = () => (
    <div className={`min-h-screen ${themeClasses} relative overflow-hidden`}>
      {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${isDark ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-blue-400 to-purple-400'}`}></div>
          {/* <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${isDark ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-pink-400 to-red-400'}`}></div> */}
          
          {/* Floating particles */}
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
            
            {/* Text Side - Left */}
            <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Greeting */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  } animate-pulse`}>
                    Available for work
                  </span>
                </div>

                {/* Main Headline */}
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
                    Senior Software Developer
                  </span>
                </h1>

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
                    Download Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side - Right */}
            <div className="flex-1 flex justify-center lg:justify-end">
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
                      5+ Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className={`min-h-screen ${themeClasses} px-6 py-20`}>
      <div className="container mx-auto max-w-6xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className={`text-5xl font-bold mb-8 text-left bg-gradient-to-r ${
            isDark ? 'from-purple-400 to-pink-400' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            About Me
          </h1>
          <div className='w-44 h-2 bg-gradient-to-r from-purple-500 to-pink-500'></div>
          
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
                Hi! I&apos;m Ruth, a passionate Senior Software Developer with over 5 years of experience 
                creating innovative digital solutions. I specialize in full-stack development using 
                modern technologies like React, Next.js, TypeScript, and Python.
              </p>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                My journey in tech started with a curiosity about how things work behind the scenes. 
                Today, I&apos;m driven by the challenge of solving complex problems and creating 
                user-friendly applications that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Experience', value: '5+ Years' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Technologies', value: '15+' },
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

      </div>
              {/* Tech Stack Icons */}
          <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Technologies I work with
            </h3>
            <div 
            className={`w-24 h-1 mx-auto mt-6 bg-gradient-to-r ${
              isDark ? 'from-cyan-400 via-purple-500 to-pink-500' : 'from-blue-500 via-purple-500 to-pink-500'
            }`}
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)" }} 
          />

          </div>

          <Skills />
        </div>
    </div>
  );

  // Projects Page
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
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page
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
                  { label: 'Email', value: 'ruth@example.com', icon: '📧' },
                  { label: 'Location', value: 'Kigali, Rwanda', icon: '📍' },
                  { label: 'Phone', value: '+250 123 456 789', icon: '📱' }
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
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

  return (
    <div className="relative">
      <ThemeToggle />
      
      {/* Book-style Page Container */}
      <div className="relative perspective-1000">
        <div 
          className={`transform-style-preserve-3d transition-all duration-700 ${
            isTransitioning ? 'rotate-y-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* Current Page */}
          <div 
            className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            style={{
              backfaceVisibility: 'hidden'
            }}
          >
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'contact' && <ContactPage />}
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
          isDark ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
        } backdrop-blur-sm shadow-lg`}>
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'about', label: 'About', icon: User },
            { id: 'projects', label: 'Projects', icon: FolderOpen },
            { id: 'contact', label: 'Contact', icon: Mail }
          ].map((page) => (
            <button
              key={page.id}
              onClick={() => navigateToPage(page.id)}
              className={`p-3 rounded-full transition-all duration-300 ${
                currentPage === page.id
                  ? isDark 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-blue-600 text-white shadow-lg'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
              disabled={isTransitioning}
            >
              <page.icon size={20} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backfaceVisibility: hidden;
        }
        
        @keyframes pageFlip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-90deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        
        .page-flip {
          animation: pageFlip 0.8s ease-in-out;
        }
        
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;