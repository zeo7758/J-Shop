//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.getList()
},
getList() {
    wx.request({
        url:'https://mp.weixin.qq.com/mp/homepage',
        data: {
            __biz:"MjM5NjAwMjEwMA==",
            hid:7,
            cid:1,
            begin:0,
            count:5,
            action:"appmsg_list",
            f:"json"
        },
        success: (res) => {
            console.log(res.data.data.homepage_render.plugin_data[1].plugin2.cate_list);
        }
    })
}
})
