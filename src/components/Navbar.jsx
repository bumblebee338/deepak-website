import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / height) * 100;
      setScrollProgress(scrolled);

      // Detect active section
      const sections = ['home', 'about', 'practice-areas', 'experience', 'results', 'testimonials', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'experience', label: 'Experience' },
    { id: 'results', label: 'Achievements' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-gold z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-theme ${
        isDark
          ? 'bg-slate-900/95 border-b border-slate-800'
          : 'bg-white border-b border-gray-100'
      } backdrop-blur-md shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold cursor-pointer transition-colors ${
                isDark
                  ? 'hover:text-gold text-white'
                  : 'hover:text-blue-900 text-slate-900'
              }`}
            >
              <span className="text-gold">Deepak Yadav</span>
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}> | Advocate</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`transition-all duration-200 cursor-pointer font-medium ${
                    activeSection === section.id
                      ? isDark
                        ? 'text-white border-b-2 border-gold pb-1 bg-gold/10 px-3 py-1 rounded'
                        : 'text-blue-900 border-b-2 border-gold pb-1'
                      : isDark
                      ? 'text-slate-200 hover:text-gold'
                      : 'text-slate-700 hover:text-blue-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gold hover:bg-gold-light text-white px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer font-semibold"
              >
                Contact
              </button>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-theme ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-300'
                    : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121-2.121a4 4 0 00 0-5.656l2.121 2.121a6 6 0 010 5.656zM9 16.9a1 1 0 011 .141v1.018a1 1 0 11-2 0v-1.018a1 1 0 01.859-1.14zm0-12a1 1 0 01-1-.141V3.18a1 1 0 012 0v1.018A1 1 0 019 4.9zM17 11a1 1 0 100-2h-1.017a1 1 0 100 2H17zm-14.017 0a1 1 0 100-2H2a1 1 0 100 2h.983zM16.464 2.536a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM3.05 3.05a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zm9.9 9.9a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-theme ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-300'
                    : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121-2.121a4 4 0 00 0-5.656l2.121 2.121a6 6 0 010 5.656zM9 16.9a1 1 0 011 .141v1.018a1 1 0 11-2 0v-1.018a1 1 0 01.859-1.14zm0-12a1 1 0 01-1-.141V3.18a1 1 0 012 0v1.018A1 1 0 019 4.9zM17 11a1 1 0 100-2h-1.017a1 1 0 100 2H17zm-14.017 0a1 1 0 100-2H2a1 1 0 100 2h.983zM16.464 2.536a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM3.05 3.05a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zm9.9 9.9a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 cursor-pointer focus:ring-2 rounded-lg transition-theme ${
                  isDark
                    ? 'focus:ring-gold hover:bg-slate-800'
                    : 'focus:ring-blue-900 hover:bg-gray-100'
                }`}
              >
                <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden transition-theme ${
              isDark ? 'border-t border-slate-800' : 'border-t border-gray-200'
            }`}
          >
            <div className={`pb-4 space-y-2 ${isDark ? 'bg-slate-800/50' : ''}`}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                    isDark
                      ? 'text-slate-300 hover:bg-slate-700'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-gold hover:bg-gold-light text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer font-semibold mt-2"
              >
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
