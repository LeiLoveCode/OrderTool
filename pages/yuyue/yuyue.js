// pages/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {


  tothing: ['吉他', '尤克里里', '非洲鼓'],

    todate: [],  
    objectArray: [  
      {  
        todate:"周五",  
        id: 0,  
        array: ['18:00~20:00', '19:40~21:40']  
      }, 
      {  
        todate: "周六",  
        id: 1,  
        array: ['14:00~16:00', '16:00~18:00', '18:00~20:00', '19:40~21:40']  
      },   
      {  
        todate: "周日",  
        id: 2,  
        array: ['14:00~16:00', '16:00~18:00', '18:00~20:00', '19:40~21:40'] 
      }  
    ],  
    object:[],  
    dateindex:0,  
    timeindex:0,
    thingindex:0,
  

    gethotappweek:"null",

  },  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {


    var objectArray = this.data.objectArray  
    var todate=[]  
    for (var i = 0; i < objectArray.length;i++){  
      todate.push(objectArray[i].todate,)   
    }  
    this.setData({ todate: todate ,totime: objectArray[this.data.dateindex].array}) 
  
  
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
  
  
  //确定按钮
  formSubmit:function(e){


    console.log('携带值为',e.detail.value);
    var objData=e.detail.value;
    var day="";
    var time="";
    var thing="";
    //将选择器的数字转为字符
    //日期
    console.log(objData.datepicker,objData.timepicker,objData.thingpicker);
    if(objData.datepicker=="0"){
          day="friday";
          if(objData.timepicker=="0")
          {
            time="1800to2000";
          }
          else if(objData.timepicker=="1")
          {
            time="1940to2140";
          }
      
    }
    else if(objData.datepicker=="1")
    {
      day="saturday";
        //时间
      if(objData.timepicker=="0"){
        time="1400to1600";
      }
      else if(objData.timepicker=="1")
      {
        time="1600to1800";
      }
      else if(objData.timepicker=="2")
      {
        time="1800to2000";
      }
      else if(objData.timepicker=="3")
      {
        time="1940to2140";
      }
    }
    else if(objData.datepicker=="2")
    {
        day="sunday";
          //时间
        if(objData.timepicker=="0"){
          time="1400to1600";
        }
        else if(objData.timepicker=="1")
        {
          time="1600to1800";
        }
        else if(objData.timepicker=="2")
        {
          time="1800to2000";
        }
        else if(objData.timepicker=="3")
        {
          time="1940to2140";
        }
    }


    console.log("项目",thing,objData.thingpicker);
    //项目
    if(objData.thingpicker=="0")
    {
      thing="guitar";
    }
    else if(objData.thingpicker=="1")
    {
      thing="ukulee";
    }
    else if(objData.thingpicker=="2")
    {
      thing="drum";
    }
    console.log("项目",thing);

    //储存数据


   
    //当前周数
    var week=this.getYearWeek()[1];
    console.log("当前周数",week);

      wx.setStorageSync('day', day);
      wx.setStorageSync('time', time);
      wx.setStorageSync('thing', thing);


      console.log(day,time,thing);



//获得hotapp后台存储的数据
var hotappkey='hotapp425655536';
var that=this;
//获得服务器储存的周数
wx.request({
  url: 'https://wxapi.hotapp.cn/api/get',
  data:{
      appkey: hotappkey,
      key: "hotappweek",
  },
  header: {
      'content-Type': 'application/json'
  },
  success: function(res){
    that.setData({
      gethotappweek: res.data.data.value,
    })
    wx.setStorageSync('hotappweek', that.data.gethotappweek);
      
      var hotappweek=wx.getStorageSync('hotappweek');

      //获得hotapp后台存储的数据
      console.log("hotappweek1=",hotappweek);

      console.log(res.data.data)
  }
})


var hotappweek=wx.getStorageSync('hotappweek');

//获得hotapp后台存储的数据
console.log("hotappweek2=",hotappweek);

//服务器周数与当前周数不一致
if(hotappweek!=week)
{


  //将当前周数更新到服务器
  wx.request({
    url: 'https://wxapi.hotapp.cn/api/post',
    data:{
        appkey: hotappkey,
        key: "hotappweek",
        value: week,
    },
    header: {
        'content-Type': 'application/json'
    },
    success: function(res){
        console.log(res)
    }
  })

  //将服务器上所有值清零
  var hotappdata=["friday,1800to2000","friday,1940to2140",
  "saturday,1400to1600","saturday,1600to1800",
  "saturday,1800to2000","saturday,1940to2140",
  "sunday,1400to1600","sunday,1600to1800",
  "sunday,1800to2000","sunday,1940to2140"];
  
    for(var i=0;i<10;i++)
    {
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/post',
      data:{
          appkey: hotappkey,
          key: hotappdata[i],
          value: 0,
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
          console.log(res)
      }
    })
  }

  //从服务器获取当前时间的数值
  wx.request({
      url: 'https://wxapi.hotapp.cn/api/post',
      data:{
          appkey: hotappkey,
          key: day+','+time,
          value:1,
      },
      header: {
          'content-Type': 'application/json'
      },
      success: function(res){
        wx.showToast({  
          title: '预约成功',  
          icon: 'success',  
          duration: 2000  
      })
          console.log(day+","+time+"服务器值为"+res)
      }
  })







}
else
{
    //从服务器获取当前时间的数值
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
        if(count<8)
        {
          //小于等于8人
          count=count+1;
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
                  title: '预约成功',  
                  icon: 'success',  
                  duration: 2000  
              })
            }
          })

        }
        else
        {
          //达到了人数上限8人，弹窗提示
          wx.showModal({  
            title: '提示',  
            content: '人数已达上限，预约失败，请选择其他时间进行预约',  
            success: function(res) {  
                if (res.confirm) {  
                console.log('用户点击确定')  
                } else if (res.cancel) {  
                console.log('用户点击取消')  
                }  
            }  
        }) 
        //没有预约成功，不保存数据
        wx.setStorageSync('day', '0');
        wx.setStorageSync('time', '0');
        wx.setStorageSync('thing', '0');
  
        
        }

        console.log(res.data.data)

          
      }
  })
}

    
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面

    })
  },

//项目选择器变化
  bindThingChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      thingindex: e.detail.value
    })
  },

  //日期选择器变化
  bindDateChange: function (e) { 
    console.log('picker发送选择改变，携带值为', e.detail.value) 
    this.setData({ dateindex: e.detail.value, timeindex:0 })  
    var  objectArray = this.data.objectArray  
    this.setData({ totime: objectArray[this.data.dateindex].array})  
  }, 
  
  //时间选择器变化
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)  
    this.setData({  
      timeindex: e.detail.value  
    })  
  },  

//获取当前年数和周数[年份，周数]
  getYearWeek:function (){
    var da =new Date();//日期格式2015-12-30
    //当前日期
    var date1 = new Date(da.getFullYear(),da.getMonth(), da.getDate());
    //1月1号
    var date2 = new Date(da.getFullYear(), 0, 1);
    //获取1月1号星期（以周一为第一天，0周一~6周日）
    var dateWeekNum=date2.getDay()-1;
    if(dateWeekNum<0)
    {
      dateWeekNum=6;
    }
    if(dateWeekNum<4)
    {
        //前移日期
        date2.setDate(date2.getDate()-dateWeekNum);
    }else{
        //后移日期
        date2.setDate(date2.getDate()+7-dateWeekNum);
    }
    console.log("date1",date1);
    console.log("date2",date2);
    var d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);

    console.log("总天数：",d);
    if(d<0){
        var date3 = (date1.getFullYear()-1)+"-12-31";
        return getYearWeek(date3);
    }else{
        //得到年数周数
        var year=date1.getFullYear();
        var week=Math.ceil((d+1 )/ 7);
        console.log("第几周：",week);
        return [year,week];
    }
}
  

})