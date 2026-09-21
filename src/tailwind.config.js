/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'zblack': '#030305',
        'zdark': '#090810',
        'zsurface': '#110e1e',
        'lunar-purple': {
          DEFAULT: '#9333ea',
          light: '#c084fc',
          dark: '#581c87',
          glow: 'rgba(168, 85, 247, 0.35)',
        }
      },
      boxShadow: {
        'lunar-glow': '0 0 40px -5px rgba(168, 85, 247, 0.3)',
        'lunar-glow-strong': '0 0 60px -5px rgba(168, 85, 247, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}