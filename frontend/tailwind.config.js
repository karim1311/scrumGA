//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 44%, rgba(0,212,255,1) 100%)',
        'prueba':'bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300'})},
    fontFamily:{
      nunito: ['Nunito Sans'],
      roboto: ['Roboto Serif']
    }
  },
  plugins: [],
}
