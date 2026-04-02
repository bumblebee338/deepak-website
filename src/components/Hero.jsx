import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Scale, Building2, BookOpen } from 'lucide-react'

export default function Hero() {
  const { isDark } = useTheme()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section
      id="home"
      className={`relative min-h-screen pt-20 pb-20 px-4 md:px-8 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
          : 'bg-gradient-to-br from-white via-slate-50 to-white'
      }`}
    >
      {/* Background grid */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, ${isDark ? '#e2e8f0' : '#020617'} 1px, transparent 1px), linear-gradient(${isDark ? '#e2e8f0' : '#020617'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className={`text-5xl md:text-6xl font-bold font-display mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Deepak Yadav
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gold mb-2">
                Advocate & Legal Expert
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} mb-6`}>
                Supreme Court of India | Criminal Law Specialist
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Scale, text: '5+ Years Experience' },
                { icon: Building2, text: 'Supreme Court' },
                { icon: BookOpen, text: 'Criminal Law' },
              ].map((badge, i) => {
                const Icon = badge.icon
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${
                      isDark
                        ? 'bg-gold/10 text-gold border border-gold/20'
                        : 'bg-navy/10 text-navy border border-navy/20'
                    }`}
                  >
                    <Icon size={16} />
                    {badge.text}
                  </div>
                )
              })}
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className={`text-base leading-relaxed mb-8 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Dedicated advocate with extensive Supreme Court experience, specializing in criminal law and constitutional matters. Committed to providing superior legal representation.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Consult Now
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('experience')}
                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 ${
                  isDark
                    ? 'border-gold text-gold hover:bg-gold/10'
                    : 'border-navy text-navy hover:bg-navy/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Image placeholder with professional design */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Outer ring animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-gold via-gold to-gold bg-clip-border opacity-30`}
              />

              {/* Main image container */}
              <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
                isDark ? 'border-gold/50' : 'border-navy/50'
              } shadow-2xl flex items-center justify-center ${
                isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-100 to-slate-200'
              }`}>
                {/* Professional photo or placeholder */}
                <img
                  src="/deepak.jpeg"
                  alt="Deepak Yadav"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`absolute -bottom-8 -right-4 px-6 py-4 rounded-xl shadow-xl border ${
                  isDark
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-sm font-semibold text-gold">Licensed Advocate</div>
                <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Bar Council of India Registered
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Scroll to explore
          </div>
          <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            isDark ? 'border-slate-400' : 'border-slate-400'
          }`}>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1 h-2 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
