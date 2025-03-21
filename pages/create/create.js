// pages/create/create.js
Page({
  data: {
    types: ['餐饮', '交通', '购物', '住房', '工资'],
    currentType: 0,
    currentDate: new Date().toISOString().slice(0,10)
  },

  formSubmit(e) {
    const formData = e.detail.value
    if (!formData.amount) {
      wx.showToast({ title: '请填写金额', icon: 'none' })
      return
    }

    const bills = wx.getStorageSync('bills') || []
    bills.unshift({
      id: Date.now(),
      amount: parseFloat(formData.amount),
      type: this.data.types[formData.type],
      date: formData.date,
      remark: formData.remark
    })

    wx.setStorageSync('bills', bills)
    wx.showToast({ title: '添加成功' })
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2]
    prevPage.loadLocalData()
    setTimeout(() => wx.navigateBack(), 1500)
  }
})