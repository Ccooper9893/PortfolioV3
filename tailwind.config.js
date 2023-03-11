/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2d2d2d",
          secondary: "#f59e0b",
          accent: "#e5e7eb", 
          neutral: "#202020",  
          info: "#9ca3af",  
          success: "#16a34a",    
          warning: "#facc15",   
          error: "#991b1b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
