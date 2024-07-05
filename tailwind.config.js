/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        marqueeInner: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        boxShadow: {
          'inner-lg': 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
     ],
}
