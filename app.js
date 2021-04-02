// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

        //获取code
        console.log("code: " + res.code)

        //发送code
        wx.request({
          url: 'https://api.luzhenmin.com/getcode',
          // url: 'http://82.156.201.230/getcode',
          // url: 'http://127.0.0.1/getcode',
          data: {
              abc: res.code
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: (res) => {
            console.log(res.data)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
