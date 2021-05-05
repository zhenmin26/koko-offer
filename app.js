// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  },

  getOpenid: function() {
    var that = this;
    return new Promise(function (resolve, reject){
      wx.login({
        success: function(res){
          if(res.code){
            wx.request({
              url: 'https://api.luzhenmin.com/getcode',
              data: {
                  code: res.code
              },
              header: {
                'content-type': 'application/json' //默认值
              },
              success: (res) => {
                wx.setStorageSync('id', res.data.id)
                let resOfRequest = {
                  status: 200,
                  data: res.data.id
                }
                resolve(resOfRequest)
              }
            })
          }
          else{
            console.log("获取用户登录失败!")
            reject('user login error, cannot get openid')
          }
        }
      })
    })
  }
})
