import http from './http.js' //引入
const app = getApp();
/***********信息展示相关************/
const getNewsListByID = (data) => {
  return http({
    url:'/api/news/list-by-type?newsType='+data
  })
}
// 将方法导出，实现复用
export default{
  getNewsListByID
}