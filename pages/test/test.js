// pages/test/test.js
Page({
  // that : {},
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload: message from test");
    // console.log(options.id);
    // // Page.data.id = options.id

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady: message from test")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow: message from test")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide: message from test")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload: message from test")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh: message from test")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom: message from test")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage: message from test")
  },

  aaa: function(event){
    let that = this;
    console.log("onload: message from test");
    // console.log(options.id);
    // // Page.data.id = options.id
    wx.request({
      url: 'http://blogapi.zhangqx.com/bloglist',
      success (res) {
        console.log(res.data.data);
        that.setData({
          data: res.data.data,
        })
      }
    })
  },

  
})