// pages/display/more/more.js
import api from '../../../utils/api'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    newslist:[{
      "newsId": "info/1008/11239.htm",
      "title": "信息科学与工程学院2021年国家助学金评审结果公示",
      "date": "2021-10-06",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11205.htm",
      "title": "信息学院2021年国家励志奖学金拟推荐人员名单公示",
      "date": "2021-09-30",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11206.htm",
      "title": "信息学院2021年度国家励志奖学金评审工作小组名单",
      "date": "2021-09-30",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11175.htm",
      "title": "信息科学与工程学院2020-2021学年国家奖学金拟推荐人员名单公示",
      "date": "2021-09-27",
      "clicks": 0,
      "summary": null
    }]
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