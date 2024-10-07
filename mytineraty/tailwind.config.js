/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './index.html',   
  ],
  theme: {
    extend: {
      colors: {
        navbarfooter:  '#1E201E',
         fondo:'#ECDFCC',
        letras: '#697565',
        letrasNavFooter: '#ECDFCC'
      },
    },
  },
  variants: {},
  plugins: [],
}