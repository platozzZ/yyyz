<template>
	<view class="topay">
		<view class="pay-title">{{ orderdetail.l_matchname }}</view>
		<min-collapse class="collapse" list="" :desc="'¥' + orderdetail.l_charge" placeholder="订单明细">
			<view name="na" style="width:100%;padding:0 0 20rpx;">
				<view class="listone" v-for="(item, index) in 1" :key="index">
					<text class="title">报名费</text>
					<text class="num">x{{ orderdetail.l_count }}</text>
					<text class="price">¥ {{ orderdetail.l_charge }}</text>
				</view>
			</view>
		</min-collapse>
		<view class="choose">请选择支付方式</view>
		<view class="pay-b">
			<radio-group @change="radioChange">
				<view class="pay-bg pay-bg1" v-if="hidezhi">
					<view class="pay-text">
						<image class="pay-img" src="../../static/images/payment_alipay.png" mode=""></image>
						<view class="text">支付宝</view>
					</view>
					<view class="paychoose"><radio value="1" /></view>
				</view>
				<view class="pay-bg">
					<view class="pay-text">
						<image class="pay-img" src="../../static/images/payment_wechat.png" mode=""></image>
						<view class="text">微信</view>
					</view>
					<view class="paychoose"><radio value="2"  checked="true"/></view>
				</view>
			</radio-group> 
		</view>
		<view class="topay-button iphonex" @click="getinfo">
			<view class="payin">去支付 ¥{{ orderdetail.l_charge }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			choosed:2,
			orderid:'',
			orderdetail:'',
			hidezhi:true
		};
	},
	onLoad(e) {
		this.orderid=e.id;
		this.orderInfo();
		this.callbacks();
		var that = this;
	},
	onShow() {
		//#ifdef MP-WEIXIN
			this.hidezhi=false
		// #endif
	},
	methods:{
		callbacks(){
			this.$bridge.register("payResult",(data) => {//对接app支付宝支付返回处理逻辑
				if(data=='9000'){
					this.godetail(0)
				}else{
					this.godetail(1)
				}

			});
		},
		radioChange(e){
			this.choosed=e.detail.value
		},
		getinfo(){
			if(uni.getStorageSync("channel")){//判断是否在app里，其他地方有用到  需要封装
				this.getapp()
			}else{
				this.getcode()
			}
		},
		async getapp(openid){//得到赛事活动详情
			if(uni.getStorageSync("channel")){
				var choosed = this.choosed==1?'alipay':'wx'
			}else{
				var choosed = 'wx_pub'
			}
			var data = {openid:openid,order_id:JSON.stringify([this.orderid]),channel:choosed,charge:this.orderdetail.l_charge};
			try {
			  let response = await this.$http.post('/pay/pay',data);
			  if (response.rspInfo.rspCode == 1000) {
				  var data = response.rspData.alipay;
					if(uni.getStorageSync("channel")){
						this.toappalipy(response)
					}else{
						this.toxcxpay(data)
					}
			  }else{
			    uni.showToast({
			        title: response.rspInfo.rspDesc,
					icon:'none',
			        duration: 2000
			    });
			  }
			} catch (e) {
			  console.log(e);
			} finally {

			}
		},
		getcode(){
			var that = this;
			wx.login({
			  success: function (res) {
			    that.getOpenId(res.code)
			  }
			});
		},
		getOpenId: function (code) {//获取openid
		    var that = this;
		    wx.request({
		      url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx36e54a23628acfec&secret=96df491781940a5be03d1c61375f560a&js_code=" + code + "&grant_type=authorization_code",
		      data: {},
		      method: 'GET',
		      success: function (res) {
		        that.getapp(res.data.openid)
		      },
		      fail: function () {
		        // fail
		      },
		      complete: function () {
		        // complete
		      }
		    })
		 },

		toxcxpay(data){//微信小程序支付
			uni.requestPayment({
					provider,//付款商家
					timeStamp,//时间戳(当前支付时间)
					nonceStr,//支付密匙
					package: packages,
					paySign,//支付id
					success(res) {
							success(JSON.stringify(res));
					},
					fail(err) {
							fail(JSON.stringify(err))
					}
			});
		},
		toappalipy(response){//对接app支付
			if(this.choosed==1){
				this.$bridge.call("cmmc.pushPay",response.rspData.alipay, (data) => {
					var newdata = JSON.parse(data);
					if(newdata.resultStatus=='9000'){
						this.godetail(0)
					}else{
						this.godetail(1)
					}
				});
			}else{
				this.$bridge.call("cmmc.pushWXPay", response.rspData, (data) => {
				  var newdata = JSON.parse(data);
				  if(newdata.resultStatus=='9000'){
				  	this.godetail(0)
				  }else{
				  	this.godetail(1)
				  }
				});
			}
		},
		godetail(type){
			if(type==0){
				uni.showToast({
					title: '支付成功',
					duration: 1500
				})
			}else if(type==1){
				uni.showToast({
					image:'../../static/images/fail.png',
					title: '支付失败',
					duration: 1500
				})
			}
			setTimeout(function(){
				uni.switchTab({
					url:'../order/order'
				})
			}, 1500)
		},
		async orderInfo(){//得到赛事活动详情
			var data = {order_id:this.orderid}
			try {
			  let response = await this.$http.post('/order/memberActivityDetail',data);
			  if (response.rspInfo.rspCode == 1000) {
					this.orderdetail = response.rspData;
			  }else{
			    uni.showToast({
			        title: response.rspInfo.rspDesc,
							icon:'none',
			        duration: 2000
			    });
			  }
			} catch (e) {
			  console.log(e);
			} finally {

			}
		},
	}
}
</script>

<style lang="scss">
@import '@/common/style/style.scss';
</style>
