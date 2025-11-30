import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Test Drive",
    description: "Experience the thrill before you commit. Test drive any vehicle from our collection and feel the performance, comfort, and handling firsthand.",
    icon: "🏁",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/40 hover:border-blue-300/80",
    glowColor: "shadow-blue-500/30"
  },
  {
    id: 2,
    title: "Buy New Cars",
    description: "Explore our curated collection of brand new vehicles with the latest technology, full warranty, and flexible financing options available.",
    icon: "✨",
    color: "from-purple-500/20 to-magenta-500/20",
    borderColor: "border-purple-400/40 hover:border-purple-300/80",
    glowColor: "shadow-purple-500/30"
  },
  {
    id: 3,
    title: "Buy Second Hand",
    description: "Premium pre-owned vehicles inspected and certified. Get quality cars at exceptional prices with our transparent valuation and warranty options.",
    icon: "♻️",
    color: "from-cyan-500/20 to-emerald-500/20",
    borderColor: "border-cyan-400/40 hover:border-cyan-300/80",
    glowColor: "shadow-cyan-500/30"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magenta-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl opacity-20" />

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
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the perfect way to get your dream vehicle
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`relative h-full p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${service.color} border-2 ${service.borderColor} transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105`}>
                
                {/* Animated Background Blur */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Neon Corner Accents */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-magenta-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 inline-block"
                    whileHover={{ scale: 1.3, rotate: 12 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow group-hover:text-gray-100 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-6 w-full py-3 px-4 rounded-lg font-semibold text-white relative group/btn overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-magenta-500/40 group-hover/btn:from-cyan-500/70 group-hover/btn:to-magenta-500/70 transition-all duration-300" />
                    
                    {/* Button Border */}
                    <div className="absolute inset-0 border border-cyan-400/50 group-hover/btn:border-cyan-300 rounded-lg transition-colors duration-300" />
                    
                    {/* Button Text */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <motion.span
                        className="text-lg"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>

                  {/* Top Border Animation with Glow */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/80 blur-sm" />
                  
                  {/* Top Border Glow Effect */}
                  <div className="absolute top-0 left-0 h-2 w-0 bg-gradient-to-r from-cyan-400/30 via-magenta-400/30 to-cyan-400/30 group-hover:w-full transition-all duration-700 rounded-full blur-md opacity-0 group-hover:opacity-100" />
                  
                  {/* Bottom Border Animation with Glow */}
                  <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-100 rounded-full shadow-lg shadow-magenta-400/50 group-hover:shadow-magenta-400/80 blur-sm" />
                  
                  {/* Bottom Border Glow Effect */}
                  <div className="absolute bottom-0 right-0 h-2 w-0 bg-gradient-to-l from-cyan-400/30 via-magenta-400/30 to-cyan-400/30 group-hover:w-full transition-all duration-700 delay-100 rounded-full blur-md opacity-0 group-hover:opacity-100" />
                </div>
              </div>

              {/* Outer Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl ${service.glowColor}`} />

              {/* Enhanced Neon Glow Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-magenta-400/10 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
              
              {/* Curved Edge Glow - Top Left */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Curved Edge Glow - Top Right */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-bl from-magenta-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Curved Edge Glow - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-magenta-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Curved Edge Glow - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-cyan-400/40 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Animated Particles on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                <div className="absolute top-4 right-4 w-1 h-1 bg-magenta-400 rounded-full animate-pulse animation-delay-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-600" />
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-magenta-400 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}
