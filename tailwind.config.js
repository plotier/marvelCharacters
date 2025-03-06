module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'marvel-red': '#EC1D24',
      },
      boxShadow: {
        'custom-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'load': 'loadEffect 4s ease-in-out forwards',
      },
      keyframes: {
        loadEffect: {
          '0%': { width: '1px' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
