// pages/login/login.js
// import Toast from '/@vant/weapp/toast/toast'
import InterFace from '../../utils/interface'

let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        name: '账号',
        placeholder: '请输入账号',
        value: '',
      },
      {
        name: '密码',
        placeholder: '请输入密码',
        value: '',
      },
    ],
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

  // MARK 输入框
  onInput(event) {
    let value = event.detail.value
    let index = event.currentTarget.dataset.param
    var listData = this.data.listData

    var item = listData[index]
    item.value = value

    this.setData({
      listData,
    })
  },

  // MARK 登录
  onLogin() {
    var listData = this.data.listData
    let name = listData[0].value
    let password = listData[1].value
    if (name.length == 0) {
      Toast('请输入账号')
      return
    }
    if (password.length == 0) {
      Toast('请输入密码')
      return
    }

    // 进行登录
    // Toast(`账号:${name} 密码:${password}`)

    wx.showLoading({
      title: '登录中',
      mask: true,
    })

    // 接口请求
    InterFace.login({
      name,
      password,
    })
      .then((res) => {
        if (res) {
          app.userInfo = {
            user_id: '1',
          }
          wx.redirectTo({
            url: '/pages/wl_list/wl_list',
          })
          return
        }

        Toast('登录失败:', res)
      })
      .catch(() => {
        Toast('登录失败')
      })
  },
})
