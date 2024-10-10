/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          application: '#6D469C',
          background: colors.blueGrey.lighten5, // '#ECEFF1'
          primary: colors.purple.darken4, // '#4A148C'
          secondary: colors.deepOrange.lighten1, // '#FF5722'
        },
      },
      dark: {
        dark: true,
        colors: {
          application: '#6D469C',
          background: colors.grey.darken3, // '#424242'
          primary: colors.purple.darken4, // '#4A148C'
          secondary: colors.amber.lighten1, // '#FF5722'
        },
      },
    },
    variations: {
      colors: ['application', 'background', 'primary', 'secondary'],
      lighten: 4,
      darken: 4,
    },
  },
})