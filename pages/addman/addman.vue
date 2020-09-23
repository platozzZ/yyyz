<template>
	<view class="addman">
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			:current="true"
			value="2020-03-07"
			fields="day"
			@confirm="onConfirm($event,'date')"
			:disabled-after="false"
			ref="date" 
		></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			:current="true"
			value="2020-03-07"
			fields="day"
			@confirm="onConfirm2($event,'date')"
			:disabled-after="false"
			ref="date2" 
		></w-picker>
		<view class="cont-one">
			<view class="cont-title">联系人姓名</view>
			<view class="cont-cont">
				<view class="input-one-bg">
					<view class="label">中文姓名</view>
					<input class="input" placeholder-class="plac" placeholder="确保与证件保持一致" type="text">
				</view>
				<view class="input-one-bg">
					<view class="label">英文姓</view>
					<input class="input" placeholder-class="plac" placeholder="如张小白填写为“ZHANG”" type="text">
				</view>
				<view class="input-one-bg">
					<view class="label">英文名</view>
					<input class="input" placeholder-class="plac" placeholder="如张小白填写为“XIAOBAI”" type="text">
				</view>
			</view>
		</view>
		<view class="cont-one">
			<view class="cont-title">证件</view>
			<view class="cont-cont">
				<view class="input-one-bg">
					<view class="label">身份证</view>
					<input class="input"  placeholder-class="plac" placeholder="证件号" type="text">
				</view>
				<view class="input-one-bg">
					<view class="label">证件有效期</view>
					<input class="input" disabled placeholder-class="plac" @click="$refs.date.show()" :value="idtime" placeholder="请选择" type="text">
				</view>
			</view>
		</view>
		<view class="cont-one">
			<view class="cont-title">其他信息</view>
			<view class="cont-cont">
				<view class="input-one-bg">
					<view class="label">生日</view>
					<input class="input" disabled placeholder-class="plac" @click="$refs.date2.show()" :value="birthday" placeholder="请选择" type="text">
				</view>
				<view class="input-one-bg">
					<view class="label">性别</view>
					<picker class="input" @change="bindPickerChangesex" :value="sexIndex" :range="sexItems">
						<view class="uni-input">{{sexItems[sexIndex]}}</view>
					</picker>
				</view>
				<view class="input-one-bg">
					<view class="label">国籍</view>
					<picker class="input" @change="bindPickerChange" :value="courtryIndex" :range="courtryItem">
						<view class="uni-input">{{courtryItem[courtryIndex]}}</view>
					</picker>
				</view>
				<view class="input-one-bg">
					<view class="label">大陆手机</view>
					<input class="input" placeholder-class="plac" placeholder="常用手机号，选填" type="text">
				</view>
			</view>
		</view>
		<view class="cont-one setself">
			<view class="cont-cont">
				<view class="input-one-bg">
					<view class="label">设置为本人</view>
					<view class="club-change"><switch class="switch" color="#4CD964" @change="switch1Change" /></view>
				</view>
			</view>
		</view>
		<view class="sub-button" @click="saveconcat">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courtryItem: ['中国大陆','美国','英国','日本','澳大利亚'],
				courtryIndex:0,
				sexItems:['男','女','未知'],
				sexIndex:0,
				idtime:'',
				birthday:'',
				userinfo:[],
				usercards:[],
				userextra:[]
			};
		},
		methods:{
			bindPickerChange: function(e) {
				this.courtryIndex = e.target.value
			},
			bindPickerChangesex:function(e){
				this.sexIndex = e.target.value
			},
			onConfirm(e){
				this.idtime = e.result;
			},
			onConfirm2(e){
				this.birthday = e.result;
			},
			async saveconcat(){
				let {birthday} = this;
				var checknull1 = this.$until.checknull(bugnum,'请选择数量');
				var checkphone = this.$until.checkphone(this.phonenum);
				if(!checknull1){return}
				var data = {userinfo:1,usercards:1,extra:1,}
				try {
				  let response = await this.$http.post('/club/addContact',data);
				  if (response.rspInfo.rspCode == 1000) {
				     
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
			async getsign(){//活动报名信息需要添加的信息 
				try {
					var data = {mid:10}
				  let response = await this.$http.post('/order/sign',data);
				  if (response.rspInfo.rspCode == 1000) {
						this.userinfo
						this.usercards
						this.userextra
				  }else{
						this.moretype = 'more';
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
		},
		onLoad() {
			this.getsign()
		}
	}
</script>

<style lang="scss">
@import '@/common/style/style.scss';
</style>
