module.exports = function (router, koaBody) {
  router.post('/api/apitest', koaBody(), async (ctx, next) => {
    const Mock = require('mockjs')
    const data = Mock.mock({
      "code": 1000000,
      "msg": "成功",
      "data": {
        "appName": "91极速购",
        "companyName": "杭州贝汇科技有限公司",
        "official": "91jsgo.com",
        "regisTime": "2018年05月16日"
      }
    })

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ctx.body = data
        resolve(next())
      }, 2000)
    })
  })

  router.post('/channel/extension', koaBody(), async (ctx, next) => {
    const Mock = require('mockjs')
    const data = Mock.mock({
      "code": 1000000,
      "msg": "该手机号已注册",
      "data": {
        "id": "05b3bf3e2af045718a61351f7d7a37e1",
        "name": "测试的1321313",
        "ossUrl": null,
        "gmtCreate": 1526031618000,
        "gmtModify": 1526031618000,
        "accessUrl": "http://47.98.115.89:8081/s4/template/show",
        "status": 1,
        'channelName|1': ['渠道1', '渠道2', '渠道3'], // 渠道名称
        img1: 'https://zhongyang-fws.oss-cn-hangzhou.aliyuncs.com/template/h5/edd35955b05744299feed62ee7741c1f/part1.png', // 头部背景
        img2: 'https://zhongyang-fws.oss-cn-hangzhou.aliyuncs.com/template/h5/4343cf198c95466288b520c3c2cb5fe0/part1.png', // 底部背景
        img3: '', // 用户已存在弹窗背景
        img4: '', //注册成功弹窗背景
        img5: 'https://zhongyang-fws.oss-cn-hangzhou.aliyuncs.com/template/h5/22ce225d912a4ea697906a39ba4c9d22/part1.png', // 表单背景
        img6: 'https://zhongyang-fws.oss-cn-hangzhou.aliyuncs.com/template/h5/198413e93cc9476894d69e9f7b6bc04c/part1.png', // 立即领取按钮背景
      }
    })
    ctx.body = data
    await next()
  })
}