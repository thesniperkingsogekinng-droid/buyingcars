import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const allTestimonials = [
  {
    id: 1,
    name: 'John Mitchell',
    role: 'Car Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    text: 'Amazing experience! The team was professional and helped me find the perfect car within my budget. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'First-time Buyer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    text: 'The test drive experience was fantastic. The staff explained everything clearly and made the process stress-free. Best service ever!',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    text: 'Great selection of vehicles and competitive pricing. I found exactly what I was looking for. Will definitely return!',
    rating: 5
  },
  {
    id: 4,
    name: 'Emma Davis',
    role: 'Adventure Seeker',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    text: 'The financing options were flexible and the entire process was smooth. I love my new SUV! Excellent customer service.',
    rating: 5
  },
  {
    id: 5,
    name: 'David Rodriguez',
    role: 'Tech Professional',
    image: 'https://images.unsplash.com/photo-1519085360771-9852046c467f?q=80&w=400&auto=format&fit=crop',
    text: 'Outstanding customer support! They answered all my questions and provided transparent information. Five stars!',
    rating: 5
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    text: 'The online booking process was seamless. I saved so much time and got the best deal. Highly impressed!',
    rating: 5
  },
  {
    id: 7,
    name: 'James Wilson',
    role: 'Retired Professional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    text: 'Been buying cars for 40 years, and this is the best experience I\'ve had. Truly professional team!',
    rating: 5
  },
  {
    id: 8,
    name: 'Amanda Martinez',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    text: 'They had the perfect car for my first purchase! Affordable, reliable, and great after-sales service. Recommended!',
    rating: 5
  },
  {
    id: 9,
    name: 'Robert Thompson',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    text: 'Impressive collection of luxury vehicles. The staff knows their stuff and made the buying experience enjoyable.',
    rating: 5
  },
  {
    id: 10,
    name: 'Victoria Lee',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    text: 'Amazing warranty and maintenance packages included. This dealership truly cares about customer satisfaction!',
    rating: 5
  },
  {
    id: 11,
    name: 'Christopher Brown',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    text: 'The trade-in value was fair and transparent. No hidden charges. Exactly what I was looking for!',
    rating: 5
  },
  {
    id: 12,
    name: 'Nicole Garcia',
    role: 'Nurse',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    text: 'Quick paperwork and hassle-free delivery. The entire team was courteous and helpful throughout the process.',
    rating: 5
  },
  {
    id: 13,
    name: 'Kevin Taylor',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    text: 'Got the exact specifications I wanted. Quality control is top-notch. Very satisfied with my purchase!',
    rating: 5
  },
  {
    id: 14,
    name: 'Rachel White',
    role: 'Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    text: 'Fantastic showroom experience and knowledgeable sales team. They listened to my needs and delivered exactly that!',
    rating: 5
  },
  {
    id: 15,
    name: 'Mark Robinson',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    text: 'Best dealership in town! Competitive prices, excellent vehicles, and outstanding customer service. Bravo!',
    rating: 5
  },
  {
    id: 16,
    name: 'Sophie Clark',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    text: 'Reliable vehicles with genuine reviews. The team was honest and never pressured me into anything. Top-notch!',
    rating: 5
  }
]

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

export default function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 4
  const totalPages = Math.ceil(allTestimonials.length / reviewsPerPage)
  
  const currentTestimonials = allTestimonials.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  )
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-magenta-500/10 to-transparent rounded-full blur-3xl" />

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
            What Our Customers Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          key={currentPage}
        >
          <AnimatePresence mode="wait">
            {currentTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group relative"
              >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-800/20 border-2 border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Glows */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-magenta-400/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400 text-lg"
                        whileHover={{ scale: 1.2 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-cyan-400/30 to-magenta-400/30 mb-4" />

                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Name and Role */}
                    <div>
                      <p className="font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Neon Border Animation */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-cyan-400 via-magenta-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-100 rounded-full shadow-lg shadow-magenta-400/50" />
              </div>

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-2xl shadow-cyan-500/20" />
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                  : 'bg-cyan-400/50 hover:bg-cyan-300'
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
