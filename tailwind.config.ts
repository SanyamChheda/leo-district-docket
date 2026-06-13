import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: '#5B2A86',
        royalPurple: '#7B3FE4',
        pinkAccent: '#E85AAE',
        goldAccent: '#D4AF37',
        lavender: '#F2E8FF'
      },
      boxShadow: {
        glass: '0 20px 50px rgba(91, 42, 134, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(123, 62, 255, 0.18), transparent 35%), linear-gradient(180deg, #5B2A86 0%, #7B3FE4 100%)'
      }
    }
  },
  plugins: []
}

export default config
