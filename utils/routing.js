class Routing {
  // MARK 主页
  static home = 'home/index'
  // MARK 路由设置
  static setRouting(name, param) {
    //设置路径
    var routingName = '/pages/'

    if (name.indexOf(routingName) == -1) {
      //补根目录(/pages/name)
      routingName += `${name}`
      if (routingName.split('/').length == 3) {
        //补具体路径(/pages/name/name)
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

  //MARK 重定向跳转
  static redirectTo(name, param) {
    console.log(this.setRouting(name, param))
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
    let currentPages = getCurrentPages().reverse()
    //没有名字 返回上一页面
    if (!routeName) {
      if (currentPages > 1) {
        //返回上一页面
        wx.navigateBack({
          delta: 1,
        })
        return
      }
    } else {
      //有名字
      routeName = this.setRouting(routeName)
      var isHave = false
      //查找
      currentPages.some((item, index) => {
        item.route = '/' + item.route
        //找到了
        if (item.route == routeName) {
          isHave = true
          //数据给他
          item.onCallBack(data)
          //返回这个页面
          wx.navigateBack({
            delta: index,
          })
          return true
        }
        if (isHave) {
          return
        }
      })
    }
    //去首页
    this.switchTab(this.home)
  }
}

module.exports = Routing
