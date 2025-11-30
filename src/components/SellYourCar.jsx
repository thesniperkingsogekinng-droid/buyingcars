import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🌍',
    text: 'We are the largest provider with more outlets in more places'
  },
  {
    icon: '🛣️',
    text: 'You get 24/7 roadside assistance'
  },
  {
    icon: '🔧',
    text: 'We fix 4 out of 5 cars at the roadside'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function SellYourCar() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Car Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/30">
              
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Sell Your Car"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-transparent" />

              {/* Play Button Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer shadow-2xl"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(0,255,240,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl ml-1">▶</span>
                </motion.div>
              </motion.div>

              {/* Neon Border Animation */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-cyan-400/50" />
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-100 rounded-full shadow-lg shadow-magenta-400/50" />

              {/* Corner Glows */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-magenta-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow leading-tight">
              Get A Fair Price For Your Car Sell To Us Today
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of options.
            </p>

            {/* Benefits List */}
            <motion.div
              className="space-y-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group/benefit"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {benefit.icon}
                    </motion.div>
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-base group-hover/benefit:text-cyan-200 transition-colors duration-300 pt-1">
                    ✓ {benefit.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="relative group/btn overflow-hidden px-8 py-4 rounded-xl font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 group-hover/btn:from-cyan-400 group-hover/btn:to-magenta-400 transition-all duration-300" />

              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/0 to-magenta-400/0 group-hover/btn:from-cyan-400/20 group-hover/btn:via-white/10 group-hover/btn:to-magenta-400/20 transition-all duration-300" />

              {/* Button Text */}
              <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>

              {/* Button Border Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl shadow-cyan-500/50" />
            </motion.button>

            {/* Additional Info */}
            <p className="text-gray-400 text-sm mt-6">
              Join thousands of satisfied customers who have sold their cars with us
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
