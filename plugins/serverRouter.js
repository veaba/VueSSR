/***********************
 *@name JS
 *@author Jo.gel
 *@date 2017/10/5
 ***********************/
exports.hello = function (req, res, next) {
  console.info(111)
  console.info(req)
  console.info(res)
  console.info(next)
  console.info(222)
  return 3333
}
