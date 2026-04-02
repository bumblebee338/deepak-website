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
      <div className="max-w-5xl mx-auto">
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

        {/* Timeline - alternating left and right */}
        <div className="space-y-12">
          {profile.experience.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* Left column content */}
                <div className={`${!isLeft ? 'md:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`p-6 md:p-8 rounded-xl border-l-4 transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800/50 border-l-gold'
                        : 'bg-white border-l-navy'
                    }`}
                  >
                    {/* Title and Company */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>
                    <div className={`text-lg font-semibold mb-4 ${
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
                      <div className={`text-sm mb-4 inline-block px-3 py-1 rounded-full ${
                        isDark ? 'bg-gold/10 text-gold' : 'bg-navy/10 text-navy'
                      }`}>
                        {item.type}
                      </div>
                    )}

                    {/* Date and location */}
                    <div className={`text-sm space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.startDate && (
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
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
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Right column - timeline dot and line */}
                <div className={`hidden md:flex justify-center ${!isLeft ? 'md:order-1' : ''}`}>
                  <div className="relative flex flex-col items-center">
                    {/* Vertical line */}
                    {index < profile.experience.length - 1 && (
                      <div className={`absolute top-16 w-1 h-16 ${
                        isDark ? 'bg-gold/20' : 'bg-navy/20'
                      }`} />
                    )}

                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-4 ${
                        isDark
                          ? 'bg-slate-900 border-gold'
                          : 'bg-white border-navy'
                      } z-10`}
                    >
                      <div className={`w-5 h-5 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
