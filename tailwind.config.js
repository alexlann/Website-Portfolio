/** @type {import("tailwindcss").Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["fields", ...defaultTheme.fontFamily.serif],
      body: ["apparat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "black": "#2B2B29",
        "dark-gray": "#403F3B",
        "gray": "#A2A09B",
        "light-gray": "#DBD9D3",
        "dark-white": "#EFF5F1",
        "white": "#ffffff",
        "light-green": "#CEDED4",
        "green": "#81BF9A",
        "dark-green": "#649A7A"
      },
    },
  },
  safelist: [
    "bg-black",
    "bg-dary-gray",
    "bg-gray",
    "bg-light-gray",
    "bg-white",
    "bg-light-green",
    "bg-green",
    "w-24",
    "h-24",
    "w-20",
    "h-20",
  ],
  plugins: [],
}
