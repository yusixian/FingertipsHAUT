// pages/mine/mine.js
const app = getApp()
import api from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: true,
    auth: false,      // 判断该用户是否认证绑定过

    password: null,
    studentId: null,
    verifyCode: null,
    formdata: {}
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },  // 实时获取input的数据值
  diseaseStuIDInput: function(e) {
    this.setData({
      studentId: e.detail.value,
    })
  }, // 实时获取input的数据值
  diseasePWInput: function(e) {
    this.setData({
      password: e.detail.value,
    })
  }, // 实时获取input的数据值
  diseaseVCInput: function(e) {
    this.setData({
      verifyCode: e.detail.value,
    })
  },
  commitbinding(e) {
    var that = this;
    var data = {
      name: this.data.userInfo.name,
      password: this.data.password,
      studentId: this.data.studentId,
      verifyCode: this.data.verifyCode
    }
    api.bindingJwglxt(data)
    console.log(data)
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