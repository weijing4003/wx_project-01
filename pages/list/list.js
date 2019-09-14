// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    
    const apiUrl = 'https://www.apiopen.top/'+params.type+'';
    // https://www.jianshu.com/p/e6f072839282   接口源自这篇文章里
    // https://www.apiopen.top/satinGodApi?type=1&page=1   原完整接口
    const _this = this;

    // 发送请求
    wx.request({
      url: apiUrl, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        _this.setData({
          list: res.data.data
        })

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