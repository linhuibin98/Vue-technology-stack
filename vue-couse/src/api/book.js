import HttpRequest from './index'

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