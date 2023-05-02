/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eaf8ff",
          100: "#daf1ff",
          200: "#bce5ff",
          300: "#93d1ff",
          400: "#68b2ff",
          500: "#4591ff",
          600: "#256cff",
          700: "#1a5ae8",
          800: "#184dbb",
          900: "#1d4692",
          950: "#071023", //primary
        },
        secondary: {
          50: "#fff6ed",
          100: "#ffebd5",
          200: "#fed4aa",
          300: "#feb473",
          400: "#fc8c3e", //primary
          500: "#fa6a15",
          600: "#eb4f0b",
          700: "#c33a0b",
          800: "#9b2f11",
          900: "#7d2911",
          950: "#431207",
        },
      },
    },
  },
  plugins: [],
};
