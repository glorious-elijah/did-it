/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BEE7E8",
        secondary: "#B8E8FC",
        tertiary: "#A0D2DB",
        hot: "#ff2626",
        lukewarm: "#ff8c8c",
        cold: "#8fa1f8",
        greenButton:"#6ECA09",
        redButton:"#FF5E5E"
      },
    },
  },
  plugins: [],
};
