module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'primary' : '#0E4375',
        'primary-light' : '#FF9934',
        'light-blue' : '#9EC8FA',
        'secondary' : '#5BBC93',
      },
      minHeight: {
        "1/2" : "50%"
      },
      fontFamily : {
        'body' : ['Barlow', 'sans-serif'],
      },
      translate : {
        "12px" : "12px",
        "neg12px" : "-12px"
      }

    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
