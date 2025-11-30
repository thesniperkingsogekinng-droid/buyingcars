import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { title: 'Browse Cars', href: '#inventory' },
    { title: 'Test Drive', href: '#services' },
    { title: 'Sell Your Car', href: '#sell' },
    { title: 'About Us', href: '#about' }
  ]

  const company = [
    { title: 'Our Story', href: '#' },
    { title: 'Careers', href: '#' },
    { title: 'Press', href: '#' },
    { title: 'Blog', href: '#' }
  ]

  const support = [
    { title: 'Help Center', href: '#' },
    { title: 'Contact Us', href: 'mailto:support@neoncars.example' },
    { title: 'FAQs', href: '#' },
    { title: 'Feedback', href: '#' }
  ]

  const legal = [
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
    { title: 'Cookie Policy', href: '#' },
    { title: 'Sitemap', href: '#' }
  ]

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '▶', label: 'YouTube', href: '#' }
  ]

  return (
    <footer className="mt-20 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-bold text-2xl neon-glow mb-4">NeonCars</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your premium destination for buying, selling, and trading vehicles with cutting-edge technology and unmatched service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 hover:border-cyan-300 hover:bg-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get exclusive offers and updates</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg bg-white text-black text-sm focus:outline-none focus:border-cyan-400 border border-cyan-500/30 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/40 to-magenta-500/40 border border-cyan-400/60 text-white font-semibold text-sm hover:from-cyan-500/60 hover:to-magenta-500/60 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-cyan-500/20 via-magenta-500/20 to-cyan-500/20 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} NeonCars. All rights reserved. | Designed with ❤️ for car enthusiasts
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {legal.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 text-xs"
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-xs">
            🌟 Trusted by thousands of car buyers and sellers worldwide
          </p>
        </motion.div>
      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0" />
    </footer>
  )
}
