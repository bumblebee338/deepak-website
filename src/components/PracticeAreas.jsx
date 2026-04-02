import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { Scale, Gavel, BookOpen, FileText, Landmark, PenLine } from 'lucide-react'

export default function PracticeAreas() {
  const { isDark } = useTheme()

  const iconMap = {
    'Criminal Law': Scale,
    'Court Appearances': Gavel,
    'Legal Research': BookOpen,
    'Document Drafting': FileText,
    'Constitutional Law': Landmark,
    'Legal Writing': PenLine,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="practice-areas" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-950/50' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
            <span className={`text-sm font-semibold uppercase tracking-wider ${
              isDark ? 'text-gold' : 'text-navy'
            }`}>Practice Areas</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Areas of Expertise
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.practiceAreas.map((area, index) => {
            const Icon = iconMap[area.title] || Scale
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-8 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-700 hover:border-gold'
                    : 'bg-slate-50 border-slate-200 hover:border-navy'
                }`}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className={`mb-6 inline-block p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gold/10 group-hover:bg-gold/20'
                    : 'bg-navy/10 group-hover:bg-navy/20'
                }`}>
                  <Icon size={28} className={isDark ? 'text-gold' : 'text-navy'} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {area.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {area.description}
                </p>

                {/* Hover overlay */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                  isDark ? 'bg-gradient-to-br from-gold to-transparent' : 'bg-gradient-to-br from-navy to-transparent'
                }`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
