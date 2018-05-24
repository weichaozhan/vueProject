import request from '@/global/request'

export const testAPI = (data, sucFunc, failFunc, errFunc, completeFunc) => {
  return request({
    url: '/api/apitest',
    data: {
      a: new File([new Blob(['sdagf'])], 'file name')
    },
    uploadType: true,
    sucFunc: sucFunc
  })
}