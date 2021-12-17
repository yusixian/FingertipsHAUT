// pages/mine/mine.js
const app = getApp()
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    stuId: "test",
    hasUserInfo: false,
    canIUseGetUserProfile: true,
    auth: false      // 判断该用户是否认证绑定过
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  async onShow() {
    //解决自定义导航栏不灵敏
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3 
      })
    }
    this.checkUser();
    var that = this;
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    });
    // let data = await api.getCount();
    // this.setData({
    //   count : data.count
    // });
    // console.log(this.data.count);
    // 获取用户信息
    // if(app.globalData.roleId == 1){
    //   that.setData({
    //     auth: true
    //   })
    //   console.log("roleId:"+app.globalData.roleId);
    //  }
     // wx.request({
    //     url: app.globalData.domainName + '/api/user/get',
    //     header: {
    //       'content-type': 'application/json',
    //       'Cookie': 'JSESSIONID=' + app.globalData.sessionId
    //     },
    //     data: {},
    //     method: 'get',
    //     success: (rec) => {
    //       console.log(rec);
    //       that.setData({
    //         authInfo:rec.data.data.userInfo
    //       })
    //     },
    //     fail: () => {
    //       wx.hideLoading()
    //       wx.showModal({
    //         title: '提示',
    //         content: '服务器连接失败，请检查网络',
    //       })
    //     }
    //   })

  },
  onLoad() {
    this.checkUser();
  },
  checkUser() {
    // 判断用户是否认证绑定过
    if (app.globalData.roleId == 1) {
      this.setData({
        auth: true
      })
      console.log("已绑定学生");
    } else console.log("访客");
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res);
      }
    })
  }
  // , goFeedback() {
  //   wx.navigateTo({
  //     url: '../me_inner/feedback/feedback',
  //   })
  // },
  // goAuth() {
  //   wx.navigateTo({
  //     url: '../me_inner/register/register',
  //   })
  // },
  // goUpdate() {
  //   wx.navigateTo({
  //     url: '../me_inner/update/update',
  //   })
  // }
})