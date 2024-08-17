const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#1C0038',
      },
      
      
    },
  },
  plugins: [
    flowbite.plugin(),

  ]
}

