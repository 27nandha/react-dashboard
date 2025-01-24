/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7267ee",
        customPurplelight: "#bab5f3",
        customh1: "#56555e",
        grayishBlue: "#99999a",
      },
    },
  },
  plugins: [],
};
