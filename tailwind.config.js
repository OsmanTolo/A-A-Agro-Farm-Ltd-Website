// tailwind.config.js
import aspectRatio from "@tailwindcss/aspect-ratio"; // Import the plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // The main HTML shell (usually in your project root or public for Vite)
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          /* other fallback fonts */ "sans-serif",
        ],
        display: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          /* other fallback fonts */ "sans-serif",
        ],
      },
      colors: {
        // Your previously defined color palette
        emerald: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      spacing: {
        navbarHeight: "4rem", // Corresponds to h-16
      },
      minHeight: {
        "screen-minus-navbar": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [
    aspectRatio, // Use the imported plugin
  ],
};
