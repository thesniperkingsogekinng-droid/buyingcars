import React, { useMemo, useState } from 'react'
import cars from '../data/cars'
import CarCard from '../components/CarCard'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SearchFilter from '../components/SearchFilter'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import MostSearchedCars from '../components/MostSearchedCars'
import SellYourCar from '../components/SellYourCar'
import TestimonialSection from '../components/TestimonialSection'

const listVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
}

function applyFilters(list, { q, sort, carType }){
  let res = list
  if(q && q.trim()){
    const term = q.trim().toLowerCase()
    res = res.filter(c => c.name.toLowerCase().includes(term) || c.offers.some(o => o.title.toLowerCase().includes(term) || o.detail.toLowerCase().includes(term)))
  }
  if(sort === 'price-asc') res = res.slice().sort((a,b)=>a.priceNum - b.priceNum)
  if(sort === 'price-desc') res = res.slice().sort((a,b)=>b.priceNum - a.priceNum)
  return res
}

export default function Home(){
  const [filters, setFilters] = useState({ q: '', sort: 'relevance', carType: 'all' })

  const filtered = useMemo(()=> applyFilters(cars, filters), [filters])

  return (
    <div>
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <MostSearchedCars />

      <div className="max-w-7xl mx-auto px-4">
        <SearchFilter onChange={setFilters} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section id="inventory" className="grid gap-4">
          <motion.div className="grid gap-4" variants={listVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
            {filtered.map((car, idx) => (
              <CarCard key={car.id} car={car} index={idx} />
            ))}
          </motion.div>
        </section>

        <SellYourCar />

        <TestimonialSection />

        <Footer />
      </div>
    </div>
  )
}
