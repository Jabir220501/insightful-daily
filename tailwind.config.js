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
      width: {
        arItemB: "clamp(17.625rem, 6.275rem + 56.75vw, 74.375rem)",
        arItemS: "clamp(8.220625rem, 2.3647rem + 29.2794vw, 37.5rem);",
      },
      height: {
        arItemB: "clamp(12.6875rem, 8.1rem + 22.9375vw, 35.625rem);",
        arItemS: "clamp(6.495rem, 2.4246rem + 20.3518vw, 20.74125rem);",
        InnerImage:
          "clamp(8.220714375rem, -1.3055rem + 47.6311vw, 41.5625rem);",
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
        grBlack: "#00000085",
      },
      spacing: {
        "4/10": "40%",
        488: "30.5rem",
        544: "34rem",
      },
    },
  },
  plugins: [],
};
