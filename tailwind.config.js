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
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'diagonal-three-colors': 'linear-gradient(300deg, #f97316 0%, #f97316 40%, #ea580c 40%, #ea580c 50%, #ffedd5 50%, #ffedd5 100%)',
        'diagonal-three-colors-black': 'linear-gradient(60deg, #f97316 0%, #f97316 40%, #ea580c 40%, #ea580c 50%, #000000 50%, #000000 100%)',
      },
    },
  },
  plugins: [],
};
