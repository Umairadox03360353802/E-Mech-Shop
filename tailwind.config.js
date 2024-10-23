const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        'Dancing-Script':["Dancing Script", "cursive"],
        'Pacifico':["Pacifico", "cursive"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}