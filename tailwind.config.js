/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'sm': '640px', // Adjust breakpoint values as needed
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },

      backgroundImage: {
        'bg-image': "url('/images/bg-image1.png')",
      },
      colors: {
        primary: "#DF6951",
        secondary: "#F1A501",
        lightBlue: "#181E4B",
        lightGray: "#5E6282",
        lightGrayAlt: "#686D77",
        lightGrayAlt2: "#84829A",
        white: "#fff",
        title: "#14183E",
        subtitle: "#1E1D4C",
        lightBlack: "#080809",
        lightPink: "#8A79DF",
        navText: "#212832"
      },
      borderRadius: {
        slight: "0.625rem",
        normal: "0.3125rem",
        medium: "1.5rem",
        extraLarge: "8.0625rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}