/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#333333",
        gray: {
          100: "#1a2541",
          200: "#1a2440",
          300: "#1c1c1c",
        },
        ghostwhite: "#f3f4f9",
        black: "#000",
        white: "#fff",
        mediumspringgreen: "#00e5a1",
        mediumseagreen: {
          100: "#00cc87",
          200: "#0ea57a",
        },
        darkgray: {
          100: "#a5a5a5",
          200: "rgba(165, 165, 165, 0.31)",
        },
        aliceblue: "#ebfaff",
        gainsboro: {
          100: "#e6e6e6",
          200: "#e3e3e3",
          300: "rgba(230, 230, 230, 0.09)",
        },
        mediumaquamarine: "#29bf94",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        gabriela: "Gabriela",
        "new-york-large": "'New York Large'",
        "sharpe-personal": "'Sharpe PERSONAL'",
      },
      borderRadius: {
        "41xl": "60px",
        "16xl": "35px",
        mid: "17px",
        "4xs": "9px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "9xl": "28px",
      xs: "12px",
      "3xs": "10px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "3xl": "22px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "5xl": "48px",
      lgi: "19px",
      mini: "15px",
      "lg-6": "18.6px",
      "smi-9": "12.9px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
