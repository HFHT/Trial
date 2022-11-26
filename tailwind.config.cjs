/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  darkMode: 'class',
  theme: {
    minWidth: {
      'px6': '6px',
      'px20': '20px',
      'px64': '64px'
    },
    badge: ({theme}) => ({
      color: 'bg-blue-100'
    }),
    extend: {
      screens: {
        'myApp': '1216px',
        'ws': '2560px',
        '4k': '3840px'
      },
      flex: {
        'footer': '0 0 auto'
      }
    },
  },
  plugins: [],
}
