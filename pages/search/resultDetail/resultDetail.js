// pages/search/resultDetail/resultDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offer: '',
    records: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      offer: JSON.parse(options.search)
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
    if(this.data.offer.offer_type == 1){
      wx.request({
        url: 'https://api.luzhenmin.com/searchResultDetail',
        data: {
          offer_type: this.data.offer.offer_type,
          job_company: this.data.offer.job_company,
          job_position: this.data.offer.job_position,
          link_offer: this.data.offer.link_offer
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          this.setData({
            records: res.data.data,
            total: res.data.data.length
          })
        }
      })
    }
    if(this.data.offer.offer_type == 2){
      wx.request({
        url: 'https://api.luzhenmin.com/searchResultDetail',
        data: {
          offer_type: this.data.offer.offer_type,
          internship_company: this.data.offer.internship_company,
          internship_position: this.data.offer.internship_position,
          internship_type: this.data.offer.internship_type,
          link_offer: this.data.offer.link_offer
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          this.setData({
            records: res.data.data,
            total: res.data.data.length
          })
        }
      })
    }
    if(this.data.offer.offer_type == 3){
      wx.request({
        url: 'https://api.luzhenmin.com/searchResultDetail',
        data: {
          offer_type: this.data.offer.offer_type,
          study_school: this.data.offer.study_school,
          study_type: this.data.offer.study_type,
          study_major: this.data.offer.study_major,
          link_offer: this.data.offer.link_offer
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