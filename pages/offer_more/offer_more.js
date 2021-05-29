// pages/record_more/record_more.js
const util = require('../../Util/deleteOffer.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    offer: '',
    records: [],
    total: 0,
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
    if(this.data.offer.offer_type == 1){
      wx.request({
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
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
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
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
        url: 'https://api.luzhenmin.com/getOfferDetail',
        data: {
          userid: (wx.getStorageSync('id') || 'err'),
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
            records: res.data.data,
            total: res.data.data.length
          })
        }
      })
    }
  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -80)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex

    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let records = this.data.records
    records[productIndex].xmove = xmove

    this.setData({
      records: records
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if(e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if(e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 删除产品
   */
  handleDeleteProduct: function ({ currentTarget: { dataset: { id, index } } }) {
    let records = this.data.records
    // console.log(records.length)
    let productIndex = records.findIndex(item => item.id === id)
    // console.log(id)
    // console.log(index)
    let that = this;
    let last;
    if(index == 0){
      last = -1;
    }
    else{
      last = records[index-1].id;
    }
    if(records.length == 1){
      wx.showModal({
        title: '提示',
        content: '这是该申请的最后一条记录，确认删除？',
        success (res) {
          if(res.confirm){
            console.log("last one delete")
            wx.request({
              url: 'https://api.luzhenmin.com/deleteRecord',
              data: {
                total: that.data.total,
                index: index,
                current: id,
                last: last
              },
              header: {
                'content-type': 'application/json' //默认值
              },
              success: (res) => {
                console.log("delete successfully")
                wx.showToast({
                  title: "success",
                  icon: 'success',
                  duration: 1000,
                  complete:()=>{
                    setTimeout(
                      ()=> {
                        wx.navigateBack({
                          delta: 1,
                        })
                      },
                      1000
                    )
                  }
                })
              }
            })

          }
          else if(res.cancel){
            console.log('用户点击取消');
            that.setXmove(productIndex, 0)
          }
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '确认删除？',
        success (res) {
          if (res.confirm) {
            console.log("222")
            wx.request({
              url: 'https://api.luzhenmin.com/deleteRecord',
              data: {
                total: that.data.total,
                index: index,
                current: id,
                last: last
              },
              header: {
                'content-type': 'application/json' //默认值
              },
              success: (res) => {
                console.log("delete successfully")
                records.splice(productIndex, 1)
                that.setData({
                  records
                })
                if (records[productIndex]) {
                  that.setXmove(productIndex, 0)
                }
                wx.showToast({
                  title: "success",
                  icon: 'success',
                  duration: 1000,
                  complete:()=>{
                    setTimeout(
                      ()=> {
                        // wx.navigateBack({
                        //   delta: -1,
                        // })
                      },
                      1000
                    )
                  }
                })        
              
              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
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
    console.log(event.currentTarget.dataset.records)
    let record = JSON.stringify(event.currentTarget.dataset.records)
    wx.navigateTo({
      url: '/pages/record_add/record_add?record=' + record,
    })
  },

  deleteOffer: function (event) {
    let record = event.currentTarget.dataset.records
    // console.log(record[0])
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success (res) {
        if (res.confirm) {
          console.log("用户点击确定")
          util.deleteOffer(record)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  deleteRecord: function (event) {
    let that = this;
    let last;
    if(event.currentTarget.dataset.index == 0){
      last = -1;
    }
    else{
      last = that.data.records[event.currentTarget.dataset.index-1].id;
    }
    console.log(event.currentTarget.dataset.index-1)
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://api.luzhenmin.com/deleteRecord',
            data: {
              total: that.data.total,
              index: event.currentTarget.dataset.index,
              current: event.currentTarget.dataset.record_id,
              last: last
            },
            header: {
              'content-type': 'application/json' //默认值
            },
            success: (res) => {
              console.log("delete successfully")
              that.onShow();
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }
})