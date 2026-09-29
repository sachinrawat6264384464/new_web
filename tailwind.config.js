/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'token-1': '#161616', // Text Primary
        'token-2': '#7C1A06', // Background Dark (Rust Red)
        'token-3': '#0000EE', // Text Primary Accent
        'token-4': '#A52207', // Background Dark (Vivid Rust)
        'token-5': '#646464', // Text Secondary
        'token-6': '#CF2B09', // Accent Red
        'token-7': '#F8330B', // Accent Crimson Red
        'token-8': '#C8FF2E', // Text Light Lime
        'token-[#F7F6F0]': '#F7F6F0', // Text Light Surface
        'token-10': '#FFFFFF', // Text Light White
        'royal-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['Geist', 'Highway Motel Sans Regular', 'Inter', 'sans-serif'],
        serif: ['Times New Roman', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['12px', '16.8px'],
        'sm': ['14px', '19.2px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '24px'],
        'xl': ['20px', '24px'],
        '2xl': ['24px', '28px'],
        '3xl': ['48px', '56px'],
        '4xl': ['56px', '57.6px'],
        '9': ['72px', '72px'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '40px',
        '6': '62px',
      }
    },
  },
  plugins: [],
}
