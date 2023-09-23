/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      desktop: '1440px',
    },
    colors: {
      orange: '#e38826',
      cyan: '#006970',
      darkCyan: '#004241',
      white: 'hsla(0, 0%, 100%, 0.75)',
      lightGray: 'hsl(0, 0%, 95%)',
    },
    fontFamily: {
      'bigShoulders': ['"Big Shoulders Display"'],
      'lexendDeca': ['"Lexend Deca"'],
    },
    extend: {
      
    },
  plugins: [],
}}