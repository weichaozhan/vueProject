import axios from 'axios'
import qs from 'qs'

/**
 * @description 构造axios请需要的配置
 * @param {Object} config 请求基本配置
 */
const buildConfigRequest = (config) => {
  const {
    // 是否为上传文件的方式
    uploadType,
    // 请求 url
    url,
    // 请求方式 'get', 'post', 'put', 'delete'
    method,
    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params,
    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    data,
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout
  } = config
  // 判断是否为上传模式设置不同的 content-type
  const contentType = uploadType ? {} : { 'Content-Type': 'application/x-www-form-urlencoded' }
  const configRequest = {
    headers: {
      ...contentType
    },
    url: url || '/',
    method: method || 'post',
    params: params || '',
    timeout: timeout || 10000
  }

  // 判断是否为 get 请求
  if (!method || method.toLowerCase() !== 'get') {
    configRequest.data = data
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    configRequest.transformRequest = (data) => {
      let dataResolve = null

      // 判断是否为上传文件的请求，不是的话序列化请求参数，是的话使用formData上传文件
      if (!uploadType) {
        dataResolve = qs.stringify(data, { allowDots: true })
      } else {
        const formData = new FormData()

        for (let item in data) {
          formData.append(item, data[item])
        }
        dataResolve = formData
      }
      return dataResolve
    }
  } else if (!params) {
    // 没有 URL 参数，设置 data 为 URL 参数
    configRequest.params = data || ''
  }

  return configRequest
}

/**
 * @description axios 请求封装
 * @param {Object} config 请求基本配置 
 * {
 *  // 是否为上传文件的方式
 *  uploadType,
 * 
 *  // 请求 url
 *  url,
 * 
 *  // 请求方式 'get', 'post', 'put', 'delete'
 *  method,
 *  
 *  // `params` 是即将与请求一起发送的 URL 参数
 *  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
 *  params,
 *  
 *  // `data` 是作为请求主体被发送的数据
 *  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
 *  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
 *  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
 *  // - 浏览器专属：FormData, File, Blob
 *  data,
 *  
 *  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
 *  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
 *  timeout
 *  
 *  // 成功回调
 *  sucFunc,
 *  
 *  // 失败回调
 *  failFunc,
 *  
 *  // 错误回调
 *  errFunc,
 *  
 *  // 请求结束回调，不管成功、失败或是错误都会调用
 *  completeFunc
 * }
 */
export default (config = {}) => {
  const {
    // 成功回调
    sucFunc,
    // 失败回调
    failFunc,
    // 错误回调
    errFunc,
    // 请求结束回调，不管成功、失败或是错误都会调用
    completeFunc
  } = config
  const configRequest = buildConfigRequest(config)

  // 返回 Promise 对象，方便使用 Promise.all，Promise.race
  return axios.request(configRequest)
    .then(response => {
      const res = response.data

      completeFunc && completeFunc()

      if (res.code === 1000000) {
        sucFunc && sucFunc(res)
      } else {
        failFunc ? failFunc(res) : alert(`错误码：${res.code}，${res.msg}`)
      }

      return res
    })
    .catch((err) => {
      completeFunc && completeFunc()
      errFunc ? errFunc() : console.error('请求错误：', err)

      throw err
    })
}