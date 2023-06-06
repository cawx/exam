/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cherry': '#D41217',
        'comeon': '#8DB524',
        'restauran': '#8961A6',
        'ygg': '#F39332',
        'gamelounge': '#41BFED',
        'xcaliber': '#7B858A',
        'greydark': '#C8C8CA',
        'greylight': '#E7E8E8',
      }
    },
  },
  plugins: [],
}
