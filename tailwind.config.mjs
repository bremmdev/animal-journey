import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sacramento", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "red-brown": "#6e1005",
        sand: "#dcc9a3",
      },
      keyframes: {
        bouncy: {
          "0%, 100%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      animation: {
        bouncy: "bouncy 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
