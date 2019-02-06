module.exports = {
  build: {
    vendor: ['axios']
  },
  head: {
    title: 'NewsMVC made with Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'NewsMVC project made with Nuxt.js.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [],
  modules: [
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: true }],
  ],
  router: {
    linkActiveClass: 'selected'
  },

}
