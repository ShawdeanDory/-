// pages/3_6/3_6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
score:0
  },
  scoreInput:function(e){
this.setData({
    score:e.detail.value
})
  }
})