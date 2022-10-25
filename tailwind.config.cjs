/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  darkMode: 'class',
  theme: {
    minWidth: {
      'badge': '6px'
    },
    badge: ({theme}) => ({
      color: 'bg-blue-100'
    }),
    extend: {},
  },
  plugins: [],
}
