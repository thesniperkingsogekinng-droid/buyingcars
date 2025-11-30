import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cars from '../data/cars'

const categories = ['All', 'Sedan', 'SUV', 'Sports']

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function MostSearchedCars() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCars = activeCategory === 'All' ? cars.slice(0, 4) : cars.slice(0, 4)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-magenta-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-glow">
            The Most Searched Cars
          </h2>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 font-semibold transition-all duration-300 group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Background */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-cyan-500/40 to-magenta-500/40 shadow-lg shadow-cyan-500/30'
                      : 'bg-transparent'
                  }`}
                />

                {/* Button Border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                    activeCategory === category
                      ? 'border-cyan-400/80 shadow-cyan-500/30'
                      : 'border-cyan-400/30 hover:border-cyan-400/60'
                  }`}
                />

                {/* Text */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeCategory === category ? 'text-cyan-200' : 'text-gray-300 group-hover:text-cyan-300'
                }`}>
                  {category}
                </span>

                {/* Active Indicator */}
                {activeCategory === category && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-900/30 to-slate-800/20 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer hover:scale-105">
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Price Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500/90 to-magenta-500/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-white border border-cyan-300/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-sm">{car.price}</span>
                  </motion.div>

                  {/* Great Price Tag */}
                  <motion.div
                    className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    Great Price
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-5 relative z-10">
                  {/* Car Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                    {car.name}
                  </h3>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-cyan-500/20 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Mileage</p>
                      <p className="text-sm font-semibold text-cyan-300">{car.specs?.mileage || '50 Miles'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Fuel</p>
                      <p className="text-sm font-semibold text-cyan-300">{car.specs?.transmission?.split('-')[0] || 'Petrol'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 mb-1">Type</p>
                      <p className="text-sm font-semibold text-cyan-300">Automatic</p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    className="w-full py-2 px-4 rounded-lg font-semibold text-white relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-magenta-500/50 group-hover/btn:from-cyan-500/70 group-hover/btn:to-magenta-500/70 transition-all duration-300" />
                    
                    {/* Button Border */}
                    <div className="absolute inset-0 border border-cyan-400/50 group-hover/btn:border-cyan-300 rounded-lg transition-colors duration-300" />
                    
                    {/* Text */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Details
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>

                {/* Neon Border Animation */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-100 rounded-full shadow-lg shadow-magenta-400/50" />

                {/* Corner Glows */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-magenta-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-magenta-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
