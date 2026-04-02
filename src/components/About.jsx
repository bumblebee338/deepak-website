import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { CheckCircle2 } from 'lucide-react'
import deepakImage from '../../public/deepak.jpeg'

export default function About() {
  const { isDark } = useTheme()

  const credentials = [
    'Supreme Court Experience',
    'Criminal Law Specialist',
    'Constitutional Expertise',
  ]

  return (
    <section id="about" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
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
            }`}>About Me</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Legal Professional & Advocate
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-xl ${
              isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-slate-200'
            }`}>
              <img
                src={deepakImage}
                alt="Deepak Yadav"
                className="w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDark
                  ? 'from-slate-900/50 via-transparent'
                  : 'from-white/30 via-transparent'
              }`} />
            </div>

            {/* Credentials badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl shadow-xl border ${
                isDark
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? 'text-gold' : 'text-navy'}`}>5+</div>
                <div className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Years of<br />Legal Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Dedicated to Justice & Excellence
            </h3>

            <p className={`text-base leading-relaxed mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {profile.bio}
            </p>

            <p className={`text-base leading-relaxed mb-8 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {profile.fullBio}
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    {cred}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Education
              </h4>
              {profile.education.map((edu, i) => (
                <div key={i} className={`pb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="font-semibold">{edu.degree}</div>
                  <div className="text-sm">{edu.institution}</div>
                  {edu.specialization && (
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Specialization: {edu.specialization}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
