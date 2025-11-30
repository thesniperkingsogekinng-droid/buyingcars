module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2d95',
          cyan: '#00fff0',
          blue: '#3b82f6'
        }
      },
      boxShadow: {
        'neon-pink': '0 0 8px rgba(255,45,149,0.45), 0 0 20px rgba(255,45,149,0.15)'
      }
    }
  },
  plugins: []
}
