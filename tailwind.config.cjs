/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
}
