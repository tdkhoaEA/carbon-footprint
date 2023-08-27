/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
          colors: {
              primary: '#09ADBB',
              secondary: '#001F60',
              textColor: '#333333',
              textInfo: '#84C1CD',
              buttonDisable: '#D9DDE7',
              textDisable: '#808FB0',
              textError: '#E11D48',
              backgroundError: '#FFE4E6',
              borderError: '#FDA4AF',
              signInBtn: '#FF9921',
              blue: '#0297EB',
              orange: '#FC9317',
              green: '#15CB89',
              red: '#ED6767',

          },
          keyframes: {
              swipe : {
                  '0%': { transform: 'translate(0)'},
                  '100%': {
                      transform: 'translate(-100%)'
                  }
              }
          },
          animation : {
              'spin-slow-30': 'spin 30s linear infinite',
              'spin-slow-25': 'spin 25s linear infinite',
              'spin-slow-10': 'spin 10s linear infinite',
              'marquee-infinite' : 'swipe 14s linear infinite',
          },
      },
      // screens: {
      //     'small-mobile': '400px',
      //     'mobile': '640px',
      //     // => @media (min-width: 640px) { ... }
      //     'tablet': '768px',
      //     // => @media (min-width: 768px) { ... }
      //     'screen': '1024px',
      //     // => @media (min-width: 1024px) { ... }
      //     'wide': '1280px',
      //     // => @media (min-width: 1280px) { ... }
      //     '2xl': '1536px',
      //     // => @media (min-width: 1536px) { ... }
      // }
  },
  plugins: [],
};
