/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend: {
      colors: {
        'primary-color': '#515357',
        'hover-color': '#e91f63',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
    },
 },
  plugins: [],
};

