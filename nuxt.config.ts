// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxt/ui'
  ],
  colorMode: {
    preference: 'dark'
  },
  devtools: { enabled: true }
})
