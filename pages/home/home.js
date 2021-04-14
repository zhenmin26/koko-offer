// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    records: [],
    pic_name: 'content_icon',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //get offer info
    wx.request({
      url: 'https://api.luzhenmin.com/getOffer',
      data: {
          id: (wx.getStorageSync('id') || 'err')
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        this.setData({
          records: res.data.data
        })
      }
    })
    //get pic name according to target company/school
    // wx.request({
    //   url: 'https://api.luzhenmin.com/getPic',
    //   data: {
    //       records: this.records
    //   },
    //   header: {
    //     'content-type': 'application/json' //默认值
    //   },
    //   success: (res) => {
    //     this.setData({
    //       pic_name: res.data.data
    //     })
    //   }
    // })
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
})