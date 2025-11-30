import React, { useState } from 'react'

export default function SearchFilter({ onChange }){
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('relevance')
  const [carType, setCarType] = useState('all')

  const carTypes = [
    { value: 'all', label: 'All' },
    { value: 'suv', label: 'SUV' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'convertible', label: 'Convertible' },
    { value: 'electric', label: 'Electric' }
  ]

  function apply(){
    onChange({ q, sort, carType })
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      apply()
    }
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      {/* Search and Sort Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 flex gap-3">
          <input 
            value={q} 
            onChange={e=>{
              setQ(e.target.value)
              onChange({ q: e.target.value, sort, carType })
            }} 
            onKeyPress={handleKeyPress}
            placeholder="Search make, model or offer" 
            className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 outline-none border border-cyan-500/20 focus:border-cyan-400/60 transition-colors duration-300" 
          />
          <button onClick={apply} className="px-4 py-2 rounded-md btn-neon whitespace-nowrap">Search</button>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-white/70">Sort:</label>
          <select value={sort} onChange={e=>setSort(e.target.value)} className="px-3 py-2 rounded-md bg-white text-black border border-cyan-500/20 focus:border-cyan-400/60 outline-none transition-colors duration-300">
            <option value="relevance">Most relevant</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Car Type Filter */}
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm text-white/70 font-medium">Car Type:</label>
        <div className="flex flex-wrap gap-2">
          {carTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => {
                setCarType(type.value)
                onChange({ q, sort, carType: type.value })
              }}
              className={`px-3 py-1 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 border-2 ${
                carType === type.value
                  ? 'bg-gradient-to-r from-cyan-500/40 to-magenta-500/40 border-cyan-400/80 text-cyan-200 shadow-lg shadow-cyan-500/30'
                  : 'bg-transparent border-cyan-400/30 text-gray-300 hover:border-cyan-400/60 hover:text-cyan-300'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
