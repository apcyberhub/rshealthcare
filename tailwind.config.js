/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF5E6',
          200: '#F7E7C2',
          300: '#F3D594',
          400: '#E5B842',
          DEFAULT: '#D4A72C',
          500: '#D4A72C',
          600: '#B8860B',
          700: '#946B08',
          800: '#735105',
          900: '#523803',
          light: '#FFE6A0',
          champagne: '#F4C95D',
          dark: '#946B08',
          glow: '#D4A72C80',
        },
        dark: {
          bg: '#050505',
          card: '#0A0A0A',
          surface: '#111111',
          elevated: '#171717',
          border: '#262218',
          borderGold: '#D4A72C33',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 167, 44, 0.15)',
        'gold-md': '0 0 20px rgba(212, 167, 44, 0.25)',
        'gold-lg': '0 0 35px rgba(212, 167, 44, 0.35)',
        'gold-glow': '0 0 50px rgba(244, 201, 93, 0.2)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4C95D 0%, #D4A72C 50%, #946B08 100%)',
        'gold-text-gradient': 'linear-gradient(135deg, #FFF0C2 0%, #F4C95D 35%, #D4A72C 70%, #FFE6A0 100%)',
        'gold-sheen': 'linear-gradient(90deg, transparent, rgba(244, 201, 93, 0.2), transparent)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, #1A1712 0%, #050505 75%)',
        'dark-card-gradient': 'linear-gradient(180deg, rgba(23, 23, 23, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
