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
        "primary-brown": "#6e1005",
        "primary-blue": "#0504aa",
        "bright-brown": "#99533F",
        "bright-blue": "#0047ab",
        "bright-sky": "#214761",
        "pale-brown": "#ead3ac",
        "pale-blue": "#c4d0ff",
        "faded-amber": "#fee9a6",
        "faded-blue": "#bfdbfe",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        paws: "url('/paws.svg')",
        drops: "url('/drops.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
