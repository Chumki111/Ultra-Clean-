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
        primary: "#047AF8", // Replace with the actual hex code for Primary
        secondary01: "#FFC105", // Replace with the actual hex code for Secondary 01
        secondary02: "#AC43FF", // Replace with the actual hex code for Secondary 02
        accent: "#F8F7F1", // Replace with the actual hex code for Accent Color
        white: "#ffffff",
        neutral: {
          1: "#E6E9ED", // Replace with actual hex code for Neutral 1
          2: "#CCD3DB", // Replace with actual hex code for Neutral 2
          3: "#B3BEC9", // Replace with actual hex code for Neutral 3
          4: "#99A8B7", // Replace with actual hex code for Neutral 4
          5: "#8092A4", // Replace with actual hex code for Neutral 5
          6: "#677C92", // Replace with actual hex code for Neutral 6
          7: "#4D6680", // Replace with actual hex code for Neutral 7
          8: "#34516E", // Replace with actual hex code for Neutral 8
          9: "#1A3B5C", // Replace with actual hex code for Neutral 9
          10: "#01254A", // Replace with actual hex code for Neutral 10
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
