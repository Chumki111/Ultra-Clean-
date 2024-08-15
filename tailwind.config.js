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
          1: "#f8f9fa", // Replace with actual hex code for Neutral 1
          2: "#ebedef", // Replace with actual hex code for Neutral 2
          3: "#dee2e6", // Replace with actual hex code for Neutral 3
          4: "#ced4da", // Replace with actual hex code for Neutral 4
          5: "#adb5bd", // Replace with actual hex code for Neutral 5
          6: "#6c757d", // Replace with actual hex code for Neutral 6
          7: "#495057", // Replace with actual hex code for Neutral 7
          8: "#343a40", // Replace with actual hex code for Neutral 8
          9: "#212529", // Replace with actual hex code for Neutral 9
          10: "#0b0d0e", // Replace with actual hex code for Neutral 10
        },
      },
    },
  },
  plugins: [],
};
