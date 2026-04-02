import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const awardItems = [
  {
    id: 1,
    image: '/award-1.jpeg',
    title: 'Supreme Court of India',
    description: 'Recognized by the Supreme Court of India for exceptional legal excellence and contribution to criminal law',
    year: '2023-2024'
  },
  {
    id: 2,
    image: '/award-2.jpeg',
    title: 'High Court Excellence Award',
    description: 'Honored by the High Court of Allahabad for outstanding performance and professional integrity',
    year: '2023'
  },
  {
    id: 3,
    image: '/award-3.jpeg',
    title: 'Bar Association Certification',
    description: 'Certified advocate by the Bar Council of India with commendation for legal expertise',
    year: '2022'
  },
  {
    id: 4,
    image: '/award-4.jpeg',
    title: 'Distinguished Legal Service',
    description: 'Award for distinguished service in criminal law and advocacy at national level',
    year: '2021'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Awards() {
  const { isDark } = useTheme();

  return (
    <section id="awards" className={`py-24 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark ? 'bg-slate-900' : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
              RECOGNITIONS
            </span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-blue-900'}`} />
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-theme ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Awards & Honors
          </h2>

          <p className={`text-lg max-w-2xl mx-auto transition-theme ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Recognition from prestigious legal institutions and courts for excellence in legal practice and unwavering commitment to justice
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {awardItems.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'
              } border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:border-gold`}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <div className={`w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${
                  isDark ? 'bg-gradient-to-br from-slate-700 to-slate-600' : 'bg-gradient-to-br from-blue-900 to-slate-400'
                }`}>
                  {/* Placeholder for award image */}
                  <div className="flex flex-col items-center justify-center text-white">
                    <svg className="w-20 h-20 opacity-60 mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-sm opacity-75 text-center px-4">{award.title}</p>
                  </div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {award.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-theme ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {award.title}
                </h3>

                <p className={`transition-theme ${
                  isDark ? 'text-slate-200' : 'text-slate-600'
                }`}>
                  {award.description}
                </p>

                {/* Verification Badge */}
                <div className="mt-4 flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-green-600">Verified Achievement</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '4+', label: 'Major Awards' },
            { number: '3+', label: 'Institutional Recognition' },
            { number: '100%', label: 'Court Approval' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-gold mb-2"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className={`text-lg transition-theme ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
