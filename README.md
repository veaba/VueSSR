# VueSSR
vue ssr 的测试开发文档，可能会删掉这个项目

##开发笔记2017.10.23

###如何更改主机和端口配置

　[两种方式更改主机和端口配置](https://zh.nuxtjs.org/faq/host-port)
- 环境变量
```js

  "script":{
    "dev":" HOST=0.0.0.0 PORT=3333 nuxt"
  }
```
- package.json 配置 (亲测可以，起初把port 写成了post，RLG)
```js
  "config":{
    "nuxt":{
      "host":"0.0.0.0",
      "port":"3333"
    }
  }
  "scripts":{
    "dev":"nuxt"
  }
```
## Stay In Touch

- [Twitter](https://twitter.com/vuejs)
- [Blog](https://medium.com/the-vue-point)
- [Job Board](https://vuejobs.com/?ref=vuejs)
