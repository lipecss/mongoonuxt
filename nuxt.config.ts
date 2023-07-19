// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Integrating Mongoose with Nuxt 3 | Notes - Felipecss',
      meta: [
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'An simple example integrating MongoDB and Mongoose with Nuxt 3 - Felipecss' },
        { property: 'og:image:width', content: '740' },
        { property: 'og:image:height', content: '300' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'twitter:site', content: '@felipecss' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['nuxt-server-utils'],
  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
})
