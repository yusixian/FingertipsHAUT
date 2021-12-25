// pages/curriculum/curriculum.js
import api from '../../utils/api'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      topdata: [ 
        { weekday:'周一', date: '11/1'},
        { weekday:'周二', date: '11/2'},
        { weekday:'周三', date: '11/3'},
        { weekday:'周四', date: '11/4'},
        { weekday:'周五', date: '11/5'},
        { weekday:'周六', date: '11/6'},
        { weekday:'周日', date: '11/7'}
    ],
    sessiondata: [ 
        // 第几节
        { number: 1, startTime: '8:30', endTime: '9:15'}, 
        { number: 2, startTime: '9:20', endTime: '10:05'}, 
        { number: 3, startTime: '10:25', endTime: '11:10'}, 
        { number: 4, startTime: '11:15', endTime: '12:00'}, 
        { number: 5, startTime: '14:30', endTime: '15:15'}, 
        { number: 6, startTime: '15:20', endTime: '16:05'}, 
        { number: 7, startTime: '16:25', endTime: '17:10'}, 
        { number: 8, startTime: '17:15', endTime: '18:00'}, 
        { number: 9, startTime: '19:30', endTime: '20:15'}, 
        { number: 10, startTime: '20:25', endTime: '21:10'}, 
        { number: 11, startTime: '21:20', endTime: '22:30'}
    ],
    // 颜色数组，用于课程的背景颜色
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD", "#bcdede"],
    // 课表数组
    wlist: [   
      // 周几     第几节开始   上几节     课程名称
      // { "weekDay": 1, "startSession": 1, "duration": 2, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 1, "startSession": 5, "duration": 2, "courseInfo": "毛概@教A-301" },
      // { "weekDay": 2, "startSession": 1, "duration": 2,"courseInfo":"离散数学@教A-301"},
      // { "weekDay": 2, "startSession": 8, "duration": 2, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 3, "startSession": 4, "duration": 1, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 3, "startSession": 8, "duration": 1, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 3, "startSession": 5, "duration": 2, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 4, "startSession": 2, "duration": 4, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 4, "startSession": 8, "duration": 2, "courseInfo": "概率论@教A-301" },
      // { "weekDay": 5, "startSession": 1, "duration": 2, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 6, "startSession": 3, "duration": 2, "courseInfo": "高等数学@教A-301" },
      // { "weekDay": 7, "startSession": 9, "duration": 3, "courseInfo": "高等数学@教A-301" }
    ]
  },
  // 加载课表
  getList: async function (e) {
    let resData;
    resData = await api.getCourseList();
    console.log(resData.row);
    this.setData({
      wlist: resData.row
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1 //解决自定义导航栏不灵敏
      })
   }
    // 判断是否登录已成功
    if (app.globalData.sessionId) {
      // 加载所有课表

    } else {
      app.userLoginCallback = () => {
        if (app.globalData.sessionId) {
          // 加载所有课表
        }
      };
    }
    this.getList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})