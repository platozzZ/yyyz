import Vue from 'vue'
import App from './App'
import http from './common/http.js'
import until from './common/until.js'

//#ifndef MP-WEIXIN
import Bridge from './common/JSbridge.js'
Vue.prototype.$bridge = Bridge
// #endif


Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.checkLogin = function(backpage, backtype){
	var token  = uni.getStorageSync('token');
	if(uni.getStorageSync("channel")=='cmmc'){
		return true
	}else{
		if(!token){
			uni.reLaunch({url:'../login/login?backpage='+backpage+'&backtype='+backtype});
			return false;
		}
	}
	return token;
}

Vue.prototype.$http = http;
Vue.prototype.$until = until;

const app = new Vue({
	...App
})
app.$mount()
