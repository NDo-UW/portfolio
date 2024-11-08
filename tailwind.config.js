/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/contact.js", // Adjust paths as needed
    "./src/components/carousel.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

