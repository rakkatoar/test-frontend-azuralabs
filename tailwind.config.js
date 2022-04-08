module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'cursive'],
        'lato': ['"Lato"', 'cursive'],
        'quicksand': ['"Quicksand"', 'cursive'],
       },
    },
    colors:{
      'primary-color':'#157599',
      'primary-color-light':'#2093BE',
      'primary-color-lighter':'#2EB3E5',
      'white':'#fff',
      'grey':'#EFEFEF',
      'dark-grey':'#EAEAEA',
      'red-primary':'#DA2525',
      'yellow-primary':'#CCBC29'
    }
  },
  plugins: [],
}
