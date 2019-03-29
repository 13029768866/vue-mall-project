import http from './http'

// 1、基础路径
const BASE_URL = 'http://154.83.12.64:3000'

//2、请求方法
export const getHomeCasual = () => http(BASE_URL + '/api/homecasual'); // 首页轮播图数据
export const getHomeNav = () => http(BASE_URL + '/api/homenav');  // 首页热门导航
export const getHomeShopList = () => http(BASE_URL + '/api/homeshoplist');  // 首页商品列表
export const getRecommend = () => http(BASE_URL + '/api/recommend')   // 获取推荐页面数据
export const getSearchGoods = () => http(BASE_URL + '/api/searchgoods')   // 获取搜索数据
export const getPhoneCode = (phone) => http(BASE_URL + '/api/send_code',{phone})   // 获取电话数据数据
export const codeLogin = (phone,code) => http(BASE_URL + '/api/login_code',{phone,code},'POST')   // 手机验证码登录
export const pwdLogin = (user_name,pwd,captcha) => http(BASE_URL + '/api/login_pwd',{user_name,pwd,captcha},'POST')   // 用户名密码登录
export const getUserInfo = () => http(BASE_URL + '/api/user_info')   // 获取用户状态
export const getLogout = () => http(BASE_URL + '/api/logout'); //退出登录
