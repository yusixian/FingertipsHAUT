import http from './http.js' //引入
const app = getApp();
/***********信息展示相关************/
const getNewsListByID = (data) => {
  return http({
    url:'/api/news/list-by-type?newsType='+data
  })
}

const getCourseList = () => {
  return http({
    url:'/api/course/list'
  })
}
/*************用户相关************/
// 绑定教务系统
const bindingJwglxt = (data) => {
  return http({
    url:'/api/user/binding-jwglxt',
    method:'post',
    data: data
  })
}
// 将方法导出，实现复用
export default{
  getNewsListByID,
  getCourseList,
  bindingJwglxt
}