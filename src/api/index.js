import http from './http'

// 1、基础路径
const BASE_URL = 'http://127.0.0.1:3000'

//2、请求方法
export const getHomeCasual = () => http(BASE_URL + '/api/homecasual'); // 首页轮播图数据
export const getHomeNav = () => http(BASE_URL + '/api/homenav');  // 首页热门导航
export const getHomeShopList = () => http(BASE_URL + '/api/homeshoplist');  // 首页商品列表
export const getRecommend = () => http(BASE_URL + '/api/recommend')   // 获取推荐页面数据
export const getSearchGoods = () => http(BASE_URL + '/api/searchgoods')   // 获取搜索数据
