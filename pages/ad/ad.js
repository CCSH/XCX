// pages/ad/ad.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataSoure: {
      imgurl:
        'http://web.frnnet.com/Attachment/Images/20200820/5f3df1c2930cf.png',
      linkurl: 'http://www.frnnet.com',
      linkType: 0,
    },
    time: 3,
    timer: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countDown()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.clearTimer()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 点击
  onClick() {
    this.clearTimer()

    let dataSoure = this.data.dataSoure

    switch (dataSoure.linkType) {
      case 0:
        break

      default:
        break
    }
    app.gotoHome(this.data.dataSoure)
  },

  // MARK 倒计时
  countDown() {
    let self = this
    var time = this.data.time
    var timer = setInterval(() => {
      --time

      if (time <= 0) {
        //倒计时结束
        self.clearTimer()
        app.gotoHome()
        return
      }

      self.setData({
        time,
      })
    }, 1 * 1000)
    //设置定时器
    this.setData({
      timer,
    })
  },

  // MARK 清除定时器
  clearTimer() {
    clearInterval(this.data.timer)
  },

  // MARK 跳过
  onSkip() {
    this.clearTimer()
    app.gotoHome()
  },
})
