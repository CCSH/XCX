// pages/start/start.js
const config = require('../../config')

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.handleData()
    }, 1.5 * 1000)
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
  onUnload: function () {},

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

  // MARK 处理数据
  handleData() {
    //取出本地版本
    wx.getStorage({
      key: app.version,
      success: (result) => {
        console.log('本地版本', result.data, '\n最新版本', config.version)
        if (result.data != config.version) {
          // 进入欢迎页
          app.gotoWelCome()
        } else {
          //进入广告页
          app.gotoAd()
        }
      },
      fail: () => {
        //进入广告页
        app.gotoAd()
      },
      complete: () => {},
    })
  },
})
