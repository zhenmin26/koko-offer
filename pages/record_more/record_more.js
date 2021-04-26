// pages/record_more/record_more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offer: '',
    records: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let offer = JSON.parse(options.offer);
    this.setData({
      offer: JSON.parse(options.offer)
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
    // console.log(this.data.offer)
    if(this.data.offer.offer_type == "job"){
      wx.request({
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offer.offer_type,
          job_company: this.data.offer.job_company,
          job_position: this.data.offer.job_position
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            records: res.data.data,
          })
        }
      })
    }
    if(this.data.offer.offer_type == "internship"){
      wx.request({
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offer.offer_type,
          internship_company: this.data.offer.internship_company,
          internship_position: this.data.offer.internship_position,
          internship_type: this.data.offer.internship_type
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            records: res.data.data,
          })
        }
      })
    }
    if(this.data.offer.offer_type == "further study"){
      wx.request({
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offer.offer_type,
          study_school: this.data.offer.study_school,
          study_type: this.data.offer.study_type,
          study_major: this.data.offer.study_major
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            records: res.data.data,
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

  },

  addRecord: function (event) {
    let record = JSON.stringify(event.currentTarget.dataset.records)
    wx.navigateTo({
      url: '/pages/record_add/record_add?record=' + record,
    })
  },

  deleteOffer: function (event) {
    let record = event.currentTarget.dataset.records
    console.log(record[0])
    if(record[0].offer_type == 'job'){
      wx.request({
        url: 'https://api.luzhenmin.com/deleteJobOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          job_company: record[0].job_company,
          job_position: record[0].job_position
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("delete successfully")
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      })
    }
    if(record[0].offer_type == 'internship'){
      wx.request({
        url: 'https://api.luzhenmin.com/deleteInternshipOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          internship_company: record[0].internship_company,
          internship_position: record[0].internship_position,
          internship_type: record[0].internship_type
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("delete successfully")
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      })
    }
    if(record[0].offer_type == 'further study'){
      wx.request({
        url: 'https://api.luzhenmin.com/deleteStudyOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'), 
          study_major: record[0].study_major,
          study_school: record[0].study_school,
          study_type: record[0].study_type
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("delete successfully")
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      })
    }
  }
})