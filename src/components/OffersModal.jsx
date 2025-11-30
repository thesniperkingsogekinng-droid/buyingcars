import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OffersModal({ open, onClose, offers = [], name }){
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div initial={{y:20, scale:0.98}} animate={{y:0, scale:1}} exit={{y:10, scale:0.98}} className="relative bg-gradient-to-br from-[#071021] to-[#0b0f1a] p-6 rounded-xl shadow-2xl w-full max-w-md border border-white/6">
            <h3 className="text-lg font-semibold neon-glow">Offers for {name}</h3>
            <ul className="mt-4 space-y-3">
              {offers.map((o, i) => (
                <li key={i} className="p-3 bg-white/3 rounded-md">
                  <div className="font-medium">{o.title}</div>
                  <div className="text-sm text-white/70">{o.detail}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <button onClick={onClose} className="px-4 py-2 rounded-md bg-white/6">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
