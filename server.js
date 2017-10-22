/***********************
 *@name JS
 *@author Jo.gel
 *@date 2017/10/5
 ***********************/
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')

const app = require('express')()

// Body parser，用来封装 req.body
app.use(bodyParser.json())

// 我们用这些选项初始化 Nuxt.js：
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// 生产模式不需要 build
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')
