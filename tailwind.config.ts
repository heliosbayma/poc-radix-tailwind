import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        // Base color definitions (as hex, RGB, etc.)
        'gray-100': '#f5f5f5',
        'gray-900': '#111827',
        'brand-primary': '#3498db',
        // ...
        mainWhite: '#FFFFFF',
        mainBlack200: '#B8B8B8',
        mainBlack900: '#131313',
        mainBlue50: '#EBF5FF',
        mainBlue500: '#1F8FFF',
        mainBlue700: '#0C74DB',
        secondaryGrey50: '#F8F8F9',
        secondaryGrey100: '#F1F2F3',
        secondaryGrey200: '#E4E7E9',
        secondaryGrey300: '#C7CED1',
        secondaryGrey400: '#9CA5A9',
        semanticError100: '#FFD2C2',
        semanticError500: '#FF4300',
        semanticError900: '#CA2A00',
        brandUranus100: '#C2E6FF',
      },
      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
