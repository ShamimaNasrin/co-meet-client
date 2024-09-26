/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-bg": "url('/src/assets/images/bgkey.jpg')",
        "hero-bg": "url('/src/assets/images/bannerbg.jpg')",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
