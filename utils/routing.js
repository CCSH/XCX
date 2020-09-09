// 小程序路由
class Routing {
  // 首页
  static homePage = '/pages/home/index'

  // MARK 路由设置
  static setRouting(name, param) {
    //设置路径
    var routingName = ''

    if (name.indexOf('/pages/') == -1) {
      //补根目录
      routingName = `/pages/${name}`
      if (routingName.split('/').length == 3) {
        //补具体路径
        routingName = `${routingName}/${name}`
      }
    }

    //设置参数
    var routingParam = ''

    if (param) {
      routingParam = `?param=${JSON.stringify(param)}`
    }
    return `${routingName}${routingParam}`
  }

  // MARK 获取路由参数
  static getRoutingParam(event) {
    if (event.param) {
      return JSON.parse(event.param)
    }
    return null
  }

  // MARK 导航跳转
  static navTo(name, param) {
    wx.navigateTo({
      url: this.setRouting(name, param),
    })
  }

  // MARK 重定向
  static redirectTo(name, param) {
    wx.redirectTo({
      url: this.setRouting(name, param),
    })
  }

  // MARK 跳转tab
  static switchTab(name, param) {
    wx.switchTab({
      url: this.setRouting(name, param),
    })
  }

  // MARK 导航返回指定页面
  static navBack(routeName, data) {
    let currentPages = getCurrentPages()

    //存在栈
    if (currentPages > 1) {
      var page = null
      var delta = 1

      if (routeName) {
        currentPages.some((item, index) => {
          //找到了
          if (item.route.indexOf(routeName)) {
            page = item
            delta = currentPages.length - 1 - index
            return true
          }
        })
      }

      if (!page) {
        // 取出最后一个
        page = currentPages[currentPages.length - 1]
      }

      //设置数据
      if (data) {
        page.onShow(data)
      }

      //返回
      wx.navigateBack({
        delta,
      })
    } else {
      //去首页
      wx.redirectTo({
        url: this.homePage,
      })
    }
  }
}

module.exports = Routing
