import React, { useState, useRef } from 'react'
import OffersModal from './OffersModal'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

export default function CarCard({ car, index = 0 }){
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref} variants={cardVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{duration:0.6, delay: index * 0.08, ease: 'easeOut'}} className="card-neon rounded-xl overflow-hidden bg-gradient-to-br from-white/2 to-white/1 p-4">
      <div className="md:flex gap-4">
        <motion.img whileHover={{ scale: 1.03 }} src={car.image} alt={car.name} className="w-full md:w-64 h-40 object-cover rounded-md" />
        <div className="flex-1 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold neon-glow">{car.name}</h3>
          <p className="text-sm text-white/60 mt-1">{car.price}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {car.offers.map((o, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-md bg-white/3 text-white/90">{o.title}</span>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-md btn-neon text-sm">View Offers</button>
            <button onClick={() => navigate(`/product/${car.id}`)} className="px-4 py-2 rounded-md border border-white/8 text-sm hover:text-white">Buy</button>
          </div>
        </div>
      </div>
      <OffersModal open={open} onClose={() => setOpen(false)} offers={car.offers} name={car.name} />
    </motion.div>
  )
}
