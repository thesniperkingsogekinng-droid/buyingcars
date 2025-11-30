import React from 'react'

export default function Hero(){
  return (
    <section className="mb-8 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold neon-glow">Find your perfect ride — Neon style</h1>
          <p className="mt-4 text-lg text-white/75">Explore curated deals, compare offers and buy with confidence. Dark, modern UI with smooth interactions and focused product detail pages.</p>
          <div className="mt-6 flex gap-3">
            <a href="#inventory" className="px-5 py-3 rounded-md btn-neon font-semibold">Browse Inventory</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/8">Contact Sales</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden card-neon p-4">
            <img src="https://images.unsplash.com/photo-1549921296-3b6b7bd6f71b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=02d7ea9d6b5fae1f6e2a4b2a8a6b7c0d" alt="hero car" className="w-full h-56 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
