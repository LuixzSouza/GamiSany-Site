/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "ColorBg": "#15182D",
        "Bg-Perfil": "#ACB5FC",
        "BgInput1": "#6B75B6",
        "BgInput2": "#737BC5",
        "BgButton": "#2A2E49",
      }
    },
    textColor: {
      "SpanAzulClaro": "#9AB4DB",
      "ColorWhite": "#FFFFFF",
      "TxTBlack": "#000000",
    },
    width: {
      "LeftText": "580px",
      "TabNotaZero": "910px",
      "TabsNtZero": "280px",
      "Full": "100%"
    },
    keyframes: {
      // Animação para a mochila
      "float-backpack": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-15px)" },
      },
      // Animação para a caneta
      "float-pen": {
        "0%, 100%": { transform: "rotate(0deg) translateX(0)" },
        "50%": { transform: "rotate(15deg) translateX(30px)" },
      },
      // Animação para a pessoa
      "float-person": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" },
      },
      // Animação para a cadeira
      "float-chair": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
    },
    animation: {
      "float-backpack": "float-backpack 6s ease-in-out infinite",
      "float-pen": "float-pen 7s ease-in-out infinite",
      "float-person": "float-person 4s ease-in-out infinite",
      "float-chair": "float-chair 3s ease-in-out infinite",
    },
  },
  plugins: [],
};
