module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#1e1e1e",
      darkSecondary: "#262626",
      blue: "#007BFF",
      gray: "#EDEDED",
      graySecondary: "#E6E6E6",
      orange: "#ff4f32",
      orangeSecondary: "#FF5C00",
      orangeDark: "#c2410c",
      darkBlue: "#224BB7",
      gray2: "#EBEDF2",
      gray3: "#CDCDD1",
      gray4: "#69696B",
      gray5: "#E6E6EB",
      gray6: "#5F5F5F",
      gray7: "#DCE0E8"
    },
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        pro: ["SF Pro Display", "sans-serif"],
        mono: "Roboto Mono, sans-serif",
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        "425xs": "425px",
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1690px",
      },
    },
    plugins: [
      require('autoprefixer')
    ],
  },
};
