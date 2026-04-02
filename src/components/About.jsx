import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark ? 'bg-slate-900' : 'bg-white'
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
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`w-80 rounded-2xl overflow-hidden shadow-2xl ${
              isDark ? 'ring-1 ring-gold/30' : 'ring-1 ring-gold/20'
            }`}>
              <img
                src="/deepak.jpeg"
                alt="Deepak Yadav - Advocate"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`text-lg mb-6 leading-relaxed transition-theme ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {profile.bio}
            </p>
            <p className={`text-lg mb-6 leading-relaxed transition-theme ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {profile.fullBio}
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              <h3 className={`text-xl font-bold mb-4 transition-theme ${
                isDark ? 'text-gold' : 'text-navy'
              }`}>Credentials</h3>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className={`transition-theme ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>B.A.LL.B. Criminal Law — Alliance University Bangalore (2019-2024)</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className={`transition-theme ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Advocate — LAW LOADED, Kanpur (Present)</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 9.479a4 4 0 01-5.239 5.239l1.414-1.414a2 2 0 002.827-2.827l-1.414-1.414a4 4 0 015.239 5.239zM7.071 7.071a2 2 0 00-2.828 2.828l1.414 1.414a4 4 0 115.657-5.657L7.07 7.071zm9.899 9.9a1 1 0 10-1.414 1.414l1.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className={`transition-theme ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Multiple Supreme Court Internships & Bar Association Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
