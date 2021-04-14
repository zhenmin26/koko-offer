// pages/record_add/record_add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    multiArray: [['', 'Internship', 'Further study'], ['', 'Tech', 'Business','Government', 'Other'], ['', 'Tecent', 'Microsoft', 'Other']],
    multiIndex: [0, 0, 0],
    offer_type: '',
    target_type: '',
    offer_target: '',
    offer_title: '',
    status: '',
    create_time: ''
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

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['...'];
            data.multiArray[2] = ['...'];
            break;
          case 1:
            data.multiArray[1] = ['Company type', 'Tech', 'Business','Government', 'Other'];
            data.multiArray[2] = ['...', 'Tecent', 'Microsoft', 'Other'];
            break;
          case 2:
            data.multiArray[1] = ['Country', 'China', 'USA', 'UK', 'Singapore', 'Japan'];
            data.multiArray[2] = ['...'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[1] = ['...'];
                data.multiArray[2] = ['...'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['...'];
                break;
              case 1:
                data.multiArray[2] = ['Tecent', 'Alibaba'];
                break;
              case 2:
                data.multiArray[2] = ['EY', 'KPMG'];
                break;
              case 3:
                data.multiArray[2] = ['Civil servant'];
                break;
              case 4:
                data.multiArray[2] = [''];
            }
            break;
          case 2:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['...'];
                break;
              case 1:
                data.multiArray[2] = ['PKU'];
                break;
              case 2:
                data.multiArray[2] = ['CMU'];
                break;
              case 3:
                data.multiArray[2] = ['UCL'];
                break;
              case 4:
                data.multiArray[2] = ['NTU'];
                break;
              case 5:
                data.multiArray[2] = ['UTokyo'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },

  titleInput: function (e) {
    this.setData({
      offer_title: e.detail.value
    })
  },

  statusInput: function (e) {
    this.setData({
      status: e.detail.value
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      create_time: e.detail.value
    })
  },

  addOffer: function(event){
    wx.request({
      url: 'https://api.luzhenmin.com/addOffer',
      data: {
        id: (wx.getStorageSync('id') || 'err'),
        // multiArray: this.data.multiArray,
        // multiIndex: this.data.multiIndex,
        offer_type: this.data.multiArray[0][this.data.multiIndex[0]],
        target_type: this.data.multiArray[1][this.data.multiIndex[1]],
        offer_target: this.data.multiArray[2][this.data.multiIndex[2]],
        offer_title: this.data.offer_title,
        status: this.data.status,
        create_time: this.data.create_time
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: (res) => {
        console.log("insert into database successfully")
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },
})