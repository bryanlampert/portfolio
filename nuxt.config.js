module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bryan Lampert',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bryan Lampert Portfolio' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', defer: true }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Include css not in components
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' },
  ],
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false }
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-118135878-1'
    }]
  ],
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
