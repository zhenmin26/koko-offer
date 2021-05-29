// pages/learn_post/learn_post.js
const wxParse = require("../../Util/wxParse/wxParse.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    post_content:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.title)
    this.setData({
      title: options.title
    })
    wx.request({
      url: 'https://api.luzhenmin.com/getLearnPostDetail',
      data: {
        title: options.title
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        let post_content = res.data.data[0]
        // console.log(res.data.data[0])
        wxParse.wxParse('content', 'html', post_content.content,this, 5);
        this.setData({
          post_content: res.data.data
          // post_content: res.data.data[0]
        })
      }
    })
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