Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#FC594E',
    list: [
      {
        pagePath: '/pages/home/home',
        text: '首页',
        iconPath: '/images/tabbar_home.png',
        selectedIconPath: '/images/tabbar_home_h.png',
      },
      {
        pagePath: '/pages/school/school',
        text: '学堂',
        iconPath: '/images/tabbar_school.png',
        selectedIconPath: '/images/tabbar_school_h.png',
      },
      {
        pagePath: '/pages/e_village/e_village',
        iconPath: '/images/tabbar_ecun.png',
      },
      {
        pagePath: '/pages/message/message',
        text: '交流',
        iconPath: '/images/tabbar_message.png',
        selectedIconPath: '/images/tabbar_message_h.png',
      },
      {
        pagePath: '/pages/me/me',
        text: '我的',
        iconPath: '/images/tabbar_me.png',
        selectedIconPath: '/images/tabbar_me_h.png',
      },
    ],
  },
  attached() {},
  methods: {
    onClick(e) {
      const data = e.currentTarget.dataset
      const url = data.path

      if (data.index == 2) {
        console.log('点击了中间')
        return
      }

      wx.switchTab({ url })
    },
  },
})
