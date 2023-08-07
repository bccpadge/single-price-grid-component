/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "cyan-md": "hsl(179, 47%, 52%)",
        yellow: "hsl(71, 73%, 54%)",
        gray: "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
    fontFamily: {
      Karla: "Karla, sans-serif",
    },
  },
  plugins: [],
}
