/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // secondary: "#FF6600",
        // primary: "#FF4500",
        primary: "#000F05",
        secondary: "#1799AC",
        primary_text: "#111111",
        background: "#FFFFFF",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
        inner_shadow: "inset 0 0 8px 1px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
