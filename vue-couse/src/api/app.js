import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

function HttpRequest (baseUrl = baseURL) {
  this.baseURL = baseUrl;
  this.queue = {};  //队列
}

HttpRequest.prototype.getInsideConfig = function () {
  const config = {
    baseURL: this.baseURL,
    headers: {
      //
    }
  }
  return config;
}

HttpRequest.prototype.interceptors = function (instance) {
  instance.interceptors.request.use(config => { // 请求拦截器
    console.log(config);
    return config;
  }, error => {
    return Promise.reject(error);
  })

  instance.interceptors.response.use(res => {
    console.log(res);
    return res;
  }, error => {
    return Promise.reject(error);
  })

}

HttpRequest.prototype.request = function (options) {
  const instance = axios.create();
  options = Object.assign(this.getInsideConfig(), options);
  this.interceptors(instance);
  return instance(options);
}

export default HttpRequest;