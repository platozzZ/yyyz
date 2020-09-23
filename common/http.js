const commonUrl = "http://activity-api.mobilityclub.cn"; //公共路径 
// const commonUrl = "http://enroll-testapi.fblife.com"; //公共路径 

// post请求封装
var postRequest = (url, data, loadingtext, show) => {
		if(show){
			uni.showLoading({
				mask:true,
			   title: loadingtext || '加载中'
			})
		}
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        uni.request({
            url: commonUrl + url,
            data: postData,
            method: "POST",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                token: uni.getStorageSync("token"),
				phone: uni.getStorageSync("comephone"),
				channel: uni.getStorageSync("channel")
            },
            success: function(res) {
                //返回什么就相应的做调整
                if (res.statusCode == 200) {
									if(res.data.rspInfo.rspCode==3333){
										uni.showModal({
										    title: '提示',
												showCancel:false,
												confirmText:'去登陆',
										    content: '登录已过期，请重新登录',
										    success: function (res) {
										        if (res.confirm) {
										            uni.reLaunch({url:'../login/login'});
										        } else if (res.cancel) {
										            console.log('用户点击取消');
										        }
										    }
										});
									}else{
										resolve(res.data);
									}
                } else {
                    // 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据
                    //接口后面的then执行
                    // 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
                    //不会被阻断在那里执行不下去！
                    resolve(res.data.msg);
                }
            },
            error: function(e) {
                reject("网络出错");
            },
						complete:function(e){
							uni.hideLoading()
						}
        });
    });
    return promise;
}

// get请求封装
var getRequest = (url, data) => {
    var promise = new Promise((resolve, reject) => {
        var that = this;
        var postData = data;
        uni.request({
            url: commonUrl + url,
            data: postData,
            method: "GET",
            dataType: "json",
            header: {
                "content-type": "application/json"
            },
            success: function(res) {
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else {
                    resolve(res.data);
                }
            },
            error: function(e) {
                reject("网络出错");
            }
        });
    });
    return promise;
}

module.exports = {
    post: postRequest,
    get: getRequest
};



