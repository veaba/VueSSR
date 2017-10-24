/***********************
 * @name JS
 * @author Jo.gel
 * @date 2017/10/22
 * @desc 对接口暴露业务自定义状态代码的库
 ***********************/
module.exports = {
  // 授权 - 登录
  1000: '访问正常',
  1001: '无权限访问',
  1005: '越权访问',

  // 用户
  2000: '登录正常',
  2001: '尚未登录',
  2002: '用户信息错误',
  2003: '登录过期',
  2004: '登录来源不明',
  2005: '用户不存在',
  2006: '验证码错误',
  2007: '验证码过期',

  // 页面
  3000: '业务正常',
  3001: '下载路由',

  // 系统下发 后期使用webSocket 下发任务

  4000: 'websocket开启',
  4001: 'websocket关闭',
  4002: '站点访问维护',
  4003: '数据库异常',
  4004: '批量关闭菜单1'

  // 定时任务
}