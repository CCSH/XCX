// 小程序接口层
let request = require('request.js')

let app = getApp()

class InterFace {
  // MARK 主机地址
  static baseUrl = 'https://legong.frnnet.com/'

  // MARK 登录
  static login(event) {
    return request.get({
      url: this.baseUrl + 'index.php/api/UsersIndex/category/',
      param: event,
    })
  }

  // MARK 订单列表
  static orderList(event) {
    event = event ? event : {}
    if (app.userInfo) {
      event.user_id = app.userInfo.user_id
    }
    return request.get({
      url: this.baseUrl + 'order_list',
      param: event,
    })
  }

  // MARK 订单详情
  static orderDetail(event) {
    event = event ? event : {}

    if (app.userInfo) {
      event.user_id = app.userInfo.user_id
    }
    return request.get({
      url: this.baseUrl + 'order_fetail',
      param: event,
    })
  }

  // MARK 确认收货
  static confirmGood(event) {
    return request.post({
      url: this.baseUrl + 'confirm_good',
      param: event,
    })
  }
}

module.exports = InterFace
