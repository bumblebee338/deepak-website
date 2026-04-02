import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const { isDark } = useTheme()

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="experience" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-900/50' : 'bg-slate-50'
    }`}>
      <div className="max-w-4xl mx-auto">
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
            }`}>Professional Journey</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Experience & Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className={`absolute left-6 top-0 bottom-0 w-1 ${
            isDark ? 'bg-gold/20' : 'bg-navy/20'
          } md:left-1/2 md:-translate-x-1/2`} />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {profile.experience.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:ml-1/2'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                    isDark
                      ? 'bg-slate-900 border-gold'
                      : 'bg-white border-navy'
                  } md:left-1/2 md:-translate-x-1/2 top-2`}
                >
                  <div className={`w-4 h-4 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
                </motion.div>

                {/* Card */}
                <div className={`md:w-[calc(50%-24px)] p-6 rounded-xl border-l-4 transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800/50 border-l-gold'
                    : 'bg-white border-l-navy'
                }`}>
                  {/* Title and Company */}
                  <h3 className={`text-xl font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <div className={`text-lg font-semibold mb-3 ${
                    isDark ? 'text-gold' : 'text-navy'
                  }`}>
                    {item.company}
                  </div>

                  {/* Mentor/Type */}
                  {item.mentor && (
                    <div className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="font-semibold">Mentor:</span> {item.mentor}
                    </div>
                  )}
                  {item.type && (
                    <div className={`text-sm mb-3 inline-block px-3 py-1 rounded-full ${
                      isDark ? 'bg-gold/10 text-gold' : 'bg-navy/10 text-navy'
                    }`}>
                      {item.type}
                    </div>
                  )}

                  {/* Date and location */}
                  <div className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.startDate && (
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>
                          {item.startDate}
                          {item.endDate && ` – ${item.endDate}`}
                        </span>
                      </div>
                    )}
                    {item.duration && (
                      <div className="text-xs italic">{item.duration}</div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
