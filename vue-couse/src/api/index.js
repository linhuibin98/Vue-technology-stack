const axios = require('axios');

const baseURL = 'http://127.0.0.1:3000';

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config;
  }

  interceptors (instance) {  // 配置请求拦截器
    instance.interceptors.request.use(config => {
      //添加全局的loading
      //Spin.show()
      console.log(config)
      return config;
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => { // 响应拦截器
      const {data, status} = res;
      return {data, status};
    }, error => {
      return Promise.reject(error);
    })
  }

  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance)
    return instance(options);
  }
}

export default HttpRequest;