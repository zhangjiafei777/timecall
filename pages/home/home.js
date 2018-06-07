// pages/home/home.js
let genuine = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  unfold() {
    let that = this
    
    genuine = !genuine
    if (genuine) {
      var animation1 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation2 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation3 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation4 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation5 = wx.createAnimation({
        duration: 100,
        timingFunction: "ease"
      })
      animation1.rotate(130).step()
      animation2.scale(3.5, 3.5).step()
      animation5.rotate(45).step()
      that.setData({
        animationData1: animation1.export(),
        animationData2: animation2.export()
      })
      setTimeout(function () {
        animation3.translate(-50, 0).step()
        animation4.translate(0, -45).step()
        animation5.translate(-45, 0).step()
        that.setData({
          animationData5: animation5.export(),
          animationData3: animation3.export(),
          animationData4: animation4.export()
        })
      }, 200)
    }else{
      var animation1 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation2 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation3 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation4 = wx.createAnimation({
        duration: 200,
        timingFunction: "ease"
      })
      var animation5 = wx.createAnimation({
        duration: 100,
        timingFunction: "ease"
      })
      animation1.rotate(0).step()

      animation3.translate(0, 0).step()
      animation4.translate(0, 0).step()
      animation5.translate(0, 0).step()
      that.setData({
        animationData1: animation1.export(),
        animationData3: animation3.export(),
        animationData4: animation4.export(),
        animationData5: animation5.export()
      })
      setTimeout(function () {
        animation2.scale(1, 1).step()
        that.setData({
          animationData2: animation2.export()
        })
      }, 200)
    }
  },
  myNav(){
    wx.navigateTo({
      url: '../messageLoop/messageLoop',
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

  }
})