module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'regal-red': '#FF3D57',
        'regal-yellow': '#FFCA00',
        'regal-green' : '#00D748',
        'regal-black' : '#434343',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
