import http from './http'

// 1、基础路径
const BASE_URL = 'http://127.0.0.1:300'

export const getHomeCasual = () => http(BASE_URL + '/api/homecasual ')
