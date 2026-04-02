import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { Mail, MapPin, Share2, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const { isDark } = useTheme()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About', id: 'about' },
        { name: 'Practice Areas', id: 'practice-areas' },
        { name: 'Experience', id: 'experience' },
        { name: 'Awards', id: 'awards' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Criminal Law', label: 'Criminal Law' },
        { name: 'Court Representation', label: 'Court Appearances' },
        { name: 'Legal Research', label: 'Legal Research' },
        { name: 'Document Drafting', label: 'Document Drafting' },
      ],
    },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={`transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800'
        : 'bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800'
    }`}>
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/80 to-gold/60 flex items-center justify-center font-bold text-white">
                D
              </div>
              <h3 className="text-xl font-bold text-white">Deepak Yadav</h3>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Advocate specializing in criminal law and constitutional matters. Dedicated to justice and excellence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-gold/20 text-slate-400 hover:text-gold transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick links columns */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => link.id && scrollToSection(link.id)}
                      className="text-sm text-slate-400 hover:text-gold transition-colors duration-200"
                    >
                      {link.label || link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-start gap-2 text-sm text-slate-400 hover:text-gold transition-colors group"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span className="break-all">{profile.contact.email}</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>{profile.contact.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t ${isDark ? 'border-slate-800' : 'border-slate-700'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Deepak Yadav, Advocate. All rights reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-slate-800 hover:bg-gold/20 text-slate-400 hover:text-gold transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
