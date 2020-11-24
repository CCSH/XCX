// 小程序接口层
let request = require('request.js')

let app = getApp()

class InterFace {
  // MARK 需要登录
  static needLogin() {
    return new Promise((resolve, reject) => {
      let info = this.needLoginSync(app.userInfo)

      if (info) {
        resolve(info)
      } else {
        reject()
      }
    })
  }

  static needLoginSync() {
    var info = wx.getStorageSync(app.userInfo)
    if (info) {
      return info
    }
    //去登录
    app.gotoLogin()
    return null
  }

  // MARK 登录
  static login(event) {
    return request.get({
      url: app.baseUrl + 'login',
      param: event,
    })
  }
}

module.exports = InterFace
