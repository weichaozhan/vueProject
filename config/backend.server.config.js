/**
 * mock数据服务端口
 * 
 * proxy 代理配置
 */

module.exports = (function() {
  // mock server 端口
  const port = 9091
  // 要做代理的 api 前缀
  const prefixAPI = ['/api', '/channel']
  //  代理配置
  const proxyTable = {}
  const target = `http://localhost:${port}`

  for (let i = 0; i < prefixAPI.length; i ++) {
    proxyTable[prefixAPI[i]] = {
      target: target,
      changeOrigin: true,
      ws: true
    }
  }

  
  return {
    mockPort: port,
    proxyTable: proxyTable
  }
})()