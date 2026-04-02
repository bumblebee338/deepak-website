import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

export default function Testimonials() {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % profile.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = profile.testimonials;

  return (
    <section id="testimonials" className={`py-24 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark ? 'bg-slate-900' : 'bg-gradient-to-b from-white to-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-blue-900'}`} />
            <span className={`text-sm font-semibold tracking-wide ${isDark ? 'text-gold' : 'text-blue-900'}`}>
              CLIENT TESTIMONIALS
            </span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-blue-900'}`} />
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-theme ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            What Clients Say
          </h2>

          <p className={`text-lg transition-theme ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Trusted by clients across the country for exceptional legal representation
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-96 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className={`absolute inset-0 rounded-2xl overflow-hidden border transition-colors ${
                  isDark
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-gold/50'
                    : 'bg-white border-slate-200 hover:border-gold/50'
                } p-8 md:p-10 shadow-xl`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Mark */}
                <div className="text-gold/20 text-6xl font-bold mb-2 leading-none">"</div>

                {/* Testimonial Text */}
                <p className={`text-lg md:text-xl leading-relaxed mb-8 transition-theme ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                } italic`}>
                  {testimonials[activeIndex].quote}
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 fill-current transition-theme ${isDark ? 'text-amber-300' : 'text-gold'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: isDark ? '#4B5563' : '#E2E8F0' }}>
                  <motion.div
                    className={`w-14 h-14 rounded-full font-bold text-lg flex items-center justify-center transition-colors ${
                      isDark
                        ? 'bg-gradient-to-br from-gold to-gold/80 text-slate-900'
                        : 'bg-gradient-to-br from-blue-900 to-blue-800 text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonials[activeIndex].initials}
                  </motion.div>
                  <div>
                    <p className={`font-bold transition-theme ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {testimonials[activeIndex].name}
                    </p>
                    <p className={`text-sm transition-theme ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {testimonials[activeIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? 'bg-gold w-8 h-3'
                    : isDark ? 'bg-slate-700 hover:bg-gold/50 w-3 h-3' : 'bg-slate-300 hover:bg-gold w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
