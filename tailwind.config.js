/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
       xs: '14px',
       sm: '16px',
       base: '18px',
       lg: '24px',
       xl: '28px',
       '2xl': '36px',
       '3xl': '54px',
    },
    extend: {
      colors:{
        primary : '#FFF80A',
        secondary: '#FFF80A99',
        muted: '#FFF80A33',
        'custom-black': '#272727',
        'custom-gray' : '#00000099'
      },
      fontFamily:{
        poppins : ['Poppins', 'sans-serif']
      },
      fontWeight:{
        semibold: 600
      }
    },
  },
  plugins: [],
}