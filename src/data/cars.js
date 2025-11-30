const cars = [
  {
    id: '1',
    name: 'Aero ZX 2024',
    price: '₹ 28,50,000',
    priceNum: 2850000,
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e3f4a7d4a6b7d9c6d6c1a4d1a2b3c4d',
    gallery: [
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e3f4a7d4a6b7d9c6d6c1a4d1a2b3c4d',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b6b9b5f6a7c8b7d6c4b3a1f0e2d3c4b'
    ],
    specs: {
      engine: '2.0L Turbo',
      power: '250 HP',
      transmission: '8-speed automatic',
      mileage: '15 kmpl'
    },
    offers: [
      { title: 'Bank EMI Offer', detail: 'Low-rate EMI: 6.5% for 36 months' },
      { title: 'Exchange Bonus', detail: '₹ 50,000 extra on exchange' }
    ]
  },
  {
    id: '2',
    name: 'Voltique GT',
    price: '₹ 36,20,000',
    priceNum: 3620000,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b6b9b5f6a7c8b7d6c4b3a1f0e2d3c4b',
    gallery: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b6b9b5f6a7c8b7d6c4b3a1f0e2d3c4b',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6f6e6d6c5b4a3f2e1d0c9b8a7a6b5c'
    ],
    specs: {
      engine: '3.0L V6',
      power: '320 HP',
      transmission: '7-speed DCT',
      mileage: '12 kmpl'
    },
    offers: [
      { title: 'Neon Cashback', detail: 'Flat ₹ 30,000 cashback' },
      { title: 'Zero Downpayment', detail: 'Available on select banks' }
    ]
  },
  {
    id: '3',
    name: 'Nimbus R',
    price: '₹ 45,00,000',
    priceNum: 4500000,
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6f6e6d6c5b4a3f2e1d0c9b8a7a6b5c',
    gallery: [
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6f6e6d6c5b4a3f2e1d0c9b8a7a6b5c',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e3f4a7d4a6b7d9c6d6c1a4d1a2b3c4d'
    ],
    specs: {
      engine: 'Electric 0-100',
      power: '420 HP',
      transmission: 'Single-speed',
      mileage: '350 km range'
    },
    offers: [
      { title: 'Free Maintenance', detail: '1-year complimentary maintenance' },
      { title: 'Loyalty Bonus', detail: '₹ 20,000 for returning customers' }
    ]
  }
]

export default cars
