export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap'}
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src: '~/assets/css/normalize.css', lang: 'css'},
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/app-components.js',
    { src: './plugins/vue-carousel.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    vueI18nLoader: true,
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  
    },
    locales: [
      {
        code: 'ru',
        name: 'Русский',  
        iso: 'ru-Ru',
        file: 'ru.js',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js',
      }
    ],
    defaultLocale: 'ru',
    langDir:'assets/lang/',
    lazy:true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
