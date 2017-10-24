/***********************
 * @name JS
 * @author Jo.gel
 * @date 2017/10/5
 * @desc nux.config.js 配置dev，确定nuxt.js 应用生产模式还是开发模式，然后在package node 此文件
 ***********************/
const Nuxt = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

// 传入配置初始化 Nuxt.js 实例
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// 在开发模式下进行编译
if (config.dev) {
  nuxt.build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('服务器运行于 localhost:' + port)
