const Routing = require('./utils/routing')

//app.js
App({
  // 系统信息
  winW: 0,
  winH: 0,
  statusBarH: 0,
  systemName: '',
  systemVersion: '',
  systemSDKVersion: '',
  // 主机地址
  baseUrl: 'https://legong.frnnet.com/',
  // 是否是全面屏
  isFull: false,
  bottomH: 0,

  onLaunch: function (options) {
    let self = this
    let systemInfo = wx.getSystemInfoSync()
    //设置
    self.systemName = systemInfo.system
    self.systemVersion = systemInfo.version
    self.systemSDKVersion = systemInfo.SDKVersion
    self.winW = systemInfo.windowWidth
    self.winH = systemInfo.windowHeight
    self.statusBarH = systemInfo.statusBarHeight
    // 保护
    if (!self.statusBarH) {
      self.statusBarH = 20
    }
    self.isFull = self.statusBarH > 20
    if (self.isFull) {
      self.bottomH = 34
    }
  },

  //本地key
  version: 'app_version',

  // MARK 进入欢迎页
  gotowWelCome() {
    wx.redirectTo({
      url: Routing.setRouting('welcome'),
    })
  },

  // MARK 进入广告页
  gotoAd() {
    wx.redirectTo({
      url: Routing.setRouting('ad'),
    })
  },

  // MARK 进入首页
  gotoHome() {
    wx.redirectTo({
      url: Routing.setRouting('home'),
    })
  },
})
