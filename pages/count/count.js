// pages/count/count.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friday1:'0',
    friday2:'0',
    saturday1:'0',
    saturday2:'0',
    saturday3:'0',
    saturday4:'0',
    sunday1:'0',
    sunday2:'0',
    sunday3:'0',
    sunday4:'0',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var hotappkey='hotapp425655536';
    var that=this;
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "friday,1800to2000",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          friday1: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "friday,1940to2140",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          friday2: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "saturday,1400to1600",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          saturday1: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "saturday,1600to1800",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          saturday2: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "saturday,1800to2000",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          saturday3: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "saturday,1940to2140",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          saturday4: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "sunday,1400to1600",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          sunday1: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "sunday,1600to1800",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          sunday2: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "sunday,1800to2000",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          sunday3: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: "sunday,1940to2140",
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          sunday4: res.data.data.value,
        })
          console.log(res.data.data)
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})