// pages/3_2/3_2.js
Page({
    onLoad: function (options) {
        console.log('--index.js--onLoad--页面加载')
    },
    onReady: function () {
        console.log('--index.js--onReady--页面初次渲染完成')
    },
    onShow: function () {
        console.log('--index.js--onShow--页面显示')
    },
    onHide: function () {
        console.log('--index.js--onHide--页面隐藏')
    },
    onUnload: function () {
        console.log('--index.js--onUnload--页面卸载')
    },
    sddl: function () {
        let audio = wx.createInnerAudioContext()
        audio.src = "/audios/阿米寓说的道理.wav"
        audio.play()
    }
})