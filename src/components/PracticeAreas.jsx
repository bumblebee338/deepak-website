import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6
    }
  })
};

export default function PracticeAreas() {
  const { isDark } = useTheme();
  const icons = [
    'M7 9a2 2 0 100-4 2 2 0 000 4zM7 11a6 6 0 11-.001 11.999A6 6 0 017 11zm4.55-1.5h-1.1a4.001 4.001 0 01-7.9 0H2.45A2 2 0 012 8v-2a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-.45 1.5zm-2-4H5.45A2 2 0 005 4h10a2 2 0 00-2 2h-3.45z',
    'M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm3.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
    'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z',
    'M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z',
    'M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6H3v2a6 6 0 016 6v1h12v-1a6 6 0 016-6h-6V6z',
    'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z'
  ];

  return (
    <section id="practice-areas" className={`py-20 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-theme ${
            isDark ? 'text-gold' : 'text-navy'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Practice Areas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className={`p-8 rounded-lg border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:border-gold shadow-lg hover:shadow-xl hover:shadow-gold/20'
                  : 'bg-white border-gray-200 hover:border-gold shadow-md hover:shadow-lg'
              }`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
              isDark
                ? 'bg-gold/10 hover:bg-gold/20'
                : 'bg-blue-100 hover:bg-blue-200'
            }`}>
                <svg className={`w-6 h-6 transition-theme ${
                  isDark ? 'text-gold' : 'text-navy'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path d={icons[index]} />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-3 transition-theme ${
                isDark ? 'text-white' : 'text-navy'
              }`}>{area.title}</h3>
              <p className={`leading-relaxed transition-theme ${
                isDark ? 'text-slate-200' : 'text-slate-600'
              }`}>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
