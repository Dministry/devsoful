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
        'Thin': ['Axiforma-Thin'],
        'Light': ['Axiforma-Light'],
        'Medium': ['Axiforma-Medium'],
        'Bold': ['Axiforma-Bold'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin', 'tw-elements/dist/plugin', '@tailwindcss/forms')
  ],
}
)
