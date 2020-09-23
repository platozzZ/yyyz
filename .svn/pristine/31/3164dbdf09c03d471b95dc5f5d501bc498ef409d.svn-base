<template>
	<view class="login">
		<view class="top-img-bg">
			<image class="top-img" src="../../static/images/Group.png" mode="widthFix"></image>
		</view>
		<view class="inputbg">
			<input type="number" maxlength="11" v-model="phonenum" placeholder-class="pla" placeholder="输入手机号" class="phone">
		</view>
		<view class="yzmbg">
			<input type="number" maxlength="6" v-model="yzm" placeholder-class="pla" placeholder="输入验证码" class="yzm">
			<button class="yzmbutton" :disabled="btnDis" @tap="sendCode">{{btnText}}</button>
		</view>
		<button class="loginin" @click="loginin">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phonenum:'',
				yzm:'',
				backpage:'',
				backtype:'',
				btnDis: false,
				submitBtnDis: false,
				btnText: "发送验证码",
				params: {
					phoneNo:"",
					code:""
				}
			};
		},
		methods:{
			async sendCode() {// 发送验证码
				var checkphone = this.$until.checkphone(this.phonenum);
				if(!checkphone){return}
				try {
					let response = await this.$http.post('/site/phoneLoginAjax',{phone:this.phonenum});
					if (response.rspInfo.rspCode == 1000) {
						uni.showToast({
							title: '发送成功'
						});
						this.countDown();
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
			countDown() {// 验证码倒计时
				let t = null;
				let timer = 60;
				this.btnDis = true;
				clearInterval(t);
				this.btnText = `${timer}s`;
				t = setInterval(() => {
					if (timer == 0) {
						clearInterval(t);
						this.btnText = "重新发送";
						this.btnDis = false;
						return;
					}
					timer--;
					this.btnText = `${timer}s`;
				}, 1000)
			},
			async loginin(e){
				var checknull = this.$until.checknull(this.yzm,'验证码不能为空');
				if(!checknull){return}
				try {
					let response = await this.$http.post('/site/phoneLogin',{phone:this.phonenum,code:this.yzm},'登录中');
					if (response.rspInfo.rspCode == 1000) {
						uni.showToast({
							title: '登录成功',
							duration: 1500
						})
						uni.setStorage({  
						    key: 'userpic',  
						    data: response.rspData.smallPortrait 
						});  
						uni.setStorage({  
						    key: 'token',  
						    data: response.rspData.token 
						});  
						uni.setStorage({
						    key: 'username',  
						    data: response.rspData.name 
						});  
						setTimeout(function(){
							if(!this.backpage){
								uni.switchTab({
									url:'../index/index'
								})
							}else if(this.backtype==1){
								uni.redirectTo({
									url:this.backpage
								})
							}else{
								uni.switchTab({
									url:this.backpage
								})
							}
						}, 1500)
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
			}
		},
		onLoad(e) {
			this.backpage = e.backpage;
			this.backtype = e.backtype;
		}
	}
</script>

<style lang="scss">
@import "@/common/style/style.scss";
</style>
