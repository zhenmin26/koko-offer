// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no_record: false,
    records: null,
    tips: 'Loading',
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
        url: 'https://api.luzhenmin.com/getOffer',
        data: {
          userid: wx.getStorageSync('id') || 'err'
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          if((res.data.data).length==0){
            that.setData({
              no_record: true,
              records: res.data.data
            })
          }else{
            that.setData({
              no_record: false,
              records: res.data.data
            })
          }
        }
      })
    }
    else{
      app.getOpenid().then(function(res){
          if(res.status == 200){
            wx.request({
              url: 'https://api.luzhenmin.com/getOffer',
              data: {
                userid: wx.getStorageSync('id') || 'err'
              },
              header: {
                'content-type': 'application/json' //默认值
              },
              success: (res) => {
                if((res.data.data).length==0){
                  that.setData({
                    no_record: true,
                    records: res.data.data
                  })
                }else{
                  that.setData({
                    no_record: false,
                    records: res.data.data
                  })
                }
              }
            })
          }
          else{
            console.log(res.data)
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
    clearInterval(this.timer)
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

  getOfferDetail: function (e) {
    // console.log(e.currentTarget.dataset.offer_target);
    let offer = {};
    if(e.currentTarget.dataset.offer_type == "job"){
      offer = {
        "link_offer": e.currentTarget.dataset.offer_link,
        "offer_type": e.currentTarget.dataset.offer_type,
        "job_company": e.currentTarget.dataset.job_company,
        "job_position": e.currentTarget.dataset.job_position
      };
    }
    if(e.currentTarget.dataset.offer_type == "internship"){
      offer = {
        "link_offer": e.currentTarget.dataset.offer_link,
        "offer_type": e.currentTarget.dataset.offer_type,
        "internship_company": e.currentTarget.dataset.internship_company,
        "internship_position": e.currentTarget.dataset.internship_position,
        "internship_type": e.currentTarget.dataset.internship_type
      };
    }
    if(e.currentTarget.dataset.offer_type == "further study"){
      offer = {
        "link_offer": e.currentTarget.dataset.offer_link,
        "offer_type": e.currentTarget.dataset.offer_type,
        "study_school": e.currentTarget.dataset.study_school,
        "study_type": e.currentTarget.dataset.study_type,
        "study_major": e.currentTarget.dataset.study_major
      };
    }
    // console.log(offer)
    let offer_json = JSON.stringify(offer)
    wx.navigateTo({
      url: "/pages/offer_more/offer_more?offer=" + offer_json
    })
  },
})