// 小程序数据库
wx.cloud.init()
const db = wx.cloud.database()
const userDB = 'user_info'

class Store {
  // MARK 获取用户信息
  static getUserInfo() {
    return this.get(userDB)
  }

  // MARK 清除用户信息
  static deleteUserInfo() {
    return this.delete(userDB)
  }

  //MARK 添加用户信息
  static addUserInfo(event) {
    //清除之前用户
    return this.deleteUserInfo().then((res) => {
      // 添加用户信息
      return this.add(userDB, event)
    })
  }

  // MARK 修改(根据条件修改：没有新增，有的话修改)
  static modify(table, where, data) {
    return this.get(table, where).then((res) => {
      if (res) {
        //修改
        let temp = Object.assign(res, data)
        return this.update(table, temp._id, temp)
      } else {
        //新增
        return this.add(table, data)
      }
    })
  }

  // MARK 删除(根据条件删除)
  static delete(table, where) {
    return this.get(table, where).then((res) => {
      if (res.length) {
        res.map((item) => {
          this.remove(table, item._id)
        })
      }
    })
  }

  // MARK 增
  static add(table, data) {
    return db.collection(table).add({ data: data })
  }

  // MARK 删
  static remove(table, key) {
    return db.collection(table).doc(key).remove()
  }

  // MARK 改
  static update(table, key, data) {
    return db.collection(table).doc(key).update({
      data: data,
    })
  }

  // MARK 查
  static get(table, where) {
    return db
      .collection(table)
      .where(where ? where : {})
      .get()
      .then((res) => {
        if (res.data) {
          return res.data
        }
        return res
      })
  }

  //获取本地数据
  static getStorage(key) {
    return new Promise((resolve, reject) => {
      let res = wx.getStorageSync(key)

      if (res) {
        resolve(res)
      } else {
        reject(null)
      }
    })
  }

  //设置本地数据
  static setStorage(key, data) {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data,
        success: () => {
          resolve(true)
        },
        fail: () => {
          reject(false)
        },
      })
    })
  }
}

module.exports = Store
