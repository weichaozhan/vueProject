const Koa = require('koa')
// 使用router
const Router = require('koa-router')
const Boom = require('boom')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const app = new Koa()
const router = new Router()
const port = require('../config/backend.server.config').mockPort

app.use(router.routes())
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}))
// 使用bodyparser 解析get,post的参数
app.use(bodyParser())

// 模拟数据返回

// 测试
const testBack = require('./routes/test')

testBack(router, koaBody)

// log error
app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})

app.listen(port, () => {
  console.log('mock server listening on port ' + port)
})