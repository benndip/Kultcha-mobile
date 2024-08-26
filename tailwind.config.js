/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: '#302E2E',
        greyVar1: '#F3F3F3',
        greyVar2: '#a4a4a4',
        redVar1: '#FF0909',
        golden: '#FFAA42',
        greyVar4: '#EEEEEE',
      }
    },
  },
  plugins: [],
}

