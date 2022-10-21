/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primaryColor':'#ff7b00',
        'gray':'#fafafa',
       
      },
      fontFamily:{
        'sans':'Merriweather',
        'roboto':'Robot Condensed'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
