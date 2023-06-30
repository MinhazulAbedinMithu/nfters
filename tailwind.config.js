/** @type {import('tailwindcss').Config} */
import integralCF from "./assets/integralCF-Regular.woff";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        integral: ["IntegralCF", "sherif"],
        dmSans: ["DM_Sans"],
      },
    },
  },
  plugins: [],
};
