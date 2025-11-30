import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    id: 1,
    title: "Best Offers",
    description: "Discover exclusive deals and discounts on our premium collection of vehicles",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Buy or Test Drive",
    description: "Test drive before you buy. Experience the vehicle firsthand to make the right choice",
    icon: "🚗"
  },
  {
    id: 3,
    title: "First Login Gift",
    description: "Get special offers and exclusive discounts when you create your account today",
    icon: "🎁"
  },
  {
    id: 4,
    title: "Second Hand Cars",
    description: "Quality pre-owned vehicles thoroughly inspected and certified for reliability",
    icon: "♻️"
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience premium automotive services with cutting-edge technology and unmatched customer care
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card Container with Neon Border */}
              <div className="relative h-full p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/20 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden">
                
                {/* Animated Neon Border Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-magenta-400/10 to-cyan-400/20 animate-pulse" />
                </div>

                {/* Top Left Corner Glow */}
                <div className="absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-magenta-400 group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Outer Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-cyan-500/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add custom animation for neon effect */}
      <style>{`
        @keyframes neon-border-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0, 255, 240, 0.3), inset 0 0 10px rgba(0, 255, 240, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 240, 0.6), inset 0 0 20px rgba(0, 255, 240, 0.2);
          }
        }
        
        .group:hover {
          animation: neon-border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
