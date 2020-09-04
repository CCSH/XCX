// pages/home/home.js
let app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    titleList: ['推荐视频', '热门专家'],
    integralData: [
      {
        name: '积分抽奖',
        img: 'jf_cj',
      },
      {
        name: '积分拍卖',
        img: 'jf_pm',
      },
    ],
    dataSoure: {
      ad_list: [
        {
          id: '12',
          title: '\u6613\u6751',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20200811/5f322fbae9b25.png',
          linkurl: 'http://web.frnnet.com/Public/index/id/1943',
          content: '',
          news_id: '1943',
          type: '0',
          flag: '0',
          sort: '188',
        },
        {
          id: '8',
          title: '\u54c8\u5c14\u6ee8\u5e02\u519c\u4e1a\u79d1\u5b66\u9662',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170515/59191d50ba263.jpg',
          linkurl: 'http://www.haas.org.cn',
          content: '',
          news_id: '0',
          type: '0',
          flag: '0',
          sort: '254',
        },
        {
          id: '19',
          title:
            '\u4e94\u5927\u8fde\u6c60\u5e02\u519c\u8d44\u5e97\u6574\u5408\u4fe1\u606f',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20191008/5d9c56e4480ac.jpg',
          linkurl: 'http://web.frnnet.com/Public/index/id/3233',
          content: '',
          news_id: '3233',
          type: '0',
          flag: '0',
          sort: '255',
        },
        {
          id: '14',
          title:
            '[\u7cbe] \u521b\u4e1a\u6210\u529f\u6848\u4f8b\u6574\u5408\u8d34!',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20191018/5da92a6cd865c.png',
          linkurl: 'http://web.frnnet.com/Public/index/id/3300',
          content: '',
          news_id: '0',
          type: '0',
          flag: '0',
          sort: '255',
        },
      ],
      item_list: [
        {
          id: '6',
          item_name: '\u653f\u7b56\u6cd5\u89c4',
          color: '#888888',
          imgurl: 'http://web.frnnet.com/Attachment/Images/modules/policy.png',
          linkurl: '',
          flag: '5',
        },
        {
          id: '7',
          item_name: '\u519c\u60c5\u670d\u52a1',
          color: '#888888',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/modules/hangqing.png',
          linkurl: '',
          flag: '6',
        },
        {
          id: '8',
          item_name: '\u54a8\u8be2\u4e13\u5bb6',
          color: '#888888',
          imgurl: 'http://web.frnnet.com/Attachment/Images/modules/zixun.png',
          linkurl: '',
          flag: '7',
        },
        {
          id: '1',
          item_name: '\u60e0\u6c11\u4ed3\u4e70',
          color: '#888888',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/modules/business.png',
          linkurl: '',
          flag: '1',
        },
        {
          id: '4',
          item_name: '\u519c\u4e1a\u6c14\u8c61',
          color: '#888888',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20171116/5a0cef411f12b.png',
          linkurl: 'http://www.nmc.cn/',
          flag: '8',
        },
        {
          id: '5',
          item_name: '\u60e0\u6c11\u670d\u52a1',
          color: '#888888',
          imgurl: 'http://web.frnnet.com/Attachment/Images/modules/coupon.png',
          linkurl: '',
          flag: '4',
        },
        {
          id: '3',
          item_name: '\u77e5\u8bc6\u5e93',
          color: '#888888',
          imgurl: 'http://web.frnnet.com/Attachment/Images/modules/nong.png',
          linkurl: '',
          flag: '3',
        },
        {
          id: '2',
          item_name: '\u4f9b\u6c42\u901f\u914d',
          color: '#888888',
          imgurl: 'http://web.frnnet.com/Attachment/Images/modules/didi.png',
          linkurl: '',
          flag: '2',
        },
      ],
      cate_list: [
        {
          id: '1',
          category_name: '\u519c\u4e1a\u5934\u6761',
          category_image:
            'http://web.frnnet.com/Attachment/Images/20180130/5a6fd1a6010b9.png',
          color: '#50b804',
          article_list: [
            {
              id: '3658',
              title:
                '\u519c\u4f5c\u7269\u75c5\u866b\u60c5\u62a5 \u4e09\u4ee3\u9ecf\u866b\u53d1\u751f\u8d8b\u52bf\u9884\u62a5',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f32417717ad4.jpg',
              shortdes:
                '\u519c\u4f5c\u7269\u75c5\u866b\u60c5\u62a5 \u4e09\u4ee3\u9ecf\u866b\u53d1\u751f\u8d8b\u52bf\u9884\u62a5',
              info_url: 'http://web.frnnet.com/Public/index/id/3658',
            },
            {
              id: '3654',
              title:
                '2020\u5e74\u7b2c\u4e8c\u5b63\u5ea6\u519c\u4ea7\u54c1\u62bd\u68c0\u603b\u4f53\u5408\u683c\u738797.1% ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f323d0368a02.jpg',
              shortdes:
                '2020\u5e74\u7b2c\u4e8c\u5b63\u5ea6\u519c\u4ea7\u54c1\u62bd\u68c0\u603b\u4f53\u5408\u683c\u738797.1% ',
              info_url: 'http://web.frnnet.com/Public/index/id/3654',
            },
            {
              id: '3653',
              title:
                '\u9ed1\u9f99\u6c5f\u7701\u519c\u4e1a\u519c\u6751\u5385\u901a\u544a ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200810/5f30af01131c2.jpg',
              shortdes:
                '\u9ed1\u9f99\u6c5f\u7701\u519c\u4e1a\u519c\u6751\u5385\u901a\u544a ',
              info_url: 'http://web.frnnet.com/Public/index/id/3653',
            },
            {
              id: '3650',
              title:
                '\u54c8\u5c14\u6ee8\u5e02\u9ad8\u8d77\u70b9\u89c4\u5212 \u9ad8\u4f4d\u63a8\u8fdb\u9ad8\u6807\u51c6\u519c\u7530\u5efa\u8bbe\u7ecf\u9a8c\u505a\u6cd5 ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200805/5f2a226a2cab9.png',
              shortdes:
                '\u54c8\u5c14\u6ee8\u5e02\u9ad8\u8d77\u70b9\u89c4\u5212 \u9ad8\u4f4d\u63a8\u8fdb\u9ad8\u6807\u51c6\u519c\u7530\u5efa\u8bbe\u7ecf\u9a8c\u505a\u6cd5 ',
              info_url: 'http://web.frnnet.com/Public/index/id/3650',
            },
            {
              id: '3647',
              title:
                '\u6211\u7701\u8981\u6c42\u63d0\u9ad8\u8b66\u60d5\u4e25\u9632\u65f1\u6d9d\u6025\u8f6c ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200805/5f2a1d7f4f292.jpg',
              shortdes:
                '\u6211\u7701\u8981\u6c42\u63d0\u9ad8\u8b66\u60d5\u4e25\u9632\u65f1\u6d9d\u6025\u8f6c ',
              info_url: 'http://web.frnnet.com/Public/index/id/3647',
            },
          ],
        },
        {
          id: '2',
          category_name: '\u5927\u4f17\u521b\u4e1a',
          category_image:
            'http://web.frnnet.com/Attachment/Images/20180130/5a6fd1dbedd3e.png',
          color: '#cf2748',
          article_list: [
            {
              id: '3665',
              title:
                '\u4f9d\u5170\u7f8e\u4e3d\u4e61\u6751\u98ce\u666f\u7ebf \u6c11\u5bcc\u4e1a\u5174\u6d3b\u529b\u6765',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f3253dc8395f.jpg',
              shortdes:
                '\u4f9d\u5170\u7f8e\u4e3d\u4e61\u6751\u98ce\u666f\u7ebf \u6c11\u5bcc\u4e1a\u5174\u6d3b\u529b\u6765',
              info_url: 'http://web.frnnet.com/Public/index/id/3665',
            },
            {
              id: '3664',
              title:
                '\u521b\u4e1a\u4e09\u5e74 \u4e09\u5927\u6b65\u2014\u2014\u8bb0\u53cc\u57ce\u5e02\u7acb\u81e3\u852c\u83dc\u79cd\u690d\u4e13\u4e1a\u5408\u4f5c\u793e\u7406\u4e8b\u957f\uff1a\u5218\u7acb\u81e3',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f32531592066.jpg',
              shortdes:
                '\u521b\u4e1a\u4e09\u5e74 \u4e09\u5927\u6b65\u2014\u2014\u8bb0\u53cc\u57ce\u5e02\u7acb\u81e3\u852c\u83dc\u79cd\u690d\u4e13\u4e1a\u5408\u4f5c\u793e\u7406\u4e8b\u957f\uff1a\u5218\u7acb\u81e3',
              info_url: 'http://web.frnnet.com/Public/index/id/3664',
            },
            {
              id: '3663',
              title:
                '\u9760\u54c1\u5fb7\u5e26\u52a8\u519c\u6c11 \u9760\u79d1\u5b66\u589e\u52a0\u6536\u5165\u2014\u2014\u8bb0\u5bbe\u53bf\u9e1f\u6cb3\u4e61\u4e50\u9675\u6751\uff1a\u738b\u6d2a\u98de',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f32524e806b7.jpg',
              shortdes:
                '\u9760\u54c1\u5fb7\u5e26\u52a8\u519c\u6c11 \u9760\u79d1\u5b66\u589e\u52a0\u6536\u5165\u2014\u2014\u8bb0\u5bbe\u53bf\u9e1f\u6cb3\u4e61\u4e50\u9675\u6751\uff1a\u738b\u6d2a\u98de',
              info_url: 'http://web.frnnet.com/Public/index/id/3663',
            },
            {
              id: '3646',
              title: '\u9e2d\u7a3b\u5171\u751f\u4e00\u5730\u53cc\u6536 ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200805/5f2a1c9ff0139.jpg',
              shortdes: '\u9e2d\u7a3b\u5171\u751f\u4e00\u5730\u53cc\u6536 ',
              info_url: 'http://web.frnnet.com/Public/index/id/3646',
            },
            {
              id: '3645',
              title:
                '\u547c\u5170\u201c\u7cef\u7389\u7c73\u201d\u751c\u5168\u56fd ',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200805/5f2a1c3b9cebe.jpg',
              shortdes:
                '\u547c\u5170\u201c\u7cef\u7389\u7c73\u201d\u751c\u5168\u56fd ',
              info_url: 'http://web.frnnet.com/Public/index/id/3645',
            },
          ],
        },
        {
          id: '5',
          category_name: '\u6587\u5316\u4e0b\u4e61',
          category_image:
            'http://web.frnnet.com/Attachment/Images/20180130/5a6fd1f51d641.png',
          color: '#fe4e06',
          article_list: [
            {
              id: '3670',
              title:
                '\u547c\u739b\u53bf\u63a8\u52a8\u6587\u660e\u4e61\u98ce\u5efa\u8bbe',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200901/5f4dd825cd610.jpg',
              shortdes:
                '\u547c\u739b\u53bf\u63a8\u52a8\u6587\u660e\u4e61\u98ce\u5efa\u8bbe',
              info_url: 'http://web.frnnet.com/Public/index/id/3670',
            },
            {
              id: '3669',
              title:
                '\u6211\u77018\u6751\u5165\u56f4\u4e2d\u56fd\u7f8e\u4e3d\u4f11\u95f2\u4e61\u6751',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200901/5f4dd7c90d287.jpg',
              shortdes:
                '\u6211\u77018\u6751\u5165\u56f4\u4e2d\u56fd\u7f8e\u4e3d\u4f11\u95f2\u4e61\u6751',
              info_url: 'http://web.frnnet.com/Public/index/id/3669',
            },
            {
              id: '3668',
              title:
                '2020\u5e74\u4e2d\u56fd\u519c\u6c11\u4e30\u6536\u8282\u91d1\u79cb\u6d88\u8d39\u5b63\u6807\u8bc6\u6b63\u5f0f\u53d1\u5e03',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200901/5f4dd77ca011f.png',
              shortdes:
                '2020\u5e74\u4e2d\u56fd\u519c\u6c11\u4e30\u6536\u8282\u91d1\u79cb\u6d88\u8d39\u5b63\u6807\u8bc6\u6b63\u5f0f\u53d1\u5e03',
              info_url: 'http://web.frnnet.com/Public/index/id/3668',
            },
            {
              id: '3667',
              title:
                '\u4e2d\u5143\u8282\u662f\u4ec0\u4e48\u8282\u65e5\uff1f\u4e2d\u5143\u8282\u6709\u54ea\u4e9b\u98ce\u4fd7\u548c\u7981\u5fcc\uff1f',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200901/5f4dd689879d6.jpg',
              shortdes:
                '\u4e2d\u5143\u8282\u662f\u4ec0\u4e48\u8282\u65e5\uff1f\u4e2d\u5143\u8282\u6709\u54ea\u4e9b\u98ce\u4fd7\u548c\u7981\u5fcc\uff1f',
              info_url: 'http://web.frnnet.com/Public/index/id/3667',
            },
            {
              id: '3666',
              title:
                '\u8087\u5dde\u53bf\u6c38\u80dc\u4e61\uff1a\u70df\u53f6\u6536\u83b7\u5fd9 \u70e4\u70df\u82b3\u9999\u4f20\u5341\u91cc',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f325447cabd0.jpg',
              shortdes:
                '\u8087\u5dde\u53bf\u6c38\u80dc\u4e61\uff1a\u70df\u53f6\u6536\u83b7\u5fd9 \u70e4\u70df\u82b3\u9999\u4f20\u5341\u91cc',
              info_url: 'http://web.frnnet.com/Public/index/id/3666',
            },
            {
              id: '3662',
              title:
                '\u201c\u5b81\u820d\u4e00\u987f\u996d\uff0c\u4e0d\u820d\u4e8c\u4eba\u8f6c\u201d \u770b\u4e1c\u5317\u6c11\u4fd7\u6587\u5316\u7684\u201c\u524d\u4e16\u4eca\u751f\u201d',
              imgurl:
                'http://web.frnnet.com/Attachment/Images/20200811/5f324a0821715.jpg',
              shortdes:
                '\u201c\u5b81\u820d\u4e00\u987f\u996d\uff0c\u4e0d\u820d\u4e8c\u4eba\u8f6c\u201d \u770b\u4e1c\u5317\u6c11\u4fd7\u6587\u5316\u7684\u201c\u524d\u4e16\u4eca\u751f\u201d',
              info_url: 'http://web.frnnet.com/Public/index/id/3662',
            },
          ],
        },
      ],
      videos_list: [
        {
          id: '174',
          video_name:
            '\u751c\u74dc\u7684\u75c5\u866b\u5bb3\u9632\u6cbb\uff08\u4e0b\uff09',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190620/5d0b51b0ed563.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190620/5d0b51b52344f.mp4',
          video_des:
            '75%\u767e\u83cc\u6e05\u53ef\u6e7f\u6027\u7c89\u5242\uff0c70%\u4ee3\u68ee\u9530\u950c\u53ef\u6e7f\u6027\u7c89\u5242\uff0c58%\u7532\u971c\u7075\u9530\u950c\u7c89\u5242500-600\u500d\u6db2',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '1',
        },
        {
          id: '173',
          video_name:
            '\u751c\u74dc\u7684\u75c5\u866b\u5bb3\u9632\u6cbb\uff08\u4e0a\uff09',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190620/5d0b512fc9ee7.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190620/5d0b513d3374b.mp4',
          video_des:
            '\u731d\u5012\u75c5\uff0c\u75ab\u75c5\uff0c\u767d\u7c89\u75c5\uff0c\u6162\u67af\u75c5\uff0c\u9ec4\u6761\u8df3\u7532\uff0c\u5730\u8001\u864e\uff0c\u869c\u866b\u7b49',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '1',
        },
        {
          id: '172',
          video_name: '\u751c\u74dc\u7684\u91c7\u6536\u6807\u51c6',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190620/5d0b49eb01d7d.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190620/5d0b49ff83750.mp4',
          video_des:
            '\u5f00\u82b1\u540e50\u5929\u5de6\u53f3\uff0c\u679c\u76ae\u7070\u7eff\uff0c\u74dc\u524d\u53f6\u53d8\u9ec4\uff0c\u8110\u90e8\u53d1\u8f6f\uff0c\u6709\u9999\u6c14\uff0c\u74dc\u53d8\u8f7b\uff0c\u7f51\u7eb9\u7a81\u51fa',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '1',
        },
        {
          id: '166',
          video_name:
            '\u79cd\u732a\u7684\u65e5\u5e38\u7ba1\u7406--\u75ab\u75c5\u9632\u6cbb',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190617/5d0756438e9db.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190617/5d075662c73b8.mp4',
          video_des: '',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '0',
        },
        {
          id: '165',
          video_name:
            '\u79cd\u732a\u7684\u65e5\u5e38\u7ba1\u7406--\u732a\u820d\u4e0e\u73af\u5883\uff08\u4e0b\uff09',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190617/5d0754296a8fc.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190617/5d07544211851.mp4',
          video_des: '',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '0',
        },
        {
          id: '164',
          video_name:
            '\u79cd\u732a\u7684\u65e5\u5e38\u7ba1\u7406--\u732a\u820d\u4e0e\u73af\u5883\uff08\u4e0a\uff09',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20190617/5d0752247d82b.jpg',
          video_url:
            'http://web.frnnet.com/Attachment/Videos/20190617/5d07524167424.mp4',
          video_des: '',
          expert_name: '\u4e13\u4e1a\u6280\u672f\u8bfe\u7a0b',
          winnow: '0',
        },
      ],
      expert_list: [
        {
          id: '41',
          phone: '18800000010',
          realname: '\u6234\u5fe0\u4ec1',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264ba36f792.jpg',
          profile: '\u9ad8\u7ea7\u519c\u827a\u5e08',
          des:
            '\u535a\u58eb\u5b66\u4f4d\uff0c\u9ad8\u7ea7\u519c\u827a\u5e08\uff0c\u9009\u80b2\u89c2\u8d4f\u5357\u74dc\u65b0\u54c1\u79cd2\u4e2a\uff0c\u586b\u8865\u4e86\u6211\u56fd\u53ca\u6211\u7701\u5728\u8fd9\u65b9\u9762\u9009\u80b2\u7684\u7a7a\u767d\u3002\u83b7\u595616\u9879\u3002\u4e3b\u6301\u9752\u5e74\u57fa\u91d1\u9879\u76ee1\u9879\uff0c\u53c2\u4e0e\u7701\u3001\u5e02\u7ea7\u9879\u76ee3\u9879\u3002\u852c\u83dc\u683d\u57f9\u548c\u80b2\u79cd\u3002\r\n',
        },
        {
          id: '47',
          phone: '18800000016',
          realname: '\u5218\u7115\u6210',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264c65785af.jpg',
          profile: '\u5927\u8c46\u80b2\u79cd\u548c\u683d\u57f9\u6280\u672f',
          des:
            '\u9ad8\u7ea7\u519c\u827a\u5e08\uff0c\u535a\u58eb\u5b66\u4f4d\uff0c\u4e3b\u6301\u201c\u5bc6\u690d\u5927\u8c46\u65b0\u54c1\u79cd\u9009\u80b2\u53ca\u5bc6\u690d\u683d\u57f9\u6280\u672f\u7814\u7a76\u201d\u9879\u76ee\uff0c\u5e76\u83b7\u5f97\u7701\u4e30\u6536\u8ba1\u5212\u5956\u3002\u53c2\u4e0e\u683d\u57f9\u6280\u672f\u7814\u7a76\uff0c\u83b7\u5f97\u201c\u4e00\u79cd\u63d0\u9ad8\u5927\u8c46\u86cb\u767d\u8d28\u542b\u91cf\u7684\u683d\u57f9\u65b9\u6cd5\u201d\u7684\u683d\u57f9\u6280\u672f\u4e13\u5229\u3002',
        },
        {
          id: '46',
          phone: '18800000015',
          realname: '\u9ad8\u660e\u6ce2',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264c543e732.jpg',
          profile: '\u7389\u7c73\u54c1\u79cd\u9009\u80b2',
          des:
            '\u7855\u58eb\u5b66\u4f4d\uff0c\u5148\u540e\u4e3b\u6301\u54c8\u5c14\u6ee8\u5e02\u79d1\u6280\u521b\u65b0\u9752\u5e74\u57fa\u91d1\u9879\u76ee\u201c\u4f18\u8d28\u3001\u65e9\u719f\u5e74\u7389\u7c73\u54c1\u79cd\u9009\u80b2\u201d\u3001\u201c\u4f18\u8d28\u7c98\u7389\u7c73\u7684\u793a\u8303\u548c\u63a8\u5e7f\u201d\uff1b2010\u5e74\u4e3b\u6301\u54c8\u5c14\u6ee8\u5e02\u79d1\u6280\u653b\u5173\u9879\u76ee\u201c\u4f18\u8d28\u7c98\u7389\u7c73\u54c1\u79cd\u9009\u80b2\u4e0e\u63a8\u5e7f\u201d\u30022006\u5e74\u81f3\u4eca\u5148\u540e\u83b7\u5f97\u9ed1\u9f99\u6c5f\u7701\u519c\u4e1a\u79d1\u5b66\u6280\u672f\u4e8c\u7b49\u59562\u9879\uff1b\u9ed1\u9f99\u6c5f\u7701\u4e30\u6536\u8ba1\u5212\u59565\u9879\uff1b\u53d1\u8868\u6587\u7ae0\u6570\u4f59\u7bc7\u3002',
        },
        {
          id: '45',
          phone: '18800000014',
          realname: '\u4e8e\u6e05\u6d9b',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264c1cc3b3b.png',
          profile: '\u6c34\u7a3b\u80b2\u79cd\u53ca\u683d\u57f9\u6280\u672f',
          des:
            '\u7855\u58eb\u5b66\u4f4d\u3002\u54c8\u5c14\u6ee8\u5e02\u7b2c\u4e5d\u6279\u6709\u7a81\u51fa\u8d21\u732e\u4e2d\u9752\u5e74\u4e13\u5bb6\uff0c\u9ed1\u9f99\u6c5f\u7701\u519c\u4f5c\u7269\u54c1\u79cd\u5ba1\u5b9a\u59d4\u5458\u4f1a\u6c34\u7a3b\u4e13\u4e1a\u7ec4\u59d4\u5458\u3002\u83b7\u5f97\u54c8\u5c14\u6ee8\u5e02\u9752\u5e74\u79d1\u6280\u5956\u4ee5\u53ca\u54c8\u5c14\u6ee8\u5e02\u4f18\u79c0\u9752\u5e74\u5c97\u4f4d\u80fd\u624b\u3001\u9ed1\u9f99\u6c5f\u7701\u7cae\u98df\u751f\u4ea7\u5148\u8fdb\u79d1\u6280\u5de5\u4f5c\u8005\u7b49\u591a\u4e2a\u8363\u8a89\u79f0\u53f7\u3002\u83b7\u5f97\u9ed1\u9f99\u6c5f\u7701\u519c\u4e1a\u79d1\u5b66\u6280\u672f\u5956\u4e8c\u7b49\u5956\uff0c\u54c8\u5c14\u6ee8\u5e02\u79d1\u5b66\u6280\u672f\u8fdb\u6b65\u4e09\u7b49\u5956\u7b49\u591a\u4e2a\u5956\u9879',
        },
        {
          id: '44',
          phone: '18800000013',
          realname: '\u8463\u5b8f\u4f1f',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264bf7ef373.jpg',
          profile:
            '\u6c34\u4ea7\u517b\u6b96\u65b0\u6280\u672f\u53ca\u9c7c\u75c5\u9632\u6cbb',
          des:
            '\u7814\u7a76\u5458\uff0c\u54c8\u5c14\u6ee8\u5e02\u6709\u7a81\u51fa\u8d21\u732e\u4e2d\u9752\u5e74\u4e13\u5bb6\uff0c\u5e02\u7ea7\u91cd\u70b9\u9886\u519b\u4eba\u624d\u68af\u961f\u201c\u6c34\u4ea7\u517b\u6b96\u6280\u672f\u201d\u68af\u961f\u5e26\u5934\u4eba\u3002\u53c2\u52a0\u56fd\u5bb6\u548c\u7701\u5e02\u79d1\u7814\u9879\u76ee\u5341\u4f59\u9879\uff0c\u4e3b\u6301\u5e02\u7ea7\u79d1\u7814\u9879\u76ee\u56db\u9879\u3002\u8363\u83b7\u54c8\u5c14\u6ee8\u5e02\u7b2c\u5341\u4e00\u5c4a\u9752\u5e74\u79d1\u6280\u5956\u3002\u53c2\u52a0\u56fd\u5bb6\u548c\u7701\u5e02\u79d1\u7814\u9879\u76ee\u5341\u4f59\u9879\uff0c\u4e3b\u6301\u5e02\u7ea7\u79d1\u7814\u9879\u76ee\u56db\u9879\u3002\u83b7\u595623\u9879\u3002',
        },
        {
          id: '43',
          phone: '18800000012',
          realname: '\u5218\u5fd7\u6d0b',
          imgurl:
            'http://web.frnnet.com/Attachment/Images/20170525/59264bcfa2d65.jpg',
          profile: '\u5bd2\u5730\u7279\u8272\u82b1\u5349\u80b2\u79cd',
          des:
            '\u7855\u58eb\u7814\u7a76\u751f\uff0c\u9ad8\u7ea7\u519c\u827a\u5e08\u3002\u4e1c\u5317\u519c\u4e1a\u5927\u5b66\u517c\u804c\u8bb2\u5e08\u3002\u54c8\u5c14\u6ee8\u5e02\u82b1\u5349\u534f\u4f1a\u79d8\u4e66\u957f\u3002\u9ed1\u9f99\u6c5f\u7701\u82b1\u5349\u534f\u4f1a\u7406\u4e8b\u30022011\u5e74\u83b7\u54c8\u5c14\u6ee8\u5e02\u65b0\u4e00\u4ee3\u521b\u4e1a\u4eba\u79f0\u53f7\u30022012\u5e74\u83b7\u54c8\u5c14\u6ee8\u5e02\u9752\u5e74\u79d1\u6280\u5956\u3002\u53d1\u8868\u5b66\u672f\u8bba\u658740\u4f59\u7bc7\uff0c\u4e3b\u6301\u5e02\u7ea7\u9879\u76ee4\u9879\uff0c\u83b7\u595611\u9879\u3002',
        },
      ],
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = app.adData
    if (data) {
      console.log('点击了广告进来', data)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // MARK 处理数据
  handleData() {},
  // MARK 标签点击
  onChange(event) {
    this.setData({
      active: event.detail,
    })
  },
})
