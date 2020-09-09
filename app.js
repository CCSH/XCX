const Routing = require('./utils/routing')
const config = require('./config')
const Store = require('./utils/store')

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
  baseUrl: 'http://www.baidu.com/',
  // 是否是全面屏
  isFull: false,
  bottomH: 0,

  // MARK 本地key
  // 版本
  version: 'app_version',
  // 用户信息
  userInfo: 'user-info',

  // MARK 临时数据
  // 广告点击数据
  adData: null,

  // MARK 页面加载
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

  // MARK 进入欢迎页
  gotoWelCome() {
    //存储版本下次不展示欢迎页
    Store.setStorage(this.version, config.version)

    //跳转
    Routing.redirectTo('welcome')
  },

  // MARK 进入广告页
  gotoAd() {
    Routing.redirectTo('ad')
  },

  // MARK 进入首页
  gotoHome(event) {
    //设置数据
    this.adData = event
    //跳转
    Routing.switchTab('home')
  },
})
