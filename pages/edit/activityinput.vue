
<template>
	<view class="activityinput">
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			:current="true"
			value="2020-03-07 16:45"
			fields="minute"
			@confirm="onConfirm($event,'date')"
			:disabled-after="false"
			ref="date" 
		></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029" 
			value="2020-03-07 16:45"
			:current="true"
			fields="minute"
			@confirm="onConfirm2($event,'date2')"
			:disabled-after="false"
			ref="date2" 
		></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029" 
			value="2020-03-07 16:45"
			:current="true"
			fields="minute"
			@confirm="onConfirm3($event,'date3')"
			:disabled-after="false"
			ref="date3" 
		></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029" 
			value="2020-03-07 16:45"
			:current="true"
			fields="minute"
			@confirm="onConfirm4($event,'date4')"
			:disabled-after="false"
			ref="date4" 
		></w-picker>
		<!-- https://ext.dcloud.net.cn/plugin?id=273 -->
		<view class=" img-top-bg">
			<view v-if="poster.length==0" class="add-head-pic inline" @click="uploadpic1">点击添加活动封面（必填）</view>
			<image class="img-top" v-else :src="poster[0]" @click="uploadpic1" mode="aspectFill"></image>
		</view>
		
		<view class="inline ac-title">
			<view class="inline-one">
				<view class="label">活动标题</view>
				<view class="cont">
					<input type="text" v-model="activity_name" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入活动标题">
				</view>
			</view>
		</view>
		<view class="inline ac-cont">
			<view class="inline-one inline-one-title">
				<view class="label">活动时间</view>
				<view class="cont">
					<view class="time-bg time-bg1">
						<view class="time-title">开始</view>
						<!-- <view class="time-cont" @click="choosestart">{{startime}}</view> -->
						<input class="time-cont" disabled @click="$refs.date.show()" type="text" v-model="startime" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="点击选择开始时间">
					</view>
					<view class="time-bg">
						<view class="time-title">结束</view>
						<!-- <view class="time-cont" @click="choosestart2">{{endtime}}</view> -->
						<input class="time-cont" disabled @click="$refs.date2.show()" type="text" v-model="endtime" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="点击选择结束时间">
					</view>
				</view>
			</view>
			<view class="inline-one inline-one-title">
				<view class="label">报名时间</view>
				<view class="cont">
					<view class="time-bg time-bg1">
						<view class="time-title">开始</view>
						<!-- <view class="time-cont" @click="choosestart">{{startime}}</view> -->
						<input class="time-cont" disabled @click="$refs.date3.show()" type="text" v-model="bstartime" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="点击选择开始时间">
					</view>
					<view class="time-bg">
						<view class="time-title">结束</view>
						<!-- <view class="time-cont" @click="choosestart2">{{endtime}}</view> -->
						<input class="time-cont" disabled @click="$refs.date4.show()" type="text" v-model="bendtime" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="点击选择结束时间">
					</view>
				</view>
			</view>
			<view class="inline-one inline-one-address">
				<view class="label">活动地点</view>
				<view class="cont">
					<input type="text" v-model="city" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入活动地点">
				</view>
			</view>
			<view class="inline-one inline-one-jianjie">
				<view class="label">活动简介</view>
				<view class="cont">
					<textarea v-model="activity_detail" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入活动简介"/>
				</view>
			</view>
			<view class="upload-bg">
				<view class="image-bg" v-for="(item, index) in tempFilePaths" :key="index">
					<image :src="item" mode=""></image>
				</view>
				<view class="image-bg" @click="uploadpic">
					<image src="../../static/images/add-icon.png" mode=""></image>
				</view>
			</view>
			<view class="inline-one inline-one-charge">
				<view class="label">活动收费</view>
				<view class="cont">
					<switch class="switch" color="#4CD964" checked @change="switch1Change" />
				</view>
			</view>
		</view>
		<view class="inline ac-charge">
			<view class="inline-one">
				<view class="label">报名费用</view>
				<view class="cont">
					<input type="number" v-model="price" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入报名费用">
				</view>
			</view>
			<view class="inline-one">
				<view class="label">人数限制</view>
				<view class="cont">
					<input type="number" v-model="toplimit" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入人数">
				</view>
			</view>
			<view class="inline-one">
				<view class="label">身份证限制</view>
				<view class="cont">
					<input type="text" disabled value="已满18岁" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入限制">
				</view>
			</view>
			<view class="inline-one">
				<view class="label">举办方</view>
				<view class="cont">
					<input type="text" v-model="sponsor" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入举办单位">
				</view>
			</view>
			<view class="inline-one">
				<view class="label">咨询电话</view>
				<view class="cont">
					<input type="number" v-model="phone" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入咨询电话">
				</view>
			</view>
		</view>
		<view class="agreement">提交即表示同意《XXXXX服务协议》</view>
		<view class="sub-button" @click="subactivity">发布</view>
	</view>
</template>

<script>
	import qiniuUploader from '../../components/qiniuUploader/qiniuUploader.js'
	import md5 from '../../common/md5.js'
	export default {
		data() {
			return {
				poster:[],
				key: [],
				posterurl:'',
				startime:'',
				endtime:'',
				bstartime:'',
				bendtime:'',
				activity_name:'',
				city:'',
				activity_detail:'',
				price:'',
				toplimit:'',
				sponsor:'',
				phone:'',
				tempFilePaths:[],
				tempFilePathsurl:[],
				key1: [],
				token: []
				
			};
		},
		methods:{
			onConfirm(e){
				this.startime = e.result;
			},
			onConfirm2(e){
				this.endtime = e.result;
			},
			onConfirm3(e){
				this.bstartime = e.result;
			},
			onConfirm4(e){
				this.bendtime = e.result;
			},
			switch1Change(e){
				
			},
			uploadpic(){
				var that = this;
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
							that.tempFilePaths = that.tempFilePaths.concat(res.tempFilePaths)
							for(var i =0;i<res.tempFilePaths.length;i++){
								that.key1.push(md5(Math.random().toString(36).substr(2)));
							}
				    }
				});
			},
			uploadpic1(){
				var that = this;
				uni.chooseImage({
				    count: 1, //默认1
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
							that.poster = res.tempFilePaths;
							that.key=[];
							that.key.push(md5(Math.random().toString(36).substr(2)));
							that.getqntoken()
				    }
				});
			},
			async getqntoken(){//得到七牛云token
				try {
				  let response = await this.$http.post('/real/imagetoken',{});
				  if (response.rspInfo.rspCode == 1000) {
						this.token=response.rspData.uptoken;
						this.upload(this.poster,this.key,0)
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
			upload(filePath,keys,type){
				var that = this;
				for(var i=0;i<filePath.length;i++){
					qiniuUploader.upload(filePath[i], (res) => {
						if(type==0){
							that.posterurl=`http://rdata-image.fblife.com/${res.key}`
						}else{
							that.tempFilePathsurl.push(`http://rdata-image.fblife.com/${res.key}`)
						}
					}, (error) => {
						var a = JSON.stringify(error);
						console.log('error: ' + a);
					}, {
						region: 'NCN',
						domain: 'up-z1.qiniu.com',
						key: keys[i],
						uptoken: this.token,
					});
				}
			},
			async subactivity(){
				let {posterurl, activity_name, startime, endtime, bstartime, bendtime, city, activity_detail, price, toplimit, sponsor, phone} = this;
				var data = {
					poster:posterurl,
					activity_name:activity_name,
					starttime:startime,
					endtime:endtime,
					entrystarttime:bstartime,
					entryendtime:bendtime,
					city:city,
					activity_detail:activity_detail,
					price:price,
					toplimit:toplimit,
					sponsor:sponsor,
					phone:phone
				}
				var checknull10 = this.$until.checknull(phone,'咨询电话不能为空');
				var checknull13 = this.$until.checknull(sponsor,'举办单位不能为空');
				var checknull9 = this.$until.checknull(toplimit,'人数限制不能为空');
				var checknull8 = this.$until.checknull(price,'报名费用不能为空');
				var checknull7 = this.$until.checknull(activity_detail,'活动简介不能为空');
				var checknull6 = this.$until.checknull(city,'活动地点不能为空');
				var checknull12 = this.$until.checknull(bendtime,'报名结束时间不能为空');
				var checknull11 = this.$until.checknull(bstartime,'报名开始时间不能为空');
				var checknull5 = this.$until.checknull(endtime,'活动结束时间不能为空');
				var checknull4 = this.$until.checknull(startime,'活动开始时间不能为空');
				var checknull3 = this.$until.checknull(activity_name,'活动标题不能为空');
				var checknull1 = this.$until.checknull(posterurl,'活动封面不能为空');
				if(!checknull13||!checknull12||!checknull11||!checknull1||!checknull3||!checknull4||!checknull5||!checknull6||!checknull7||!checknull8||!checknull9||!checknull10){return}
				try {
				  let response = await this.$http.post('/activity/addActivity',data);
				  if (response.rspInfo.rspCode == 1000) {
				    uni.showToast({
				    	title: '活动发布成功'
				    });
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
		}
	}
</script>

<style lang="scss">
@import "@/common/style/style.scss";
</style>
