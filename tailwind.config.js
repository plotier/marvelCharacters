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
        load: 'loadEffect 4s ease-in-out forwards',
        fadeIn: "fadeIn 0.3s ease-out forwards",
        slideDown: "slideDown 0.5s ease-out forwards",

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        loadEffect: {
          '0%': { width: '1px' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
