import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-keen-slider',
    '@vueuse/nuxt'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  icon: {
    customCollections: [
      {
        prefix: 'bl-icon',
        dir: './assets/icons',
      }
    ]
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dggq7pngh/image/upload/',
    }
  }
})