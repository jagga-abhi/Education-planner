/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgPrimary: "#F0ECE5",
        BgSecondary: "#B6BBC4",
        TextPrimary: "#0F2167",
        TextSecondary: "#22668D",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}

