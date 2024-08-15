/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": "1536px", // Large Desktop
      xl: "1280px", // Desktop
      lg: "1024px", // Tablet
      md: "768px", // Phone
      sm: "640px", // Small Phone (optional, included by default)
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#047AF8",
        secondary01: "#FFC105",
        secondary02: "#AC43FF",
        accent: "#F8F7F1",
        white: "#ffffff",
        neutral: {
          1: "#E6E9ED",
          2: "#CCD3DB",
          3: "#B3BEC9",
          4: "#99A8B7",
          5: "#8092A4",
          6: "#677C92",
          7: "#4D6680",
          8: "#34516E",
          9: "#1A3B5C",
          10: "#01254A",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
