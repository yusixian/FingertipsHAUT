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
        text:'本科教学'
      }
    ], 
    newslist:[{
      "title": "重修报名",
      "date": " 21-12-20 10:10:28 ",
      "href": "info/1008/11555.htm"
  },
  {
      "title": "信息科学与工程学院关于“举办第三届教职工羽毛球比赛”的通知",
      "date": " 21-11-02 16:24:05 ",
      "href": "info/1008/11307.htm"
  },
  {
      "title": "学术报告通知——北京冬奥会通信解决方案及创新应用",
      "date": " 21-11-01 10:42:12 ",
      "href": "info/1008/11296.htm"
  },
  {
      "title": "信息科学与工程学院2021年优秀学生奖学金拟推荐人员名单公示",
      "date": " 21-10-18 08:12:40 ",
      "href": "info/1008/11265.htm"
  },
  {
      "title": "信息科学与工程学院2021年金龙鱼优秀学生奖学金拟推荐人员名单",
      "date": " 21-10-06 17:38:07 ",
      "href": "info/1008/11226.htm"
  },
  {
      "title": "信息科学与工程学院2021年国家助学金评审结果公示",
      "date": " 21-10-06 13:19:06 ",
      "href": "info/1008/11239.htm"
  },
  {
      "title": "信息学院2021年国家励志奖学金拟推荐人员名单公示",
      "date": " 21-09-30 17:33:13 ",
      "href": "info/1008/11205.htm"
  },
  {
      "title": "信息学院2021年度国家励志奖学金评审工作小组名单",
      "date": " 21-09-30 10:03:30 ",
      "href": "info/1008/11206.htm"
  },
  {
      "title": "信息科学与工程学院2020-2021学年国家奖学金拟推荐人员名单公示",
      "date": " 21-09-27 19:40:07 ",
      "href": "info/1008/11175.htm"
  },
  {
      "title": "信息学院2021年度国家奖学金评审工作小组",
      "date": " 21-09-27 10:17:46 ",
      "href": "info/1008/11176.htm"
  },
  {
      "title": "信息学院家庭经济困难认定民主评议小组名单",
      "date": " 21-09-19 12:17:24 ",
      "href": "info/1008/11125.htm"
  },
  {
      "title": "信息科学与工程学院家庭经济困难学生认定结果公示 ",
      "date": " 21-09-16 10:42:02 ",
      "href": "info/1008/11145.htm"
  },
  {
      "title": "信息学院家庭经济困难学生认定领导小组名单",
      "date": " 21-09-15 18:13:08 ",
      "href": "info/1008/11116.htm"
  },
  {
      "title": "信息学院2022届优秀本科毕业生免试攻读硕士研究生候选人公示",
      "date": " 21-09-08 16:39:30 ",
      "href": "info/1008/11007.htm"
  },
  {
      "title": "信息学院2020-2021学年教师教学质量评价结果公示",
      "date": " 21-09-08 09:48:51 ",
      "href": "info/1008/10994.htm"
  }]
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