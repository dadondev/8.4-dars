import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#0079FF",
        lightGray: "#697C9A",
        lightLGray: "#4B6A9B",
        lightBlack: "#2B3442",
        lightGrey: "#F6F8FF",
        lightWhite: "#FEFEFE",
        darkBlue: "#0079FF",
        darkWhite: "#FFFFFF",
        darkBlack: "#141D2F",
        darkDBlue: "#1E2A47",
      },
      fontFamily: {
        mono: "space mono",
      },
    },
  },
  plugins: [],
};
export default config;
