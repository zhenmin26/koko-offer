// pages/record_add/record_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record:{},
    status: ['', 'application submitted', 'interview invitation', 'interview finished', 'get rejected', 'offer!'],
    objectArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: 'application submitted'
      },
      {
        id: 2,
        name: 'interview invitation'
      },
      {
        id: 3,
        name: 'interview finished'
      },
      {
        id: 4,
        name: 'get rejected'
      },
      {
        id: 5,
        name: 'offer!'
      }
    ],
    indexOfStatus: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.record))
      this.setData({
          record: JSON.parse(options.record)
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

  //status selector
  bindPickerChangeOfStatus: function(e) {
    console.log('picker发送选择status改变，携带值为', e.detail.value)
    this.setData({
      indexOfStatus: e.detail.value
    })
  },
  //选择日期
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      create_time: e.detail.value
    })
  },

  addRecord: function(event) {
    console.log((this.data.record[this.data.record.length-1]).number)
    if(this.data.record[0].offer_type == 'job'){
      wx.request({
        url: 'https://api.luzhenmin.com/addRecord',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.record[0].offer_type,
          job_company: this.data.record[0].job_company,
          job_position: this.data.record[0].job_position,
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time,
          number: (this.data.record[this.data.record.length-1]).number
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("insert new job record uccessfully")
          wx.navigateBack({
            delta: 0,
          })
        }
      })
    }
    if(this.data.record[0].offer_type == 'internship'){
      wx.request({
        url: 'https://api.luzhenmin.com/addRecord',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.record[0].offer_type,
          internship_company: this.data.record[0].internship_company,
          internship_position: this.data.record[0].internship_position,
          internship_type: this.data.record[0].internship_type,
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time,
          number: (this.data.record[this.data.record.length-1]).number
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("insert new internship record uccessfully")
          wx.navigateBack({
            delta: 0,
          })
        }
      })
    }
    if(this.data.record[0].offer_type == 'further study'){
      wx.request({
        url: 'https://api.luzhenmin.com/addRecord',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.record[0].offer_type,
          study_school: this.data.record[0].study_school,
          study_type: this.data.record[0].study_type,
          study_major: this.data.record[0].study_major,
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time,
          number: (this.data.record[this.data.record.length-1]).number
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          console.log("insert new record uccessfully")
          wx.navigateBack({
            delta: 0,
          })
        }
      })
    }
      
  }
})