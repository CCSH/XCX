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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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

  // MARK 点击
  onClick() {
    let dataSoure = this.data.dataSoure

    switch (dataSoure.linkType) {
      case 0:
        break

      default:
        break
    }
    app.gotoHome()
  },
})
