//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList:[],
    activityList:[],
    recommendList:[],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getDataList('banner')
    this.getActivity()
    this.getList(1)
  },
  getList(start) {
      wx.request({
          url: 'https://coolbuy.com/api/v1.4/product_recommend/',
          data:{
                limit: 10,
                offset: start
          },
          success:(res) => {
              let list = this.data.recommendList
             this.setData({
                recommendList:[...list, ...(res.data && res.data.objects)] || []
             })
             console.log(res.data);
          }
      })
  },
  getActivity() {
      wx.request({
          url: 'https://coolbuy.com/api/v1.4/shelf/',
          data:{
                limit: 10,
                img_size: "medium",
                shelf_type: 'activity',
          },
          success:(res) => {
             this.setData({
                activityList:(res.data && res.data.objects) || []
             })
             // console.log(res.data);
          }
      })
  },
  getDataList(type,size='medium') {
      wx.request({
          url: 'https://coolbuy.com/api/v1.4/campaign_banner/',
          data:{
                limit: 10,
                offset: 0,
                banner_type: type,
                img_size: size,
                platform: 'mobile',
                order_by: '-priority',
          },
          success:(res) => {
             this.setData({
                swiperList:(res.data && res.data.objects) || []
             })
          }
      })
  }
})
