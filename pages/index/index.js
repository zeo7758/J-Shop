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
  onLoad: function () {
    this.getDataList('banner')
    this.getActivity()
    this.getList(1)
    wx.setStorage({
        key:'_ga',
        data: 'GA1.2.1146950384.1535360138'
    })
    wx.setStorage({
        key:'_gid',
        data: 'GA1.2.1928098619.1535360138'
    })
    wx.setStorage({
        key:'csrftoken',
        data: 'vOuNM5Y4NWoYg8rJsOqkkLChaUbjLX60AT5NKc97Va9nkxgS5UdTTlGcHlhuOZfN'
    })
    wx.setStorage({
        key:'tracker_id',
        data: 'b94a700c3f6dc0c728e610d0b1e12417'
    })
    wx.setStorage({
        key:'uid',
        data: '67516137'
    })
    wx.setStorage({
        key:'AWSALB',
        data: '3tTxCUT7fEwYJDbu4KxedHbrkQ/pZicgiHbcTcFcHo3RY1XCXWbS82NIhdLx/4HsKSFs3hPo4vpvJIL5Wu3UhilCJs8Gkr52k8WD+6NgU928yXNys/JJonytllcl'
    })
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
