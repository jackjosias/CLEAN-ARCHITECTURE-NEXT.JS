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
        'neon-green': '#39FF14',
        'neon-green-dark': '#32CD12',
      },
      boxShadow: {
        neon: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
      },
    },
  },
  plugins: [],
};
export default config;
