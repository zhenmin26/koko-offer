function deleteOffer(record) {
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

module.exports = {
  deleteOffer
}