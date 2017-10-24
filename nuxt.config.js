const bodyParser = require('body-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save webpack 拓展
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
      }
    },
    /**
     * 保证build 项目是只会打包一次，否则将会打包多次
     * */
    vendor: ['axios']
  },
  /**
   * 如此设置的话，将会这样调整 http://127.0.0.1:3000/app 才能访问该项目
   * */
  // router: {
  //  middleware: 'api'
  // }
  serverMiddleware: [
    bodyParser.json(),
    // session middleware
    // api middleware
    // 添加api/login & api/logout routes
    '~/api'
  ],
  // 全局配置插件
  plugins: ['~plugins/axios'],

  // css 配置css 资源
  css: [
    {
      src: '~assets/scss/common.scss', lang: 'scss'// 指定scss 文件而非sass，然而使用scss产生大量的map无效字符，后期还是需要引用scss
    }
  ]
}
