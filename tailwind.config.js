/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        dm_mono: ['DM Mono', 'monospace'],
      },
      colors: {
        neya_main: '#f8dbfc',
        neya_second: '#cca3cb',
      }
    },
  },
  plugins: [],
}

