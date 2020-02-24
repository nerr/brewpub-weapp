"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Page({
    // function use to forwad to detail page
    toDetailPage: function (e) {
        var tapid = e.currentTarget.id
        console.log('detail?id=' + tapid)
        wx.navigateTo({
            url: 'detail?id=' + tapid,
        })
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6W119

export default {
    config: {
        usingComponents: {
            'wxc-loadmore': '@minui/wxc-loadmore',
            'wxc-panel': '@minui/wxc-panel',
            'wxc-flex': '@minui/wxc-flex',
            'wxc-elip': '@minui/wxc-elip'
        }
    },
    data: {},
    methods: {
        onClick(event) {
            console.log(event)
        }
    }
}

wx.cloud.init()
const db = wx.cloud.database()
db.collection('tap').get({
    success:function(res){
        console.log(res.data)
    }
})


