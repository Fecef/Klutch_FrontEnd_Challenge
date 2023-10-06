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
        primary1: "#228a95",
        primary2: "#187680",
        secondary1: "#ef9c4b",
        secondary2: "#fd8030",
        font: "#777777",
        whiteFixed: "#fff",
        backGround: "#f8f8f8",
      },
      fontSize: {
        1: "2.2rem",
        2: "2.5rem",
        3: "2.9rem",
        4: "3rem",
        5: "3.2rem",
        6: "4rem",
        7: "5.6rem",
        8: "6.3rem",
      },
    },
  },
  plugins: [],
};
export default config;
