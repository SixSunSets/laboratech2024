/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paleta de colores
        pRed: "#e2231b",
        pGray: "#262a2e",
        pOrange: "#f7a941",
        pBlue: "#0066cc",
        pPurple: "#6b21a8",
        pLightGray: "#e3e3e3",
        pBlueHover: "#00488f",
        pRedHover: "#8f110c",
        pOrangeHover: "#e89e3c",
        pPurpleHover: "#491672",
      },
    },
  },
  plugins: [],
};
