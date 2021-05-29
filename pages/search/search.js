// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_pics: [
      {id:1, name:"pic5"},
      {id:2, name:"pic7"},
      {id:3, name:"pic11"}
    ],
    search_result: null
  },

  searchEvent(e){
    console.log("用户搜索" + e.detail)
    wx.request({
      url: 'https://api.luzhenmin.com/search',
      data: {
        input: e.detail
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        // console.log(res.data.data) 
        this.setData({
          search_result: res.data.data,
          show: true
        })
      }
    })
    setTimeout(()=>{
      wx.hideLoading();
    },1000)
  },

  getSearchDetail: function(e){
    let data;
    if(e.currentTarget.dataset.type == 1){
        data = {
          offer_type: e.currentTarget.dataset.type,
          job_company: e.currentTarget.dataset.job_company,
          job_position: e.currentTarget.dataset.job_position,
          link_offer: e.currentTarget.dataset.link_offer
        }
    }
    if(e.currentTarget.dataset.type == 2){
        data = {
          offer_type: e.currentTarget.dataset.type,
          internship_company: e.currentTarget.dataset.internship_company,
          internship_position: e.currentTarget.dataset.internship_position,
          internship_type: e.currentTarget.dataset.internship_type,
          link_offer: e.currentTarget.dataset.link_offer
        }
    }
    if(e.currentTarget.dataset.type == 3){
        data = {
          offer_type: e.currentTarget.dataset.type,
          study_school: e.currentTarget.dataset.study_school,
          study_type: e.currentTarget.dataset.study_type,
          study_major:e.currentTarget.dataset.study_major,
          link_offer: e.currentTarget.dataset.link_offer
        }
    }
    let data_json = JSON.stringify(data)
    wx.navigateTo({
      url: './resultDetail/resultDetail?search=' + data_json,
    })
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
    wx.request({
      url: 'https://api.luzhenmin.com/getSliderPics',
      data: {
        // id: (wx.getStorageSync('id') || 'err')
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        // console.log(res.data.data)
        this.setData({
          swiper_pics: res.data.data
        })
      }
    })
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