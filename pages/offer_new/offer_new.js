// pages/record_new/record_new.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    yes: [{
      id: 1,
      value: '是',
      checked: true
    }, {
      id: 2,
      value: '否'
    }],
    yesresult: [],
    //offer type
    offerType: ['', '工作', '实习', '深造'],
    offerTypeArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: '工作'
      },
      {
        id: 2,
        name: '实习'
      },
      {
        id: 3,
        name: '深造'
      }
    ],
    indexOfOfferType: 0,

    //multiSelector of job
    multiArrayOfJob: [],
    multiIndexOfJob: [],

    //multiSelector of internship
    arrayOfInternshipType: ['', '暑期', '寒假', '日常'],
    objectArrayOfInternshipType: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: '暑期'
      },
      {
        id: 2,
        name: '寒假'
      },
      {
        id: 3,
        name: '日常'
      }
    ],
    indexOfInternshipType: 0,
    multiArrayOfInternship: [],
    multiIndexOfInternship: [],

    //multiSelector of study
    multiArrayOfStudy: [],
    multiIndexOfStudy: [],
    //type
    studyType: ['', '硕士', '博士'],
    studyTypeArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: '硕士'
      },
      {
        id: 2,
        name: '博士'
      }
    ],
    indexOfStudyType: 0,

    //selector of status
    status: ['', '已提交申请', '收到面试邀请', '完成面试', '被拒', '收到offer！'],
    objectArray: [
      {
        id: 0,
        name: ''
      },
      {
        id: 1,
        name: '已提交申请'
      },
      {
        id: 2,
        name: '收到面试邀请'
      },
      {
        id: 3,
        name: '完成面试'
      },
      {
        id: 4,
        name: '被拒'
      },
      {
        id: 5,
        name: '收到offer！'
      }
    ],
    indexOfStatus: 0,

    form: {
      job: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //jobs
    wx.request({
      url:'https://api.luzhenmin.com/getCompanyList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        var company_list = res.data.data;
        var companyArr = company_list.map(item => { // 此方法将company名称区分到一个新数组中
          return item.company_name_ch;
        });
        that.setData({
          multiArrayOfJob: [companyArr, []],　　　　
          company_list,
          companyArr
        })
        var default_company_id = company_list[0]['company_id'];　//获取默认的校区对应的company_id
        if (default_company_id) {
          that.searchJobInfo(default_company_id) // 如果存在调用获取对应的position数据
        }
      }
    })   
    
    //internship
    wx.request({
      url:'https://api.luzhenmin.com/getInternshipCompanyList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        var internshipCompany_list = res.data.data;
        var internshipCompanyArr = internshipCompany_list.map(item => { // 此方法将company名称区分到一个新数组中
          return item.internshipCompany_name_ch;
        });
        that.setData({
          multiArrayOfInternship: [internshipCompanyArr, []],　　　　
          internshipCompany_list,
          internshipCompanyArr
        })
        var default_internshipCompany_id = internshipCompany_list[0]['internshipCompany_id'];　//获取默认的校区对应的company_id
        if (default_internshipCompany_id) {
          that.searchInternshipInfo(default_internshipCompany_id) // 如果存在调用获取对应的position数据
        }
      }
    })   
    
    //study
    wx.request({
      url:'https://api.luzhenmin.com/getSchoolList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        var school_list = res.data.data;
        var schoolArr = school_list.map(item => { // 此方法将company名称区分到一个新数组中
          return item.school_name_ch;
        });
        that.setData({
          multiArrayOfStudy: [schoolArr, []],　　　　
          school_list,
          schoolArr
        })
        var default_school_id = school_list[0]['school_id'];　//获取默认的校区对应的company_id
        if (default_school_id) {
          that.searchMasterInfo(default_school_id) // 如果存在调用获取对应的position数据
        }
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

  },

  pickerOfOfferType: function(e) {
    console.log('picker发送选择改变，indexOfOfferType携带值为', e.detail.value)
    this.setData({
      indexOfOfferType: e.detail.value
    })
  },

  //multiselector for further study
  pickerOfStudyType: function(e) {
    console.log('picker发送选择改变，indexOfStudyType携带值为', e.detail.value)
    this.setData({
      indexOfStudyType: e.detail.value
    })
  },
  bindMultiPickerColumnChangeOfStudy: function (e) {
    //e.detail.column 改变的数组下标列, e.detail.value 改变对应列的值
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArrayOfStudy: this.data.multiArrayOfStudy,
      multiIndexOfStudy: this.data.multiIndexOfStudy
    };
    data.multiIndexOfStudy[e.detail.column] = e.detail.value;
    var school_id_session = this.data.school_id;　　　　// 保持之前的company_id与新选择的id做对比，如果改变则重新请求数据
    switch (e.detail.column) {
      case 0:
        var school_list = this.data.school_list;
        var school_id = school_list[e.detail.value]['school_id'];
        if (school_id_session != school_id) {　// 与之前保持的company id做对比，如果不一致则重新请求并赋新值
          this.searchMasterInfo(school_id);　
        }
        data.multiIndexOfStudy[1] = 0;
        break;
    }
    this.setData(data);
  },

  bindMultiPickerChangeOfStudy: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var master_key = 0;
    var master_list =this.data.master_list;
    var select_key = e.detail.value[1];
    var real_key = select_key - 1;
    if (real_key < select_key) {
      this.setData({
        master_id: 0
      })
    } else {
      this.setData({
        master_id: master_list[real_key]['master_id'] // job_id 代表着选择的班级对应的 职位id
      })
    }
    this.setData({
      multiIndexOfStudy: e.detail.value
    })
  },

  searchMasterInfo(school_id){
    console.log("search master info");
    var that = this;
    if (school_id) {
      this.setData({
        school_id: school_id
      })
      wx.request({
        url: 'https://api.luzhenmin.com/getMasters',
        data: {
          school_id: school_id
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          // console.log(res.data.data);
          var master_list = res.data.data;
          var masterArr = master_list.map(item => {
            return item.master_name_ch;
          })
          masterArr.unshift('所有项目');
          var schoolArr = this.data.schoolArr;
          that.setData({
            multiArrayOfStudy: [schoolArr, masterArr],
            masterArr,
            master_list
          })
        }
      })
    }
  },

  //multiselector for job
  bindMultiPickerColumnChangeOfJob: function (e) {
    //e.detail.column 改变的数组下标列, e.detail.value 改变对应列的值
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArrayOfJob: this.data.multiArrayOfJob,
      multiIndexOfJob: this.data.multiIndexOfJob
    };
    data.multiIndexOfJob[e.detail.column] = e.detail.value;
    var company_id_session = this.data.company_id;　　　　// 保持之前的company_id与新选择的id做对比，如果改变则重新请求数据
    switch (e.detail.column) {
      case 0:
        var company_list = this.data.company_list;
        var company_id = company_list[e.detail.value]['company_id'];
        if (company_id_session != company_id) {　// 与之前保持的company id做对比，如果不一致则重新请求并赋新值
          this.searchJobInfo(company_id);　　　　　　
        }
        data.multiIndexOfJob[1] = 0;
        break;
    }
    this.setData(data);
  },

  bindMultiPickerChangeOfJob: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var job_key = 0;
    var job_list =this.data.job_list;
    var select_key = e.detail.value[1];
    var real_key = select_key - 1;
    if (real_key < select_key) {
      this.setData({
        job_id: 0
      })
    } else {
      this.setData({
        job_id: job_list[real_key]['job_id'] // job_id 代表着选择的班级对应的 职位id
      })
    }
    this.setData({
      multiIndexOfJob: e.detail.value
    })
  },

  searchJobInfo(company_id){
    console.log("search job info");
    var that = this;
    if (company_id) {
      this.setData({
        company_id: company_id
      })
      wx.request({
        url: 'https://api.luzhenmin.com/getJobs',
        data: {
          company_id: company_id
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          var job_list = res.data.data;
          var jobArr = job_list.map(item => {
            return item.job_name_ch;
          })
          jobArr.unshift('所有岗位');
          var companyArr = this.data.companyArr;
          that.setData({
            multiArrayOfJob: [companyArr, jobArr],
            jobArr,
            job_list
          })
        }
      })
    }
  },

  
  //multiselector for Internship
  bindPickerChangeOfInternshipType: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexOfInternshipType: e.detail.value
    })
  },

  bindMultiPickerColumnChangeOfInternship: function (e) {
    // console.log("column")
    //e.detail.column 改变的数组下标列, e.detail.value 改变对应列的值
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArrayOfInternship: this.data.multiArrayOfInternship,
      multiIndexOfInternship: this.data.multiIndexOfInternship
    };
    data.multiIndexOfInternship[e.detail.column] = e.detail.value;
    var internshipCompany_id_session = this.data.internshipCompany_id;　// 保持之前的company_id与新选择的id做对比，如果改变则重新请求数据
    switch (e.detail.column) {
      case 0:
        var internshipCompany_list = this.data.internshipCompany_list;
        var internshipCompany_id = internshipCompany_list[e.detail.value]['internshipCompany_id'];
        if (internshipCompany_id_session != internshipCompany_id) {　// 与之前保持的company id做对比，如果不一致则重新请求并赋新值
          this.searchInternshipInfo(internshipCompany_id);　　　　　　
        }
        data.multiIndexOfInternship[1] = 0;
        break;
    }
    this.setData(data);
  },

  bindMultiPickerChangeOfInternship: function (e) {
    // console.log("change")
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var internship_key = 0;
    var internship_list =this.data.internship_list;
    var select_key = e.detail.value[1];
    var real_key = select_key - 1;
    if (real_key < select_key) {
      this.setData({
        internship_id: 0
      })
    } else {
      this.setData({
        internship_id: internship_list[real_key]['internship_id'] // job_id 代表着选择的班级对应的 职位id
      })
    }
    this.setData({
      multiIndexOfInternship: e.detail.value
    })
  },

  searchInternshipInfo(internshipCompany_id){
    console.log("search internship info");
    var that = this;
    if (internshipCompany_id) {
      this.setData({
        internshipCompany_id: internshipCompany_id
      })
      wx.request({
        url: 'https://api.luzhenmin.com/getInternship',
        data: {
          internshipCompany_id: internshipCompany_id
        },
        header: {
          'content-type': 'application/json' //默认值
        },
        success: (res) => {
          // console.log("internship info")
          // console.log(res.data.data)
          var internship_list = res.data.data;
          var internshipArr = internship_list.map(item => {
            return item.internship_name_ch;
          })
          internshipArr.unshift('所有实习岗位');
          // console.log(internshipArr)
          var internshipCompanyArr = this.data.internshipCompanyArr;
          // console.log(internshipCompanyArr)
          // let multiArrayOfInternship = [internshipCompanyArr, internshipArr]
          // console.log(multiArrayOfInternship)
          that.setData({
            multiArrayOfInternship: [internshipCompanyArr, internshipArr],
            internshipArr,
            internship_list
          })
        }
      })
    }
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
    let yesresult;
    if(this.data.yes[0].checked == false){
      yesresult = 0;
    }
    else{
      yesresult = 1;
    }
    if(this.data.indexOfOfferType == 1){
      if(this.data.multiArrayOfJob[0][this.data.multiIndexOfJob[0]] == undefined){
        wx.showModal({
          title: '提示',
          content: '请选择公司和岗位',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      if(this.data.multiIndexOfJob[0] == 0){
        wx.showModal({
          title: '提示',
          content: '请选择公司',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiIndexOfJob[1] == 0 )(
        wx.showModal({
          title: '提示',
          content: '请选择工作岗位',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      )
      else if(this.data.indexOfStatus == 0){
        wx.showModal({
          title: '提示',
          content: '请选择申请进展',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else if(this.data.create_time === undefined){
        wx.showModal({
          title: '提示',
          content: '请选择更新时间',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else{
        wx.request({
          url: 'https://api.luzhenmin.com/addJobOffer',
          data: {
            userid: (getApp().globalData.uid || 'err'),
            offer_type: this.data.indexOfOfferType,
            job_company: this.data.multiArrayOfJob[0][this.data.multiIndexOfJob[0]],
            job_position: this.data.multiArrayOfJob[1][this.data.multiIndexOfJob[1]],
            status: this.data.indexOfStatus,
            create_time: this.data.create_time,
            yesresult: yesresult
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
    }
    if(this.data.indexOfOfferType == 2){
      if(this.data.multiArrayOfInternship[0][this.data.multiIndexOfInternship[0]] == undefined){
        wx.showModal({
          title: '提示',
          content: '请选择实习公司和岗位',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiIndexOfInternship[0] == 0){
        wx.showModal({
          title: '提示',
          content: '请选择实习公司',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiIndexOfInternship[1] == 0){
        wx.showModal({
          title: '提示',
          content: '请选择实习岗位',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.indexOfInternshipType == 0){
        wx.showModal({
          title: '提示',
          content: '请选择实习类型',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.indexOfStatus == 0){
        wx.showModal({
          title: '提示',
          content: '请选择申请进展',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else if(this.data.create_time === undefined){
        wx.showModal({
          title: '提示',
          content: '请选择更新时间',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else{
        wx.request({
          url: 'https://api.luzhenmin.com/addInternshipOffer',
          data: {
            userid: (getApp().globalData.uid || 'err'),
            offer_type: this.data.indexOfOfferType,
            internship_company: this.data.multiArrayOfInternship[0][this.data.multiIndexOfInternship[0]],
            internship_position: this.data.multiArrayOfInternship[1][this.data.multiIndexOfInternship[1]],
            internship_type: this.data.arrayOfInternshipType[this.data.indexOfInternshipType],
            status: this.data.indexOfStatus,
            create_time: this.data.create_time,
            yesresult: yesresult
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
    }
    if(this.data.indexOfOfferType == 3){
      if(this.data.indexOfStudyType == 0){
        wx.showModal({
          title: '提示',
          content: '请选择项目类型',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiArrayOfStudy[0][this.data.multiIndexOfStudy[0]] == undefined){
        wx.showModal({
          title: '提示',
          content: '请选择学校和项目',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiIndexOfStudy[0] == 0){
        wx.showModal({
          title: '提示',
          content: '请选择学校',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.multiIndexOfStudy[1] == 0){
        wx.showModal({
          title: '提示',
          content: '请选择项目',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
      else if(this.data.indexOfStatus == 0){
        wx.showModal({
          title: '提示',
          content: '请选择申请进展',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else if(this.data.create_time === undefined){
        wx.showModal({
          title: '提示',
          content: '请选择更新时间',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })  
      }
      else{
        wx.request({
          url: 'https://api.luzhenmin.com/addStudyOffer',
          data: {
            userid: (getApp().globalData.uid || 'err'),
            offer_type: this.data.indexOfOfferType,
            study_type: this.data.studyType[this.data.indexOfStudyType],
            study_school: this.data.multiArrayOfStudy[0][this.data.multiIndexOfStudy[0]],
            study_major:this.data.multiArrayOfStudy[1][this.data.multiIndexOfStudy[1]],
            status: this.data.indexOfStatus,
            create_time: this.data.create_time,
            yesresult: yesresult
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
    }
  },

  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    const yes = this.data.yes
    for (let i = 0, len = yes.length; i < len; ++i) {
      yes[i].checked = yes[i].id == e.detail.value
    }
    this.setData({
      yes
    })
    console.log(this.data.yes);
  }
})