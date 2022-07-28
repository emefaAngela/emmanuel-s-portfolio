/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        lightash:'#EEF2F3',
        lightwhite:'#FCFCFC',
        deepblue:'#091E3A',
        lightblue:'#2D9EE0',
        ash:'#4F5268',
        white:'#FFFFFF',
        vectorblue:'rgba(39, 117, 202, 0.2)',
        vectororange:'rgba(249, 170, 75, 0.28)',
        lightviolet:'#F3F2FD',
        gradient1:'#091E3A ',
        gradient2:'#2F80ED ',
        gradient3:'#2D9EE0'



      }
    },
  },
  plugins: [],
}
