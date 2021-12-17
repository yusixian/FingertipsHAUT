// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    "color": "#949494",
    "selectedColor": "#1ca4ff",
    listTab: [{
      "pagePath": "/pages/home/home",
      "iconPath": "/statics/images/tabBar/home.png",
      "selectedIconPath": "/statics/images/tabBar/home_c.png",
      "text": "首页"
    },
    {
      "pagePath": "/pages/curriculum/curriculum",
      "iconPath": "/statics/images/tabBar/curriculum.png",
      "selectedIconPath": "/statics/images/tabBar/curriculum_c.png",
      "text": "课表"
    },
    {
      "pagePath": "/pages/apply/apply",
      "iconPath": "/statics/images/tabBar/apply.png",
      "selectedIconPath": "/statics/images/tabBar/apply_c.png",
      "text": "服务"
    },
    {
      "pagePath": "/pages/mine/mine",
      "iconPath": "/statics/images/tabBar/mine.png",
      "selectedIconPath": "/statics/images/tabBar/mine_c.png",
      "text": "我的"
    }
    ]
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      //this.setData({
       // selected: data.index
      //})
    }
  }
})