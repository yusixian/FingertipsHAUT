// app.js
App({
  globalData:{
    userInfo: null,
    sessionId: null,
    domainName: "http://localhost:8001",
    roleId: -1
  },
  onLaunch() {
    var that = this;
    that.flushSession();
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        let app = this;
        if (res.code) {
          //就是在这里发起网络请求，使用wx.request()，将登陆态发送给自家的服务器上
          wx.request({
            url: app.globalData.domainName + '/wxLogin',
            data: {
              code: res.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              wx.hideLoading()
              console.log(res);
              if (res.data.success) {
                app.globalData.sessionId = res.data.data.sessionId;
                app.globalData.roleId = res.data.data.roleId;
                console.log(app.globalData);
                wx.showToast({
                  title: '登录成功',
                  icon: '',
                  duration: 500,
                })
              } else {
                if (res.data.code == 2001) {
                   wx.showModal({
                        title: '提示',
                        content: '登录失败，请联系负责人',
                  })
                } else {
                  wx.showModal({
                    title: '提示',
                    content: '登录失败，请稍后重试',
                  })
                }
              }
              if (that.userLoginCallback) { //这个函数名字和你定义的一样即可
                that.userLoginCallback() //执行定义的回调函数
                }
            },
            fail: function () {
              wx.hideLoading()
              wx.showModal({
                title: '提示',
                content: '服务器连接失败，请检查网络',
              })
            }
          })
        } else {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '服务器连接失败，请检查网络',
          })
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function () {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '服务器连接失败，请检查网络',
        })
      },
      complete: function () {
        console.log("已启用wx.login函数");
      }
    })
    // 版本更新专用
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  flushSession() {
    var that = this;
    setInterval(that.flush,25*60*1000)
  },
  flush(){
    console.log("刷新session一次");
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    let app = this;
    wx.login({
      success: res => {
        console.log(res);
        let app = this;
        if (res.code) {
          wx.request({
            url: app.globalData.domainName + '/wxLogin',
            data: {
              code: res.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              wx.hideLoading()
              console.log(res);
              if (res.data.success) {
                app.globalData.sessionId = res.data.data.sessionId;
                if (app.userLoginCallback()) {
                  app.userLoginCallback();
                }
              } else {
                wx.showModal({
                  title: '提示',
                  content: '登录失败，请稍后重试',
                })
              }
            },
            fail: function () {
              wx.hideLoading()
              wx.showModal({
                title: '提示',
                content: '服务器连接失败，请检查网络',
              })
            },
          })
        } else {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '服务器连接失败，请检查网络',
          })
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function () {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '服务器连接失败，请检查网络',
        })
      },
    })
  },
  myLogin() {
    console.log("执行myLogin");
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    let app = this;
    wx.login({
      success: res => {
        console.log(res);
        let app = this;
        if (res.code) {
          wx.request({
            url: app.globalData.domainName + '/wxLogin',
            data: {
              code: res.code
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              wx.hideLoading()
              console.log(res);
              if (res.data.success) {
                app.globalData.sessionId = res.data.data.sessionId;
                if (app.userLoginCallback()) {
                  app.userLoginCallback();
                }
              } else {
                if (res.data.code == 2001) {
                  wx.redirectTo({
                    url: '/pages/home/home'
                  })
                } else {
                  wx.showModal({
                    title: '提示',
                    content: '登录失败，请稍后重试',
                  })
                }
              }
            },
            fail: function () {
              wx.hideLoading()
              wx.showModal({
                title: '提示',
                content: '服务器连接失败，请检查网络',
              })
            },
          })
        } else {
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '服务器连接失败，请检查网络',
          })
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function () {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '服务器连接失败，请检查网络',
        })
      },
    })
  },
  userLoginCallback() {}
})
