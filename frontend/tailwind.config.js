//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      },
    fontFamily:{
      nunito: ['Nunito Sans'],
      roboto: ['Roboto Serif'],
    color: {
        'custom-grisc': ('#323846'),
        'custom-griso': ('#1f252e'),
        'custom-aqua': ('#01eefe')
      }
    }
  },
  plugins: [],
}
