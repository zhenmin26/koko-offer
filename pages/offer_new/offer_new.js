// pages/record_new/record_new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //offer type
    offerType: ['', 'job', 'internship', 'further study'],
    offerTypeArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: 'job'
      },
      {
        id: 2,
        name: 'internship'
      },
      {
        id: 3,
        name: 'further study'
      }
    ],
    indexOfOfferType: 0,

    //multiSelector of job
    multiArrayOfJob: [['', 'Tecent', 'ByteDance'], ['', 'p1', 'p2', 'p3', 'p4', 'p5']],
    multiIndexOfJob: [0, 0],

    //multiSelector of internship
    multiArrayOfInternship: [['', 'ByteDance', 'Tecent', 'Microsoft', 'Other'], ['', 'p1', 'p2', 'p3', 'p4', 'p5'],['', 'summer', 'winter', 'daily']],
    multiIndexOfInternship: [0, 0, 0],

    //multiSelector of study
    multiArrayOfStudy: [['', 'Master', 'PhD'], ['', 'CS', 'Accounting', 'Data Science', 'Art', 'Finance']],
    multiIndexOfStudy: [0, 0],
    //School
    school: ['', 'PKU', 'CMU', 'UOfTokyo'],
    SchoolArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: 'PKU'
      },
      {
        id: 2,
        name: 'CMU'
      },
      {
        id: 3,
        name: 'UOfTokyo'
      }
    ],
    indexOfSchool: 0,

        //selector of status
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

    //selector of status
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

  pickerOfOfferType: function(e) {
    console.log('picker发送选择改变，indexOfOfferType携带值为', e.detail.value)
    this.setData({
      indexOfOfferType: e.detail.value
    })
  },

  //multiselector for further study
  pickerOfSchool: function(e) {
    console.log('picker发送选择改变，indexOfOfferType携带值为', e.detail.value)
    this.setData({
      indexOfSchool: e.detail.value
    })
  },
  bindMultiPickerChangeOfStudy: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndexOfStudy: e.detail.value
      })
  },
  bindMultiPickerColumnChangeOfStudy: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArrayOfStudy: this.data.multiArrayOfStudy,
        multiIndexOfStudy: this.data.multiIndexOfStudy
      };
      data.multiIndexOfStudy[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndexOfStudy[0]) {
            case 0:
              data.multiArrayOfStudy[1] = [''];
              break;
            case 1:
              data.multiArrayOfStudy[1] = ['CS', 'Accounting', 'Data Science', 'Art', 'Finance'];
              break;
            case 2:
              data.multiArrayOfStudy[1] = ['CS', 'Business'];
              break;
          }
          data.multiIndexOfStudy[1] = 0;
          break;
      }
      console.log(data.multiIndexOfStudy);
      this.setData(data);
  },

    //multiselector for job
    bindMultiPickerChangeOfJob: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndexOfJob: e.detail.value
      })
  },
  bindMultiPickerColumnChangeOfJob: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArrayOfJob: this.data.multiArrayOfJob,
        multiIndexOfJob: this.data.multiIndexOfJob
      };
      data.multiIndexOfJob[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndexOfJob[0]) {
            case 0:
              data.multiArrayOfJob[1] = [''];
              break;
            case 1:
              data.multiArrayOfJob[1] = ['p1', 'p2', 'p3', 'p4', 'p5'];
              break;
            case 2:
              data.multiArrayOfJob[1] = ['p1', 'p2', 'p3'];
              break;
          }
          data.multiIndexOfJob[1] = 0;
          break;
      }
      console.log(data.multiIndexOfJob);
      this.setData(data);
  },

  
  //multiselector for Internship
  bindMultiPickerChangeOfInternship: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndexOfInternship: e.detail.value
    })
  },

  bindMultiPickerColumnChangeOfInternship: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArrayOfInternship: this.data.multiArrayOfInternship,
      multiIndexOfInternship: this.data.multiIndexOfInternship
    };
    data.multiIndexOfInternship[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndexOfInternship[0]) {
          case 0:
            data.multiArrayOfInternship[1] = [''];
            data.multiArrayOfInternship[2] = [''];
            break;
          case 1:
            data.multiArrayOfInternship[1] = ['p1', 'p2', 'p3', 'p4', 'p5'];
            data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
            break;
          case 2:
            data.multiArrayOfInternship[1] = ['p1', 'p2', 'p3', 'p4', 'p5'];
            data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
            break;
        }
        data.multiIndexOfInternship[1] = 0;
        data.multiIndexOfInternship[2] = 0;
        break;
      case 1:
        switch (data.multiIndexOfInternship[0]) {
          case 0:
            switch (data.multiIndexOfInternship[1]) {
              case 0:
                data.multiArrayOfInternship[1] = [''];
                data.multiArrayOfInternship[2] = [''];
                break;
            }
            break;
          case 1:
            switch (data.multiIndexOfInternship[1]) {
              case 0:
                data.multiArrayOfInternship[2] = [''];
                break;
              case 1:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 2:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 3:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 4:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
            }
            break;
          case 2:
            switch (data.multiIndexOfInternship[1]) {
              case 0:
                data.multiArrayOfInternship[2] = [''];
                break;
              case 1:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 2:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 3:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 4:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
              case 5:
                data.multiArrayOfInternship[2] = ['summer', 'winter', 'daily'];
                break;
            }
            break;
        }
        data.multiIndexOfInternship[2] = 0;
        break;
    }
    console.log(data.multiIndexOfInternship);
    this.setData(data);
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

  //添加offer到数据库
  addOffer: function(event){
    // console.log(this.data)
    if(this.data.offerType[this.data.indexOfOfferType] == "job"){
      wx.request({
        url: 'https://api.luzhenmin.com/addJobOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offerType[this.data.indexOfOfferType],
          job_company: this.data.multiArrayOfJob[0][this.data.multiIndexOfJob[0]],
          job_position: this.data.multiArrayOfJob[1][this.data.multiIndexOfJob[1]],
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          wx.showToast({
            title: "success",
            icon: 'success',
            duration: 1000,
            complete:()=>{
              setTimeout(
                ()=> {
                  wx.navigateBack({
                    delta: 0,
                  })
                },
                1000
              )
            }
          })        
        }
      })
    }
    if(this.data.offerType[this.data.indexOfOfferType] == "internship"){
      wx.request({
        url: 'https://api.luzhenmin.com/addInternshipOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offerType[this.data.indexOfOfferType],
          internship_company: this.data.multiArrayOfInternship[0][this.data.multiIndexOfInternship[0]],
          internship_position: this.data.multiArrayOfInternship[1][this.data.multiIndexOfInternship[1]],
          internship_type: this.data.multiArrayOfInternship[2][this.data.multiIndexOfInternship[2]],
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          wx.showToast({
            title: "success",
            icon: 'success',
            duration: 1000,
            complete:()=>{
              setTimeout(
                ()=> {
                  wx.navigateBack({
                    delta: 0,
                  })
                },
                1000
              )
            }
          })        
        }
      })
    }
    if(this.data.offerType[this.data.indexOfOfferType] == "further study"){
      wx.request({
        url: 'https://api.luzhenmin.com/addStudyOffer',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
          offer_type: this.data.offerType[this.data.indexOfOfferType],
          study_school: this.data.school[this.data.indexOfSchool],
          study_type: this.data.multiArrayOfStudy[0][this.data.multiIndexOfStudy[0]],
          study_major:this.data.multiArrayOfStudy[1][this.data.multiIndexOfStudy[1]],
          status: this.data.status[this.data.indexOfStatus],
          create_time: this.data.create_time
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          wx.showToast({
            title: "success",
            icon: 'success',
            duration: 1000,
            complete:()=>{
              setTimeout(
                ()=> {
                  wx.navigateBack({
                    delta: 0,
                  })
                },
                1000
              )
            }
          })        
        }
      })
    }
    
  },
})