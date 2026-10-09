/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        storm: '#D1D8D9',
        seafoam: '#8BBDB5',
        tealGray: '#527D7D',
        ocean: '#092F37',
        midnight: '#061923',
        deep: '#0D4148',
        mist: '#B0D4CD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(139, 189, 181, 0.25)',
        card: '0 18px 42px rgba(1, 18, 25, 0.35)',
      },
    },
  },
  plugins: [],
};
