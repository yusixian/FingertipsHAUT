const app = getApp();

const http = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.domainName + options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: options.header || {
        'content-type': 'application/json',
        'Cookie': 'JSESSIONID=' + app.globalData.sessionId
      },
      success: (res) => {
        // 获取后台数据成功console.log(res.data);
        console.log(res.data);
        if (!res.data.success) {
          // wx.showModal({
          //   title: '提示',
          //   content: '加载失败，请稍后重试',
          // })
        }
        resolve(res.data.data);
      },
      fail: (err) => {
        // 获取后台数据失败
        console.log("获取后台数据失败", err);
        wx.showModal({
          title: '提示',
          content: '服务器连接失败，请检查网络',
        });
        reject(err);
      }
    })
  }).catch((error)=>{
    console.error(error);
  })
}
export default http