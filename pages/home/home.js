// pages/home/home.js
Page({
  data: {
    newsTabCur: 0,
    navlist:[{
        text:'通知公告'
      },{
        text:'学院新闻'
      },{
        text:'学生活动'
      },{
        text:'学院简介'
      }
    ], 
    newslist:[{
        title:"信息科学与工程学院关于“举办第三届教职工羽毛球比赛”的通知",
        date: "2021-11-02发布"
      },{
        title:"学术报告通知——北京冬奥会通信解决方案及创新应用",
        date: "2021-11-01发布"
      },{
        title:"信息科学与工程学院2021年优秀学生奖学金拟推荐人员名单公示",
        date: "2021-10-18发布"
      }
    ]
  },
  
  NavToNews: function(event) {
    console.log(event)
    console.log("点击了更多");
  }, 
  onClick:function(event){
    var index = event.currentTarget.dataset.id;
    console.log("点击了"+this.data.navlist[index].text);
    this.setData({
      newsTabCur:index
    })
    // wx.showLoading({
    //   title: '加载中',
    // })
    // 请求新闻列表
    // let self = this
    // wx.request({
    //   url: '/index',
    //   success: function(data){ // data = {name:'I'm appended'}
    //     ...
    //     self.setData({
    //       newslist,na// 加在数据头
    //     })
    //     ...
    //     wx.hideLoading();
    //   }
    // })
    
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
        selected: 0 //解决自定义导航栏不灵敏
      })
   }
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