// pages/test/test.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    multiArrayOfStudy: [],
    multiIndexOfStudy: [],
    array:[{
      "CreateTime":"2021年03月19日",
      "CreateTime1":"11:24:19",
      "Lsh":"210319112419179022",
      "UserName":"11",
      "text1":"重新佩戴安全带时失去平衡",
      "text2":"重新佩戴安全带时失去平衡"
  },{
      "CreateTime":"2021年03月19日",
      "CreateTime1":"11:24:19",
      "Lsh":"210319112419179022",
      "UserName":"11",
      "text1":"重新佩戴安全带时失去平衡",
      "text2":"重新佩戴安全带时失去平衡"
  }],
  axis:[
    {
      time:'2018-2-15',
      name:'张三',
      event:'垃圾太多'
    },
    {
      time: '2018-2-15',
      name: '王三',
      event: '垃圾太多'
    },
    {
      time: '2018-2-15',
      name: '张三',
      event: '垃圾太多'
    },
    {
      time: '2018-2-15',
      name: '张三',
      event: '垃圾太多'
    },

  ]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url:'https://api.luzhenmin.com/getSchoolList',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        var school_list = res.data.data;
        var schoolArr = school_list.map(item => { // 此方法将company名称区分到一个新数组中
          return item.school_name;
        });
        that.setData({
          multiArrayOfStudy: [schoolArr, []],　　　　
          school_list,
          schoolArr
        })
        var default_school_id = school_list[0]['school_id'];　//获取默认的校区对应的company_id
        if (default_school_id) {
          that.searchStudyInfo(default_school_id) // 如果存在调用获取对应的position数据
        }
      }
    })   
    
  },
 
  bindMultiPickerColumnChangeOfInternship: function (e) {
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
          this.searchStudyInfo(school_id);　　　　　　
        }
        data.multiIndexOfStudy[1] = 0;
        break;
    }
    this.setData(data);
  },

  bindMultiPickerChangeOfInternship: function (e) {
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

  searchStudyInfo(school_id){
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
          var master_list = res.data.data;
          var masterArr = master_list.map(item => {
            return item.master_name;
          })
          masterArr.unshift('All programs');
          var companyArr = this.data.masterArr;
          that.setData({
            multiArrayOfStudy: [companyArr, masterArr],
            masterArr,
            master_list
          })
        }
      })
    }
  },
})