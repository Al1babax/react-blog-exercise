/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navcolor": "#F55A5A",
        "linkcolor": "#918E9B",
      }
    },
  },
  plugins: [],
}
