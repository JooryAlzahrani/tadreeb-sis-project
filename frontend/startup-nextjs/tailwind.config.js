/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#001220",
        dark: "#1E293B",
        primary: "#0A84FF",
        yellow: "#FBAE3C",
        "body-color": "#5F7181",
        "body-color-dark": "#A1AEBA",
        "gray-dark": "#1E232E",
        "gray-light": "#E6EDF3",
         stroke: "#E6EDF3",
        "stroke-dark": "#353943",
        "bg-color-dark": "#E6EDF3",
      },

      boxShadow: {
  signUp: "0 8px 32px rgba(31, 38, 135, 0.37)",   // soft, colored shadow
  one: "0 4px 30px rgba(0, 0, 0, 0.1)",          // subtle diffused shadow
  two: "0 8px 24px rgba(0, 0, 0, 0.15)",         // larger, soft shadow
  three: "0 12px 40px rgba(0, 0, 0, 0.2)",       // depth shadow
  sticky: "inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)",   // inner highlight for glass
  "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)",
  "feature-2": "0 8px 32px rgba(255, 255, 255, 0.1)",    // soft glow
  submit: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "submit-dark": "0 4px 20px rgba(255, 255, 255, 0.1)",
  btn: "0 4px 15px rgba(255, 255, 255, 0.1)",
  "btn-hover": "0 4px 15px rgba(255, 255, 255, 0.2)",
  "btn-light": "0 4px 15px rgba(255, 255, 255, 0.15)",
},

dropShadow: {
  three: "0 8px 24px rgba(255, 255, 255, 0.1)",  // soft glass glow
},

    },
  },
  plugins: [],
};
