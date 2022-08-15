/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#595ED8',
        secondary: '#FF7236',
        secondaryDark: '#CC3D00',
        border: '#3F45D2DD'
      }
    },
  },
  plugins: [],
}
