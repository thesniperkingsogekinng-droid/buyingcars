import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import cars from '../data/cars'
import { motion } from 'framer-motion'

export default function Product(){
  const { id } = useParams()
  const navigate = useNavigate()
  const car = cars.find(c => c.id === id)
  const [mainIdx, setMainIdx] = useState(0)

  if(!car) return <div>Car not found</div>

  return (
    <div className="max-w-4xl">
      <div className="md:flex gap-6 items-start">
        <div className="w-full md:w-1/2">
          <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.4}} className="rounded-xl overflow-hidden card-neon p-4">
            <img src={car.gallery[mainIdx] || car.image} alt={car.name} className="w-full h-80 object-cover rounded-md" />
            <div className="mt-3 flex gap-2">
              {car.gallery.map((g, i) => (
                <button key={i} onClick={()=>setMainIdx(i)} className={`w-20 h-12 rounded-md overflow-hidden ${i===mainIdx? 'ring-2 ring-neon.cyan/60':''}`}>
                  <img src={g} alt={`${car.name}-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex-1 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold neon-glow">{car.name}</h2>
          <p className="text-2xl text-neon.cyan font-semibold mt-2">{car.price}</p>

          <div className="mt-6">
            <h4 className="font-medium">Key Specs</h4>
            <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="p-3 bg-white/3 rounded-md">Engine: <span className="font-semibold">{car.specs.engine}</span></div>
              <div className="p-3 bg-white/3 rounded-md">Power: <span className="font-semibold">{car.specs.power}</span></div>
              <div className="p-3 bg-white/3 rounded-md">Transmission: <span className="font-semibold">{car.specs.transmission}</span></div>
              <div className="p-3 bg-white/3 rounded-md">Mileage/Range: <span className="font-semibold">{car.specs.mileage}</span></div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Offers</h4>
            <ul className="mt-2 space-y-2">
              {car.offers.map((o, i) => (
                <li key={i} className="p-3 bg-white/3 rounded-md">
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-sm text-white/70">{o.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => alert('Mock checkout — integrate payments or API for real flow')} className="px-4 py-2 rounded-md btn-neon">Proceed to Buy</button>
            <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-md border">Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}
