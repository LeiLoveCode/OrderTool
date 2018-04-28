// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    hiddenModal:true,
    orderhiddenModal:true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var day=wx.getStorageSync('day');
    var time=wx.getStorageSync('time');
    var thing=wx.getStorageSync('thing');
    
    console.log("日期",day);
    console.log("时间",time);
    console.log("项目",thing);

    if(day!="0" &&time !="0" && thing !="0")
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
    
      if(time=="1400to1600")
      {
        this.setData({time:"14:00~16:00"});
      }
      else if(time=="1600to1800") {
        this.setData({time:"16:00~18:00"});
      }
      else if(time=="1800to2000"){
        this.setData({time:"18:00~20:00"});
      }
      else if(time=="1940to2140")
      {
        this.setData({time:"19:40~21:40"});
      }
   
      if(thing=="guitar")
      {
        this.setData({thing:"吉他"});

      }
      if(thing=="ukulee")
      {
        this.setData({thing:"尤克里里"});

      }if(thing=="drum")
      {
        this.setData({thing:"非洲鼓"});

      }

 
      
    }
    //值为空
    else
      {
        this.setData({
          orderhiddenModal: !this.data.orderhiddenModal
      })
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

  //确定按钮
  okbutton:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      
    })
  },

//提示框确定，取消预约
listenerConfirm:function() {
  var hotappkey='hotapp425655536';
    

    var day=wx.getStorageSync('day');
    var time=wx.getStorageSync('time');
    var thing=wx.getStorageSync('thing');
    //从服务器获取当前的人数
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data:{
          appkey: hotappkey,
          key: day+','+time,
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        
        var count=parseInt(res.data.data.value);
        
          //小于等于8人
          count=count-1;
          wx.request({
            url: 'https://wxapi.hotapp.cn/api/post',
            data:{
                appkey: hotappkey,
                key: day+','+time,
                value: count,
            },
            header: {
                'content-Type': 'application/json'
            },
            success: function(res){
                console.log(res)
                wx.showToast({  
                  title: '取消预约成功',  
                  icon: 'success',  
                  duration: 2000  
              })
            }
          })
        }
      })

      //删除内存里的数值
    wx.setStorageSync('day', "0");
    wx.setStorageSync('time', "0");
    wx.setStorageSync('thing', "0");
      

        
         
    //console.log("日期",day);
    //console.log("时间",time);
    //console.log("项目",thing);

    this.setData({
        hiddenModal: true
    })

    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      
    })
},

//提示框取消
listenerCancel:function() {
    this.setData({
        hiddenModal: true
    })
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      
    })
},

//没有预约时提示框确定
orderlistenerConfirm:function() {


  this.setData({
      hiddenModal: true
  })

  wx.navigateBack({
    delta: 1, // 回退前 delta(默认为1) 页面
    
  })
},

//没有预约时提示框取消
orderlistenerCancel:function() {
  this.setData({
      hiddenModal: true
  })
  wx.navigateBack({
    delta: 1, // 回退前 delta(默认为1) 页面
    
  })
},

  //取消预约按钮
cancelbutton:function(){


        this.setData({
          hiddenModal: !this.data.hiddenModal
      })

  }
})