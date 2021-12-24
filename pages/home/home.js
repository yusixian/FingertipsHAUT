// pages/home/home.js
import api from '../../utils/api'
const app = getApp();
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
      "newsId": "info/1008/11555.htm",
      "title": "重修报名",
      "date": "2021-12-20",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11307.htm",
      "title": "信息科学与工程学院关于“举办第三届教职工羽毛球比赛”的通知",
      "date": "2021-11-02",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11296.htm",
      "title": "学术报告通知——北京冬奥会通信解决方案及创新应用",
      "date": "2021-11-01",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11265.htm",
      "title": "信息科学与工程学院2021年优秀学生奖学金拟推荐人员名单公示",
      "date": "2021-10-18",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11226.htm",
      "title": "信息科学与工程学院2021年金龙鱼优秀学生奖学金拟推荐人员名单",
      "date": "2021-10-06",
      "clicks": 0,
      "summary": null
    },
    {
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
    },
    {
      "newsId": "info/1008/11176.htm",
      "title": "信息学院2021年度国家奖学金评审工作小组",
      "date": "2021-09-27",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11125.htm",
      "title": "信息学院家庭经济困难认定民主评议小组名单",
      "date": "2021-09-19",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11145.htm",
      "title": "信息科学与工程学院家庭经济困难学生认定结果公示 ",
      "date": "2021-09-16",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11116.htm",
      "title": "信息学院家庭经济困难学生认定领导小组名单",
      "date": "2021-09-15",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/11007.htm",
      "title": "信息学院2022届优秀本科毕业生免试攻读硕士研究生候选人公示",
      "date": "2021-09-08",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10994.htm",
      "title": "信息学院2020-2021学年教师教学质量评价结果公示",
      "date": "2021-09-08",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10901.htm",
      "title": "信息学院2022届优秀本科毕业生免试攻读硕士学位推荐预选名单公示",
      "date": "2021-08-28",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10678.htm",
      "title": "关于2022届推荐优秀应届本科毕业生免试攻读研究生的通知",
      "date": "2021-08-10",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10455.htm",
      "title": "信息学院2021年抗击新冠肺炎疫情工作学生先进个人评选拟推荐公示名单",
      "date": "2021-06-09",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10451.htm",
      "title": "信息科学与工程学院教学大奖赛评审结果公示",
      "date": "2021-06-09",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10415.htm",
      "title": "信息科学与工程学院新疆籍家庭经济困难学生资助评审结果公示",
      "date": "2021-05-31",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10178.htm",
      "title": "信息学院2020-2021学年先进团组织和先进个人拟推荐名单公示",
      "date": "2021-04-23",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/10167.htm",
      "title": "信息学院2021年学生先进集体和先进个人评选拟推荐公示名单",
      "date": "2021-04-22",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9508.htm",
      "title": "信息科学与工程学院2020年年国家助学金评审结果公示",
      "date": "2020-10-27",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9506.htm",
      "title": "计算机科学与技术专业辅修学士学位教育2020年招生简章",
      "date": "2020-10-27",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9507.htm",
      "title": "信息科学与工程学院2020年优秀学生奖学金拟推荐人员名单公示",
      "date": "2020-10-24",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9486.htm",
      "title": "信息科学与工程学院2020级家庭经济困难认定学生公示名单",
      "date": "2020-10-18",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9519.htm",
      "title": "信息学院家庭经济困难学生认定工作组名单",
      "date": "2020-10-14",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9436.htm",
      "title": "关于河南高校计算领域人才BDCI国际数据智能大赛的通知",
      "date": "2020-10-12",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9457.htm",
      "title": "信息科学与工程学院2020年度国家励志奖学金民主评议小组名单",
      "date": "2020-10-11",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9435.htm",
      "title": "信息科学与工程学院2020年国家励志奖学金拟推荐人员名单公示",
      "date": "2020-10-11",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9425.htm",
      "title": "信息科学与工程学院2020年国家奖学金拟推荐人员名单公示",
      "date": "2020-10-09",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9456.htm",
      "title": "信息科学与工程学院2020年度国家奖学金评审工作小组",
      "date": "2020-10-09",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9415.htm",
      "title": "信息科学与工程学院2020年金龙鱼优秀学生奖学金拟推荐人员名单公示",
      "date": "2020-10-07",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9405.htm",
      "title": "信息科学与工程学院2017-2019级家庭经济困难学生公示名单",
      "date": "2020-10-06",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9376.htm",
      "title": "信息学院2021届优秀本科毕业生免试攻读硕士研究生候选人公示",
      "date": "2020-09-22",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/9308.htm",
      "title": "信息学院2021届优秀本科毕业生免试攻读硕士学位推荐预选名单公示",
      "date": "2020-08-29",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/8899.htm",
      "title": "关于2021届推荐优秀应届本科毕业生免试攻读研究生的通知",
      "date": "2020-07-13",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/8687.htm",
      "title": "信息学院2020年度优秀应届毕业生评选推荐通知",
      "date": "2020-05-13",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/8686.htm",
      "title": "信息学院2020年度河南省三好学生、优秀学生干部和先进班集体评选表彰通...",
      "date": "2020-05-13",
      "clicks": 0,
      "summary": null
    },
    {
      "newsId": "info/1008/8685.htm",
      "title": "信息学院2020年度校级三好学生、优秀学生干部、十佳标兵和先进班集体评...",
      "date": "2020-05-13",
      "clicks": 0,
      "summary": null
    }]
  },
  
  NavToNews: function(event) {
    console.log(event)
    console.log("点击了更多");
  }, 
   // 加载新闻
   getList: async function (e) {
    let newsList;
    let typeid;
    if (e) {
      if (e.currentTarget) {
        typeid = e.currentTarget.dataset.index;
      } else {
        typeid = e;
      }
    } else {
      typeid = 0;
    }
    console.log(typeid)
    newsList = await api.getNewsListByID(typeid);
    console.log(newsList)
    this.setData({
      newslist: newsList.row
    })
  },
  onClick:function(event){
    var index = event.currentTarget.dataset.id;
    console.log("点击了"+this.data.navlist[index].text);
    this.getList(index);
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