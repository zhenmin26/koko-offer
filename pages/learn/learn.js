// pages/learn/learn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tops: [
      {
        content: "点击阅读",
      },
    ],
    articles: null,
    show: true,
    animated: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.luzhenmin.com/getLearnPost',
      data: {
        // id: (wx.getStorageSync('id') || 'err')
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        this.setData({
          articles: res.data.data
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

  },

  getPost: function (e) {
    // console.log(e.currentTarget.dataset.index);
    // 'title' is the title of the post
    let title = e.currentTarget.dataset.title;
    console.log(title)
    wx.navigateTo({
      url: '/pages/learn_post/learn_post?title=' + title,
    })
  },
})