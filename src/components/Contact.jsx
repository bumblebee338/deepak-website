import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-theme ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 to-slate-800'
        : 'bg-gradient-to-br from-slate-900 to-blue-900'
    } text-white`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 rounded-full bg-gold" />
            <span className="text-sm font-semibold tracking-wide text-gold">GET IN TOUCH</span>
            <div className="h-1 w-8 rounded-full bg-gold" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule Your Consultation
          </h2>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Ready to discuss your legal matter? Reach out today and get expert legal guidance from an experienced advocate.
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Location */}
          <motion.div
            className="group relative overflow-hidden glass p-8 rounded-2xl text-center border border-white/20 hover:border-gold/50 transition-all duration-300 hover:bg-white/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold/20 group-hover:bg-gold/30 transition-all flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold mb-2 group-hover:text-white transition-colors">Location</h3>
              <p className="text-blue-100">{profile.contact.location}</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="group relative overflow-hidden glass p-8 rounded-2xl text-center border border-white/20 hover:border-gold/50 transition-all duration-300 hover:bg-white/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold/20 group-hover:bg-gold/30 transition-all flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold mb-2 group-hover:text-white transition-colors">Email</h3>
              <a href={`mailto:${profile.contact.email}`} className="text-blue-100 hover:text-gold transition-colors cursor-pointer font-semibold">
                {profile.contact.email}
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="group relative overflow-hidden glass p-8 rounded-2xl text-center border border-white/20 hover:border-gold/50 transition-all duration-300 hover:bg-white/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold/20 group-hover:bg-gold/30 transition-all flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.151.374.418.835.773 1.299.36.466.822.91 1.299 1.299l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold mb-2 group-hover:text-white transition-colors">Phone</h3>
              <p className="text-blue-100 font-semibold">{profile.contact.phone}</p>
            </div>
          </motion.div>
        </div>

        {/* Availability Banner */}
        <motion.div
          className="relative overflow-hidden max-w-3xl mx-auto rounded-2xl p-10 md:p-12 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/30 glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -mr-20 -mt-20" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-semibold text-gold uppercase tracking-wide">READY TO HELP</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Available for Consultations</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              I'm available for legal consultations and case discussions across all practice areas. Don't hesitate to reach out with your legal matters—expert guidance is just a message away.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-gold-light transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Now</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
