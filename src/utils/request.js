import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送Cookie
  timeout: 5000 // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前执行某些操作

    if (store.getters.token) {
      // 让每个请求携带令牌
      // ['X-Token'] 是自定义头部信息
      // 请根据实际情况进行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 处理请求错误
    console.log(error) // 输出error
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
/**
  *如果要获取http信息，如标头或状态
  *请返回响应=>响应
*/

/**
  *通过自定义代码确定请求状态
  *这里只是一个例子
  *您还可以通过HTTP状态码来判断状态
*/
  response => {
    const res = response.data

    // 如果自定义代码不是20000，则判断为错误。
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: 非法 token; 50012: 其他用户登录; 50014: Token 过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请重新登录
        MessageBox.confirm('您已注销，可以取消以停留在此页面，或再次登录', '确认注销', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
