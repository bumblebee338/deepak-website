import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const { isDark } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % profile.testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovering])

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + profile.testimonials.length) % profile.testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % profile.testimonials.length)
  }

  const testimonial = profile.testimonials[activeIndex]

  return (
    <section id="testimonials" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-950/50' : 'bg-slate-50'
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
            }`}>Client Feedback</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            What Clients Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-12 rounded-2xl border-2 relative ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Quote icon */}
              <Quote className={`mb-6 opacity-10 ${isDark ? 'text-gold' : 'text-navy'}`} size={64} />

              {/* Quote text */}
              <p className={`text-xl md:text-2xl font-serif italic mb-8 leading-relaxed ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white ${
                  isDark
                    ? 'bg-gradient-to-br from-gold/80 to-gold/60'
                    : 'bg-gradient-to-br from-navy to-blue-900'
                }`}>
                  {testimonial.initials}
                </div>

                {/* Name and role */}
                <div>
                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {testimonial.designation}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <motion.button
              onClick={goToPrevious}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark
                  ? 'bg-slate-700 hover:bg-gold/20 text-slate-300 hover:text-gold'
                  : 'bg-slate-200 hover:bg-navy/20 text-slate-600 hover:text-navy'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark
                  ? 'bg-slate-700 hover:bg-gold/20 text-slate-300 hover:text-gold'
                  : 'bg-slate-200 hover:bg-navy/20 text-slate-600 hover:text-navy'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {profile.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === index
                    ? isDark
                      ? 'w-8 h-3 bg-gold'
                      : 'w-8 h-3 bg-navy'
                    : isDark
                    ? 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                animate={{
                  width: activeIndex === index ? 32 : 12,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
