module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkmode: 'media',
  theme: {
    extend: {
      colors:{
        black:{
          100:"#000000",
          200:"#5B68DF"
        },
        'black-2':'#202120',
        primary:'#262946',
        'my-background-color':'#F6F7FA'
      }
    },
  },
  plugins: [],
}