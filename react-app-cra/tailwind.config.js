/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF7F00',
        greenLight700: '#3B7C0F',
        greenLight50: '#F3FEE7',
        yellow700: '#A15C07',
        yellow500: '#EAAA08',
        yellow50: '#FEFBE8',
        error700: '#B42318',
        error500: '#F04438',
        error50: '#FEF3F2',
        grayBlue700: '#363F72',
        grayBlue50: '#F8F9FC',
        gray700: '#344054',
        gray300: '#D0D5DD',
        gray50: '#F9FAFB',
        blueLight700: '#026AA2',
        blueLight300: '#7CD4FD',
        blueLight50: '#F0F9FF',
      },
    },
  },
  plugins: [],
}

