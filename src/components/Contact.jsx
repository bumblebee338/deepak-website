import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a server
    const mailtoLink = `mailto:${profile.contact.email}?subject=Legal Consultation Request&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

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
      <div className="max-w-6xl mx-auto">
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
            Start Your Legal Journey
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {profile.contact.availability}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 group cursor-pointer ${
                    isDark
                      ? 'bg-slate-800/50 border-slate-700 hover:border-gold'
                      : 'bg-white border-slate-200 hover:border-navy'
                  }`}
                  onClick={() => info.href && (window.location.href = info.href)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'bg-gold/10 group-hover:bg-gold/20'
                        : 'bg-navy/10 group-hover:bg-navy/20'
                    }`}>
                      <Icon className={isDark ? 'text-gold' : 'text-navy'} size={24} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {info.label}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-xl border-2 ${
              isDark
                ? 'bg-slate-800/50 border-slate-700'
                : 'bg-white border-slate-200'
            }`}>
              {/* Name input */}
              <div className="mb-6">
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-gold ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                  placeholder="Your full name"
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-gold ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message input */}
              <div className="mb-6">
                <label className={`block text-sm font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-gold resize-none ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-600 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                  placeholder="Tell me about your legal needs..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-900/30 text-green-300 rounded-lg text-center text-sm"
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
