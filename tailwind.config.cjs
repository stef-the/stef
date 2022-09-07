/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        'screen-10': '10vh',
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
}
