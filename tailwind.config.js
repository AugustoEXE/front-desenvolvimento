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
        'creminho': '#F7F4EB',
        'azulzinho': '#A1CCD1',
        'laranjinha-clarinho': '#edc19a',
        'laranjinha': '#E9B384',
        'laranjinha-escurinho': '#CB9C74',
        'verdinho':'#7C9D96',
        'azulzinho-escurinho': '#96ADAE',
        'verdinho-escurinho': '#5F8084'
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

