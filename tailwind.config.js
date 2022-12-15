/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xss': '320px',
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans:["cinzel", "sans-serif"],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
    },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        },
      },
    },
      animation: {
        'fade-in-down': 'fade-in-down 3s ease-out',
        'fade-in-down-sl': 'fade-in-down 20s ease-out',
        'fade-in-up-ab': 'fade-in-down 15s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
