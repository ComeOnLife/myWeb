import axios from "axios";
import { ElMessage, ElLoading } from 'element-plus'

export const baseURL = "/api"
// export const baseURL = "http://43.138.174.116:8080"

axios.defaults.timeout = -1
axios.defaults.baseURL = baseURL

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url: string, params: object = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
* 封装post请求
* @param url
* @param data
* @returns { Promise }
*/
export function post(url: string, data: object = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

let Loading:any = null
interface User {
  username: string,
  token: string
}

//请求拦截器
axios.interceptors.request.use(
  config => {
    if(config.url == "/login"){
      Loading = ElLoading.service({
        text: '加载中...',
        background: 'rgba(0, 0, 0, .8)'
      })
    }else {
      Loading = ElLoading.service({
        text: '加载中...',
        background: 'rgba(0, 0, 0, .1)'
      })
    }
    //token
    const user:User = JSON.parse(localStorage.getItem("userinfo")!)
    if(user?.token.length) {
      config.headers.token = user.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

//响应拦截器
axios.interceptors.response.use(
  response => {
    console.log(response);
    if(response.data.code == 4003) {
      ElMessage.error('未登录,无法操作')
      localStorage.removeItem("userinfo") //失效了
    }
    Loading.close()
    return response;
  },
  error => {
    console.log('网络出错日志：', error);
    Loading.close()
    if (error && error.response) {

      switch (error.response.status) {
        case 400:
          ElMessage.closeAll()
          ElMessage.error('错误请求')
          return error;
        case 401:
          ElMessage.closeAll()
          ElMessage.error('未授权，请重新登录')
          return error;
        case 403:
          ElMessage.closeAll()
          ElMessage.error('拒绝访问')
          return error;
        case 404:
          ElMessage.closeAll()
          ElMessage.error('请求错误,未找到该资源')
          return error;
        case 405:
          ElMessage.closeAll()
          ElMessage.error('请求方法未允许')
          return error;
        case 408:
          ElMessage.closeAll()
          ElMessage.error('请求超时')
          return error;
        case 500:
          ElMessage.closeAll()
          ElMessage.error('服务器端出错')
          return error;
        case 501:
          ElMessage.closeAll()
          ElMessage.error('网络未实现')
          return error;
        case 502:
          ElMessage.closeAll()
          ElMessage.error('网络错误')
          return error;
        case 503:
          ElMessage.closeAll()
          ElMessage.error('服务不可用')
          return error;
        case 504:
          ElMessage.closeAll()
          ElMessage.error('网络超时')
          return error;
        case 505:
          ElMessage.closeAll()
          ElMessage.error('http版本不支持该请求')
          return error;
        default:
          ElMessage.closeAll()
          ElMessage.error(`连接错误${error.response.status}`)
          return error;
      }
    } else {
      ElMessage.closeAll()
      ElMessage.error("连接到服务器失败")
      return error;
    }
  }
)