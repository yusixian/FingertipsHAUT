// pages/display/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalName: null,
    TabCur: 0,
    scrollLeft:0,
    imglist:[{
        text:'21-22-02校历'
      },{
        text:'21-22-01校历'
      },{
        text:'20-21-02校历'
      },{
        text:'20-21-01校历'
      },{
        text:'19-20-02校历'
      },{
        text:'19-20-01校历'
      }
    ], 
    imgURLList: [{
      id: 0,
      type: 'image',
      url: '/statics/images/calendar/212202校历.jpg'
    }, {
      id: 1,
      type: 'image',
      url: '/statics/images/calendar/212201校历.jpg',
    }, {
      id: 2,
      type: 'image',
      url: '/statics/images/calendar/202102校历.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '/statics/images/calendar/202101校历.jpg'
    }, {
      id: 4,
      type: 'image',
      url: '/statics/images/calendar/192002校历.jpg'
    }, {
      id: 5,
      type: 'image',
      url: '/statics/images/calendar/192001校历.jpg'
    }],
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
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