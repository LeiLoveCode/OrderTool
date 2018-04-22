// pages/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day_group:'',
    thing_group:'',
    time_group:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

   /**
   * 取消按钮
   */
  formReset:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面

    })

  },
   /**
   * 确定按钮
   */
  formSubmit:function(e){
    console.log(e.detail.value);
    var objData=e.detail.value;

    if(objData.day_group&&objData.thing_group&&objData.time_group)
    {
      wx.setStorageSync('day', objData.day_group);
      wx.setStorageSync('time', objData.time_group);
      wx.setStorageSync('thing', objData.thing_group);

      console.log("sucess");
    }
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面

    })
  }





})