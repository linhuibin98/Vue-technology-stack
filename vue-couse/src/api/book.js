import HttpRequest from './app2'

const axios = new HttpRequest();

export const getBook = ({name}) => {
  return axios.request({
    url: '/book',
    method: 'post',
    data: {
      name: name
    }
  })
}