import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { BookOpen, Calendar, FileText } from 'lucide-react'

export default function Projects() {
  const { isDark } = useTheme()

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
    <section id="blog" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-900/50' : 'bg-slate-50'
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
            }`}>Publications</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Publications & Research
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 h-full flex flex-col ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-gold'
                  : 'bg-white border-slate-200 hover:border-navy'
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Header area with icon */}
              <div className={`h-32 flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-br from-gold/10 to-transparent group-hover:from-gold/20'
                  : 'bg-gradient-to-br from-navy/10 to-transparent group-hover:from-navy/20'
              }`}>
                <FileText className={`${isDark ? 'text-gold' : 'text-navy'}`} size={48} />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Type badge */}
                {project.type && (
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${
                    isDark
                      ? 'bg-gold/10 text-gold'
                      : 'bg-navy/10 text-navy'
                  }`}>
                    {project.type}
                  </div>
                )}

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Meta info */}
                <div className={`text-xs flex items-center gap-2 ${
                  isDark ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  <Calendar size={14} />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                isDark ? 'bg-gradient-to-br from-gold' : 'bg-gradient-to-br from-navy'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
