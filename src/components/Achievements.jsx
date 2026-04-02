import { useTheme } from '../context/ThemeContext'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'
import { Award } from 'lucide-react'

// Custom hook for count-up animations
function useCountUp(target, duration = 2000, isVisible) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    let rafId

    const animate = () => {
      start += increment
      if (start < target) {
        setCount(Math.floor(start))
        rafId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, isVisible])

  return count
}

// Separate component to fix Rules of Hooks violation
function StatCard({ stat, label }) {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const target = parseInt(stat)
  const count = useCountUp(target, 2000, isInView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 rounded-xl text-center border transition-all duration-300 group ${
        isDark
          ? 'bg-slate-800/50 border-slate-700 hover:border-gold'
          : 'bg-white border-slate-200 hover:border-navy'
      }`}
      whileHover={{ y: -4 }}
    >
      <div className={`text-5xl font-bold mb-2 ${isDark ? 'text-gold' : 'text-navy'}`}>
        {count}{stat.includes('+') ? '+' : ''}
      </div>
      <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {label}
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="achievements"
      ref={ref}
      className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
          : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
      }`}
    >
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
            }`}>Achievements</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Proven Results & Recognition
          </h2>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profile.achievements.map((achievement, index) => (
            <StatCard
              key={index}
              stat={achievement.stat}
              label={achievement.label}
            />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <Award className={isDark ? 'text-gold' : 'text-navy'} size={32} />
            Certifications & Credentials
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {profile.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border-l-4 ${
                  isDark
                    ? 'bg-slate-800/30 border-l-gold'
                    : 'bg-white border-l-navy'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h4>
                  {cert.verified && (
                    <div className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full flex items-center gap-1">
                      ✓ Verified
                    </div>
                  )}
                </div>
                <div className={`text-sm mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {cert.issuer}
                </div>
                <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
