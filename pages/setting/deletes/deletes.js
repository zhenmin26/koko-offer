// pages/setting/deletes/deletes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no_record: false,
    records: null,
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
    var that = this;
    if(wx.getStorageSync('id') != null){
      wx.request({
        url: 'https://api.luzhenmin.com/getDeletedOffer',
        data: {
          userid: wx.getStorageSync('id') || 'err'
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          // if((res.data.data).length==0){
          //   that.setData({
          //     no_record: true,
          //     records: res.data.data
          //   })
          // }else{
          //   that.setData({
          //     no_record: false,
          //     records: res.data.data
          //   })
          // }
        }
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