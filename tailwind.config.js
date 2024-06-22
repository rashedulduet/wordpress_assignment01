// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}',
    // Add any other paths where you use Tailwind CSS
  ],
  theme: {
    fontFamily: {
      'inner': ["Inter", "sans-serif"]     
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /mt-\[.*?\]/,
    },
  ],
}
