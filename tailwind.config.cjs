/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e1418",
        secondary: {
          primary: "#152b38",
          secondary: "#5e2ffa",
        },
        tertiary: {
          primary: "#081849",
          secondary: "#39db90",
        },
        quaternary: {
          primary: "#0d2c57",
          secondary: "#72cdca",
        },
        quinary: {
          primary: "#2e1865",
          secondary: "#ec7c85",
        },
      },
    },
  },
  plugins: [],
};
