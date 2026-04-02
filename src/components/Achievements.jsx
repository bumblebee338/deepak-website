import { useTheme } from '../context/ThemeContext';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../data/profile';

function useCountUp(target, duration = 2000, isVisible) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    let rafId;

    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, isVisible]);

  return count;
}

export default function Achievements() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="results" className={`py-24 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900'
    } text-white`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 rounded-full bg-gold" />
            <span className="text-sm font-semibold tracking-wide text-gold">PROVEN TRACK RECORD</span>
            <div className="h-1 w-8 rounded-full bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Achievements
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Quantifiable results and professional milestones demonstrating excellence in legal practice
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {profile.achievements.map((achievement, index) => {
            const numValue = parseInt(achievement.stat);
            const count = useCountUp(numValue, 2000, isInView);

            const icons = [
              <svg key="1" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>,
              <svg key="2" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
              </svg>,
              <svg key="3" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ];

            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-gold/50 transition-all duration-300 hover:bg-white/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all">
                    <div className="text-gold">
                      {icons[index]}
                    </div>
                  </div>

                  <motion.div
                    className="text-6xl font-bold text-gold mb-3"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {count}+
                  </motion.div>

                  <p className="text-lg font-semibold text-white">{achievement.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          className="pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Supreme Court of India', desc: 'Pradeep Kumar Yadav & Associates', year: '2023-2024', icon: '⚖️' },
              { title: 'High Court Allahabad', desc: 'K.K.Roy Advocate - Human Rights Law', year: '2023', icon: '📜' },
              { title: 'Railway Court Welfare Bar', desc: 'Ashok Pandey Advocate - NCR Allahabad', year: '2022', icon: '✓' }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white/5 to-white/5 border border-white/20 hover:border-gold/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                initial={{ opacity: 0, x: idx === 1 ? 0 : idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>

                <h4 className="font-bold text-white mb-2 group-hover:text-gold transition-colors">{cert.title}</h4>
                <p className="text-sm text-blue-100 mb-3">{cert.desc}</p>
                <span className="text-xs font-semibold text-gold">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
