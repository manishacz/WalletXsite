import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C"
            },
            content2: {
              DEFAULT: "#F8F9FA",
              foreground: "#11181C"
            },
            content3: {
              DEFAULT: "#F1F3F5",
              foreground: "#11181C"
            },
            content4: {
              DEFAULT: "#E9ECEF",
              foreground: "#11181C"
            },
            divider: {
              DEFAULT: "rgba(17, 17, 17, 0.12)"
            },
            focus: {
              DEFAULT: "#9945FF"
            },
            foreground: {
              DEFAULT: "#11181C"
            },
            primary: {
              50: "#F4EBFF",
              100: "#E9D7FE",
              200: "#D3B0FD",
              300: "#B988FC",
              400: "#9945FF",
              500: "#8E2DE2",
              600: "#7928CA",
              700: "#6622AA",
              800: "#4C1D95",
              900: "#2E1065",
              DEFAULT: "#9945FF",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#E0F7FF",
              100: "#B8ECFE",
              200: "#8ADFFD",
              300: "#5CD2FC",
              400: "#14F195",
              500: "#00C2FF",
              600: "#0099CC",
              700: "#007399",
              800: "#004D66",
              900: "#002633",
              DEFAULT: "#14F195",
              foreground: "#000000"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#000000"
            },
            content1: {
              DEFAULT: "#121212",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#1E1E1E",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#282828",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#333333",
              foreground: "#FFFFFF"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.12)"
            },
            focus: {
              DEFAULT: "#9945FF"
            },
            foreground: {
              DEFAULT: "#FFFFFF"
            },
            primary: {
              50: "#F4EBFF",
              100: "#E9D7FE",
              200: "#D3B0FD",
              300: "#B988FC",
              400: "#9945FF",
              500: "#8E2DE2",
              600: "#7928CA",
              700: "#6622AA",
              800: "#4C1D95",
              900: "#2E1065",
              DEFAULT: "#9945FF",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#E0F7FF",
              100: "#B8ECFE",
              200: "#8ADFFD",
              300: "#5CD2FC",
              400: "#14F195",
              500: "#00C2FF",
              600: "#0099CC",
              700: "#007399",
              800: "#004D66",
              900: "#002633",
              DEFAULT: "#14F195",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}