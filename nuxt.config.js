import colors from 'vuetify/es5/util/colors'
const description =
  'Portfolio website for Bryan Lampert. Web developer for modern websites and web applications.'
const title = 'Bryan Lampert Portfolio'
const url = 'https://www.bryanlampert.ca'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Web developer, Front end developer, Frontend developer, Toronto developer, Software developer'
      },
      {
        'http-equiv': 'content-language',
        content: 'en'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        name: 'og:description',
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: url
      },
      { hid: 'og:url', property: 'og:url', content: url },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_CA'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: title
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1db98a' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' },
    '~/plugins/vee-validate'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true
    },
    defaultAssets: {
      font: {
        family: 'Fira+Code'
      },
      icons: 'mdi'
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1db98a',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Webfontloader module options
   */
  webfontloader: {
    custom: {
      families: ['Fira+Code:n4,n7', 'Montserrat:n4,n7'],
      urls: [
        'href="https://fonts.googleapis.com/css?family=Fira+Code:400,700&display=swap',
        'href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
      ]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {}
  }
}
