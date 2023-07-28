/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'library': "url('../../../public/img/bg2.jpg')"
      },
      colors:{
        'creme': '#F7F4EB',
        'azulzinho': '#A1CCD1',
        'laranjinha': '#E9B384',
        'verdinho':'#7C9D96',
        'azulzinho-escuro': '#96ADAE'
      }
    },
    fontFamily:{
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    }
  },
  plugins: [],
}
