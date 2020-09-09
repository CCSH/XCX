// 小程序接口层
let request = require('request.js')
const Store = require('./store')

let app = getApp()

class InterFace {
  // MARK 主机地址
  static baseUrl = 'https://www.baidu.com/'

  // MARK 需要登录
  static needLogin() {
    return Store.getStorage(app.userInfo).catch(() => {
      //去登录
      app.gotoLogin()
    })
  }

  // MARK 登录
  static login(event) {
    return request.get({
      url: this.baseUrl + 'login',
      param: event,
    })
  }
}

module.exports = InterFace
