module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        720: "45rem",
        320: "20rem",
        960: "60rem",
      },
      maxHeight: {
        690: "43.125rem",
      },
      height: {
        690: "43.125rem",
      },
      screens: {
        sm: "320px",
        md: "1024px",
        lg: "1440px",
        xl: "1920px",
      },
      fontSize: {
        logo: "clamp(1.09375rem, 0.692rem + 2.0089vw, 2.5rem);",
      },
      backgroundImage: {
        "auth-pattern": "url('/img/auth-pattern.png')",
        "bg-pattern": "url('/img/bg-pattern.png')",
      },
      colors: {
        yellow: "#FFC017",
        cremeBg: "#F1DFD5",
        cremeTxt: "#A49993",
        green: "#13ce66",
      },
    },
  },
  plugins: [],
};
