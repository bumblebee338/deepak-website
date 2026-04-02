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

export default function Projects() {
  const { isDark } = useTheme();

  const icons = [
    'M9 4.804C9 4.36 9.359 4 9.833 4h.334c.474 0 .833.36.833.804v15.392c0 .444-.359.804-.833.804h-.334c-.474 0-.833-.36-.833-.804V4.804z',
    'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z',
    'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0z'
  ];

  return (
    <section id="blog" className={`py-20 px-4 sm:px-6 lg:px-8 transition-theme ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                isDark ? 'bg-slate-800' : 'bg-slate-50'
              }`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className={`h-40 flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-slate-900 to-gold'
                  : 'bg-gradient-to-br from-blue-900 to-gold'
              }`}>
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d={icons[index]} />
                </svg>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-theme ${
                  isDark ? 'text-white' : 'text-navy'
                }`}>{project.title}</h3>
                <p className={`mb-4 transition-theme ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>{project.description}</p>
                <span className={`text-sm font-semibold transition-theme ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{project.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
