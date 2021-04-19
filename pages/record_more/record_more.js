// pages/record_more/record_more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target_type: '',
    offer_target: '',
    offer_title: '',
    offer_content: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.offer)
    // console.log(JSON.parse(options.offer))
    let offer = JSON.parse(options.offer);
    // console.log(offer.offer_target)
    wx.request({
      url: 'https://api.luzhenmin.com/getOfferDetail',
      data: {
        id: (wx.getStorageSync('id') || 'err'),
        target: offer.offer_target,
        title: offer.offer_title
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        this.setData({
          target_type: res.data.data[0].target_type,
          offer_target: res.data.data[0].offer_target,
          offer_title: res.data.data[0].offer_title,
          offer_content: res.data.data
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