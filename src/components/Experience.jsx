import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const itemVariants = {
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

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 transition-theme ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-theme ${
            isDark ? 'text-gold' : 'text-navy'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-8">
          {profile.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${index}`}
              className="relative"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2">
                <motion.div
                  className="w-4 h-4 bg-gold border-4 border-white rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-gold ml-4 md:ml-0 transition-theme ${
                isDark ? 'bg-slate-800' : 'bg-slate-50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-2xl font-bold transition-theme ${
                    isDark ? 'text-white' : 'text-navy'
                  }`}>{item.title}</h3>
                  {(item.startDate || item.endDate) && (
                    <span className={`font-bold transition-theme ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.startDate} {item.endDate ? `– ${item.endDate}` : ''}
                    </span>
                  )}
                </div>
                <p className={`text-lg mb-2 transition-theme ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>{item.company}</p>
                {item.mentor && <p className={`text-sm mb-2 transition-theme ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Mentor: {item.mentor}</p>}
                {item.location && <p className={`text-sm mb-2 transition-theme ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.location}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
