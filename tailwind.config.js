/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes :[
      {
        doctortheme:{
          primary:'#0FCFEC',
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

