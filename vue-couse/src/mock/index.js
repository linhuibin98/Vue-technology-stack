import Mock from 'mockjs'
import {getUserInfo} from './response/user'

//正则表达式
//Mock.mock(), 第一个参数为需要拦截的请求路径, 第二参数为需要拦截的请求方式, 第三个参数是模拟的返回值,可以是对象或者函数（返回对象）
// Mock.mock(/\/book/, {name: 'sadfasdfsd'})
Mock.mock(/\/book/, getUserInfo);

export default Mock;