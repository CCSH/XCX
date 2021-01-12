// 小程序请求层
module.exports = {
  post,
  get,
  download,
  upload,
}

// LOG控制
let isLog = true
// 网络请求超时
let timeOut = 10 * 1000

// MARK GET请求
function get(event) {
  event.method = 'GET'
  return request(event)
}

// MARK POST请求
function post(event) {
  event.method = 'POST'
  return request(event)
}

// MARK 网络请求
function request(event) {
  //参数可以在这里统一处理
  var data = event.param ? event.param : {}
  data.flag = 'weixin'

  return new Promise((resolve, reject) => {
    wx.request({
      url: event.url,
      data: data,
      method: event.method ? event.method : 'GET',
      dataType: 'json',
      timeout: timeOut,
      responseType: 'text',
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (error) {
        reject(error)
      },
      complete: (res) => {
        wx.hideLoading()
        wx.stopPullDownRefresh()
        if (isLog) {
          console.log('地址:', event.url, '\n参数:', data, '\n响应:', res)
        }
      },
    })
  })
}

// MARK 下载文件
function download(event) {
  var task = wx.downloadFile({
    url: event.url,
    fail: () => {},
    complete: (res) => {
      if (isLog) {
        console.log('文件下载:', res)
      }
    },
  })
  // DownloadTask.abort()
  // 中断下载任务

  // DownloadTask.onProgressUpdate(function callback)
  // 监听下载进度变化事件

  // DownloadTask.offProgressUpdate(function callback)
  // 取消监听下载进度变化事件
  return task
}

// MARK 上传文件
function upload(event) {
  var task = wx.uploadFile({
    url: event.url,
    filePath: event.filePath,
    name: Date.parse(new Date()),
    formData: event.formData,
    complete: (res) => {
      if (isLog) {
        console.log('文件上传:', res)
      }
    },
  })

  // UploadTask.abort()
  // 中断上传任务

  // UploadTask.onProgressUpdate(function callback)
  // 监听上传进度变化事件

  // UploadTask.offProgressUpdate(function callback)
  // 取消监听上传进度变化事件
  return task
}
