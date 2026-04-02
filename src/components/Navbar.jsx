import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / height) * 100
      setScrollProgress(scrolled)

      // Detect active section
      const sections = ['home', 'about', 'practice-areas', 'experience', 'achievements', 'awards', 'testimonials', 'blog', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'awards', label: 'Awards' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Publications' },
  ]

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 to-gold z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Floating navbar pill */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`fixed top-4 left-4 right-4 z-40 max-w-5xl mx-auto rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/90 border border-slate-700/50'
            : 'bg-white/90 border border-slate-200/50'
        } backdrop-blur-md shadow-lg`}
      >
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
              isDark ? 'bg-gradient-to-br from-blue-600 to-blue-900' : 'bg-gradient-to-br from-blue-700 to-blue-900'
            }`}>
              D
            </div>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>DY</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium cursor-pointer ${
                  activeSection === section.id
                    ? isDark
                      ? 'bg-gold/20 text-gold'
                      : 'bg-navy/10 text-navy'
                    : isDark
                    ? 'text-slate-300 hover:text-gold'
                    : 'text-slate-600 hover:text-navy'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isDark
                  ? 'hover:bg-slate-800 text-slate-300'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden border-t ${
                isDark ? 'border-slate-700/50' : 'border-slate-200/50'
              }`}
            >
              <div className={`px-6 py-4 space-y-2 ${
                isDark ? 'bg-slate-800/50' : 'bg-slate-50'
              }`}>
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      isDark
                        ? 'text-slate-300 hover:bg-slate-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Navbar spacing */}
      <div className="h-20" />
    </>
  )
}
