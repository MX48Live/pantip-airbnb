import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#662C91",
          base: "#222222",
          light: "#717171",
          border: "#f5f5f5",
        },
        button: {
          hover: "#FAF2FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
