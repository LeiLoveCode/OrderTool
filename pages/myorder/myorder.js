// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var day=wx.getStorageSync('day');
    var time=wx.getStorageSync('time');
    var thing=wx.getStorageSync('thing');

    console.log(day);
    console.log(time);
    console.log(thing);

    if(day)
    {
      if(day=="friday")
      {
        this.setData({day:"星期五"});
      }
      else if(day=="saturday")
      {
        this.setData({day:"星期六"});
      }
      else if(day=="sunday")
      {
        this.setData({day:"星期日"});
      } 
    }
    if(time)
    {
      if(time=="14to16")
      {
        this.setData({time:"14:00~16:00"});
      }
      else if(time=="16to18") {
        this.setData({time:"16:00~18:00"});
      }
      else if(time=="18to20"){
        this.setData({time:"18:00~20:00"});
      }
      else if(time=="1940to2140")
      {
        this.setData({time:"19:40~21:40"});
      }
    }
    if(thing)
    {
      if(thing=="guitar")
      {
        this.setData({thing:"吉他"});

      }
      if(thing=="ukulele")
      {
        this.setData({thing:"尤克里里"});

      }if(thing=="drum")
      {
        this.setData({thing:"非洲鼓"});

      }
    }
  
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
  
  },

  okbutton:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      
    })
  },
  cancelbutton:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      
    })
  }
})