/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  darkMode: 'class',
  theme: {
    minWidth: {
      'px6': '6px',
      'px20': '20px'
    },
    badge: ({theme}) => ({
      color: 'bg-blue-100'
    }),
    extend: {},
  },
  plugins: [],
}
