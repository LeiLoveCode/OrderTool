// order.js
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

  to_order:function()
  {


       //如果内存中已有存储值，则不能继续选课，弹窗提示
       var day=wx.getStorageSync('day');
       var time=wx.getStorageSync('time');
       var thing=wx.getStorageSync('thing');

       console.log(day,time,thing);

      if(day!="0" &&time !="0" && thing !="0")
       {
         wx.showModal(
           {
             title:"提示",
             content:"您已经预约了课程，如果需要重新预约，请先到【我的预约】中取消已经预约的课程",
             confirmText:'确定',
             cancelText:'我的预约',

             success:function(res)
             {
               if(res.confirm)
               {
                console.log('用户点击确定')
               }
               if(res.cancel)
               {
                wx.navigateTo({
                  url: '../myorder/myorder'
                })
               }
             }

           }
         )
       }
       else
      {
               wx.navigateTo({
           url: '../yuyue/yuyue'
          })
       }

  
  },
  my_order:function()
  {
    wx.navigateTo({
      url: '../myorder/myorder'
    })
  }



})
