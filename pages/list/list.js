// 初始化页面数据
Page({
  data: {
    bills: [],
    searchKeyword: ''
  },

  onShow() {
    this.loadLocalData()
  },

  onLoad() {
    this.loadLocalData()
  },

  loadLocalData() {
    const bills = wx.getStorageSync('bills') || []
    this.setData({ bills })
  },

  // 滑动删除处理
  handleSwipeDelete(e) {
    const index = e.currentTarget.dataset.index
    const bills = this.data.bills
    bills.splice(index, 1)
    this.setData({ bills })
    wx.setStorageSync('bills', bills)
  },

  // 跳转新增页面
  gotoCreate() {
    wx.navigateTo({
      url: '/pages/create/create'
    })
  }
})