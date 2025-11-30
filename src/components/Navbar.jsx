import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="border-b border-white/6 py-4 mb-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-neon.cyan to-neon.pink flex items-center justify-center shadow-neon-pink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M3 12h18" stroke="#001" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="font-bold neon-glow text-lg">NeonCars</div>
            <div className="text-xs text-white/50">Dark • Neon • Offers</div>
          </div>
        </Link>
        <nav className="text-sm text-white/60">
          <a href="#" className="px-3 py-2 rounded-md hover:text-white">Inventory</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-white">Sell</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}
