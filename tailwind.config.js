/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0B0F19',
        'cyber-white': '#F8FAFC',
        'cyber-cyan': '#00FFCC',
        'cyber-violet': '#8B5CF6',
        'cyber-gray': '#94A3B8',
      },
    },
  },
  plugins: [],
};