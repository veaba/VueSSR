/**
 *@desc API Router
 * @desc 该文件的更改需要重启run dev 任务，否则会失败
 * */
const express = require('express')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

/**
 * @db design 数据库设计
 * */
const db = {
  // 200 304 401 403 500 501 503 404 http status
  // 1001 无访问权限
  // 1002 token 过期
  // 1003 token 无效
  code: 1, // 1代表获取正常
  data: {

  },
  msg: 'success' // msg: success  获取成功返回的消息 msg: 由api_msg 规则返回

}
console.info(db)

router.get('/test', (req, res) => {
  res.json({test: 'test'})
})

router.post('/post', (req, res) => {
  res.json({post: 'post'})
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
