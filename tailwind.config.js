/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'h-xs': {'raw': '(max-height: 390px)'},
        'h-sm': { 'raw': '(max-height: 600px)' }, // Small height
        'h-md': { 'raw': '(max-height: 800px)' }, // Medium height
      },
      backgroundImage: { 
        loginBG: "url('/login.webp')", 
        signupBG:"url('/signup.webp')"
       },
    },
  },
  plugins: [],
};
