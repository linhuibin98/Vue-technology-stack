import Mock from 'mockjs'

/*
 Mock.mock(template): 
 'name|min-max': string   通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
    例： 'str | 2-4': "lll", 属性名：str ，初始值'lll'随机重复2-4次
 'name|+1': number  属性值自动加 1，初始值为 number
    例： 表达式 'age|+2': 18, 此后返回的age都会在初始值18上加2,再返回
  'name|min-max': number 
    例： 'num|4-10':0, 生成4-10的随机数再返回
'name|min-max.dmin-dmax': number   生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位
    例：'float|3-10.2-5':0  
'name|1': boolean   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
    例： 'bool|1': true  返回true的概率为 1/2
'name|min-max': value   随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)
    例： 'bool2|1-9': true  返回true的概率为 9/10
'name|count': object  从属性值 object 中随机选取 count 个属性
    例： 'obj|2': {a: 'aa', b: 'bb', c: 'cc'}
    ..........
*/

/*
生成规则 有 7 种格式：
'name|min-max': value
'name|count': value
'name|min-max.dmin-dmax': value
'name|min-max.dcount': value
'name|count.dmin-dmax': value
'name|count.dcount': value
'name|+step': value
*/

export const getUserInfo = (options) => {
  const template = {
    'name|2-4': 'llhhbb'
  }
  return Mock.mock(template);
  //返回结果可能是：{name: 'llhhbbllhhbbllhhbb'}, 属性值重复2-4次返回
}