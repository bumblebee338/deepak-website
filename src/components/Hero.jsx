import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useTheme } from '../context/ThemeContext';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden transition-theme ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900'
    }`}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={heroVariants}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gold font-light mb-6"
          variants={heroVariants}
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          className="text-lg text-blue-100 mb-8"
          variants={heroVariants}
        >
          {profile.location}
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm font-semibold"
            variants={badgeVariants}
          >
            <svg className="inline-block w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Supreme Court of India
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm font-semibold"
            variants={badgeVariants}
          >
            <svg className="inline-block w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
            </svg>
            5+ Years Experience
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm font-semibold"
            variants={badgeVariants}
          >
            <svg className="inline-block w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            B.A.LL.B Criminal Law
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={heroVariants}
        >
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>

          <motion.button
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
