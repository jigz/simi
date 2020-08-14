const { colors: tailwindColors } = require('tailwindcss/defaultTheme')
const { colors } = require('./src/styles/colors')
const { themes } = require('./src/styles/themes')

const themesColors = Object.values(themes)
  .reduce((acc, theme) => [...new Set([...acc, ...Object.values(theme)])], [])
  .join('|')

const themesRgx = new RegExp(`(text|bg)-(${themesColors})`)

//const colorsRgx = new RegExp(`(text|bg)-(${Object.keys(colors).join('|')})`)

module.exports = {
  purge: {
    content: ['./**/*.tsx'],
    options: {
      whitelistPatterns: [themesRgx],
    },
  },
  theme: {
    extend: {
      colors: {
        ...tailwindColors,
        ...colors,
      },
      fontFamily: {
        quicksand: ['Quicksand', 'Consolas'],
        montserrat: ['Montserrat', 'Lato'],
      },
    },
  },
  variants: {},
  plugins: [],
}
