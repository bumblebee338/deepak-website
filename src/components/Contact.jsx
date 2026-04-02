import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const { isDark } = useTheme()

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: profile.contact.location,
    },
    {
      icon: Mail,
      label: 'Email',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.contact.phone,
    },
  ]

  return (
    <section id="contact" className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
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
            }`}>Get In Touch</span>
            <div className={`h-1 w-8 rounded-full ${isDark ? 'bg-gold' : 'bg-navy'}`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Information
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {profile.contact.availability}
          </p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl border-2 transition-all duration-300 group cursor-pointer text-center ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-gold'
                    : 'bg-white border-slate-200 hover:border-navy'
                }`}
                onClick={() => info.href && (window.location.href = info.href)}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'bg-gold/10 group-hover:bg-gold/20'
                      : 'bg-navy/10 group-hover:bg-navy/20'
                  }`}>
                    <Icon className={`${isDark ? 'text-gold' : 'text-navy'}`} size={32} />
                  </div>
                </div>

                {/* Label */}
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {info.label}
                </h3>

                {/* Value */}
                <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {info.value}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href={`mailto:${profile.contact.email}`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
