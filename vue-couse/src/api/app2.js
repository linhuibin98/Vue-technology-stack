import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

class HttpRequest {
  constructor (baseUrl=baseURL) {
    this.baseUrl = baseUrl;
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      header: {
        //
      }
    }
    return config;
  }

  interceptors (instance) {
    instance.interceptors.request.use((config) => {
      return config
    })

    instance.interceptors.response.use((res) => {
      const {data, status} = res;
      return {data, status};
    })
  }

  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}

export default HttpRequest;