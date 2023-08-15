/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#07A7E3',
          200: '#24CCED',
          900: '#22D8F1'
        }
      },
      fontFamily: {
        'Bebas': ['BebasNeue-Regular'],
        'Monserat': ['Monserat-Regular'],
        'Medium': ['Axiforma-Medium'],
        'Bold': ['BebasNeue-Regular'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin', 'tw-elements/dist/plugin', '@tailwindcss/forms', '@tailwindcss/typography')
  ],
}
)
