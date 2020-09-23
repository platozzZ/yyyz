
<template>
	<view class="activityinput">
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029"
			:current="true"
			value=""
			fields="minute"
			@confirm="onConfirm($event,'date')"
			:disabled-after="false"
			ref="date" 
		></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2029" 
			value=""
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
			value=""
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
			value=""
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
			<view class="inline-one inline-one-jianjie" style="display:block;">
				<view class="label" style="padding-bottom: 20rpx;">活动简介</view>
				<jin-edit placeholder="请输入内容" @editOk="editOk" html=""></jin-edit>
				<!-- <view class="cont">
					<textarea v-model="activity_detail" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入活动简介"/>
				</view> -->
			</view>
			
<!-- 			<view class="upload-bg">
				<view class="image-bg" v-for="(item, index) in tempFilePaths" :key="index">
					<image :src="item" mode=""></image>
				</view>
				<view class="image-bg" @click="uploadpic">
					<image src="../../static/images/add-icon.png" mode=""></image>
				</view>
			</view> -->
			<!-- <view class="inline-one inline-one-charge">
				<view class="label">活动收费</view>
				<view class="cont">
					<switch class="switch" color="#4CD964" checked @change="switch1Change" />
				</view>
			</view> -->
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
		<view class="intitle">设置报名人填写信息</view>
		<view class="inline youself">
			<view class="inline-one inline-one-charge" v-for="(item,index) in youselfItem" :key="index">
				<view class="label">{{item.desc}}</view>
				<view class="cont">
					<switch class="switch" color="#4CD964" :data-index="index" :checked="item.checked" @change="switchyouself" />
				</view>
			</view>
		</view>
		
		<view class="inline myself" >
			<view class="zhumyself" @click="addself">添加自定义报名人填写信息</view>
			<view class="selfone" v-for="(item, index) in selfItems" :key="index">
				<view class="uni-list-cell" >
						<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :data-index= "index" :value="item.type.index" :range="array">
										<view class="uni-input">{{array[item.type.index]}}</view>
								</picker>
						</view>
						<view class="closbg">
							<image src="../../static/images/layer_close.png"  :data-index= "index" mode="" @click="removeoutoptions" class="close"></image>
						</view>
				</view>
				<view class="input-bg" v-if="item.cont.type">
					<view class="in-one">
						<view class="in-title">标题：</view>
						<view class="cont">
							<input type="text" maxlength="5"  v-model="item.cont.title" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入标题">
						</view>
					</view>
					
					<view class="in-one">
						<view class="in-title">是否必填：</view>
						<view class="cont">
							<switch class="switch" color="#4CD964" :data-index= "index" :checked="item.cont.validate==1?true:false" @change="selfswitch1Change" />
						</view>
					</view>
					<view class="rai" v-if="item.cont.type=='radio'||item.cont.type=='checkbox'">
						<view class="addoption" :data-index= "index" @click="addoptions">添加选项</view>
						<view class="in-one" v-for="(ite, index2) in item.cont.item" :key="index2">
							<view class="in-title">选项{{index2+1}}：</view>
							<view class="cont">
								<input type="text" v-model="ite.name" placeholder-style="color:#ccc;font-size:28rpx;" placeholder="输入选项内容">
							</view>
							<image src="../../static/images/layer_close.png" :data-index= "index" :data-index2="index2" mode="" @click="removeoptions" class="close"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		<!-- <view class="agreement">提交即表示同意《XXXXX服务协议》</view> -->
		<view class="sub-button" @click="subactivity">发布</view>
		
		<view class="hidden" v-if="bottomshow"></view>
		
	</view>
</template>

<script>
	import qiniuUploader from '../../components/qiniuUploader/qiniuUploader.js'
	import md5 from '../../common/md5.js'
	export default {
		data() {
			return {
				html:'',
				youselfItem:[],
				bottomshow:false,
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
				token: [],
				
				array: ['点击选择类型','文本框','多行文本框', '单项选择', '多项选择', '时间选择', '图片上传'],
				selfItems:[],
				selftype:['text','textarea','radio','checkbox','time','picload']
				
			};
		},
		onLoad(e) {
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
							if(uni.getStorageSync("channel")&&res.platform=="android"){
								that.bottomshow=true
							}
			    }
			});
				var loginRes = this.checkLogin('../activityinput/activityinput', '2');
				if(!loginRes){return false;}
			if(e.channel=="cmmc"){
				uni.setStorage({
				    key: 'comephone',  
				    data: e.phone
				});  
				uni.setStorage({
				    key: 'channel',  
				    data: e.channel
				}); 
			}
			this.getActivityUserinfo()
		},
		methods:{
			editOk(e){
				this.html = e.html
			},
									
			addself:function(){//添加一类
				var data = {'type':{index: 0},cont:''}
				this.selfItems.push(data)
			},
			bindPickerChange: function(e) {//自定义报名人信息按钮
				if(e.target.value==0){
					return;
				}
				this.selfItems[e.currentTarget.dataset.index].type.index=e.target.value;
				this.selfItems[e.currentTarget.dataset.index].cont = {"title":"","type":this.selftype[e.target.value-1],"validate":0,"item":[]};
			},
			selfswitch1Change(e){//是否必填
				this.selfItems[e.currentTarget.dataset.index].cont.validate=e.detail.value?1:0
			},
			addoptions(e){//添加选项
			var data = {"name":"","value":this.selfItems[e.currentTarget.dataset.index].cont.item.length}
				this.selfItems[e.currentTarget.dataset.index].cont.item.push(data)
			},
			removeoptions(e){//删除radioscheckbox选项
				this.selfItems[e.currentTarget.dataset.index].cont.item.splice(e.currentTarget.dataset.index2,1)
			},
			removeoutoptions(e){//移除大类
				this.selfItems.splice(e.currentTarget.dataset.index,1)
			},
			
			switchyouself(e){//switchyouself
				this.youselfItem[e.currentTarget.dataset.index].checked=e.detail.value;
			},
			async getActivityUserinfo(){//得到youself
				try {
				  let response = await this.$http.post('/activity/getActivityUserinfo',{},'');
				  if (response.rspInfo.rspCode == 1000) {
						this.youselfItem=response.rspData
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
				console.log(e)
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
				    },
						fail:function(res){
						},
						complete:function(res){
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
				let {posterurl, activity_name, startime, endtime, bstartime, bendtime, city, html, price, toplimit, sponsor, phone} = this;
				var that = this;
				var checknull10 = this.$until.checknull(phone,'咨询电话不能为空');
				var checknull13 = this.$until.checknull(sponsor,'举办单位不能为空');
				var checknull9 = this.$until.checknull(toplimit,'人数限制不能为空');
				var checknull8 = this.$until.checknull(price,'报名费用不能为空');
				var checknull7 = this.$until.checknull(html,'活动简介不能为空');
				var checknull6 = this.$until.checknull(city,'活动地点不能为空');
				var checknull12 = this.$until.checknull(bendtime,'报名结束时间不能为空');
				var checknull11 = this.$until.checknull(bstartime,'报名开始时间不能为空');
				var checknull5 = this.$until.checknull(endtime,'活动结束时间不能为空');
				var checknull4 = this.$until.checknull(startime,'活动开始时间不能为空');
				var checknull3 = this.$until.checknull(activity_name,'活动标题不能为空');
				var checknull1 = this.$until.checknull(posterurl,'活动封面不能为空');
				if(!checknull13||!checknull12||!checknull11||!checknull1||!checknull3||!checknull4||!checknull5||!checknull6||!checknull7||!checknull8||!checknull9||!checknull10){return}
				
				var userinfosetting = this.youselfItem.filter(it => it.checked).map(r => {
					var data = {field:r.field,desc:r.desc}
					return data;
				})
				var goon=true;
				this.selfItems.filter(r => {
					if(r.type.index==0){//没有选择类型
						return false
					}else{//选择了类型
						if(!r.cont.title){//标题为空
							uni.showToast({
							    title: this.array[r.type.index]+'标题不能为空',
									icon:'none',
							    duration: 2000
							});
							goon = false;
							return false
						}else{//标题不为空
							if(r.cont.type=='radio'||r.cont.type=="checkbox"){//如果是单选或者多选
								if(r.cont.item.length>0){//有选项
									for(var a = 0;r.cont.item.length>a;a++){
										if(r.cont.item[a].name){
											
										}else{
											uni.showToast({
											    title: this.array[r.type.index]+' - 选项'+(a+1)+'不能为空',
													icon:'none',
											    duration: 2000
											});
											goon = false;
											return false
										}
									}
								}else{//没选项
									uni.showToast({
									    title: this.array[r.type.index]+'选项不能为空',
											icon:'none',
									    duration: 2000
									});
									goon = false;
									return false
								}
							}
						}
					}
				})
				if(!goon){return};
				// var from_json = this.selfItems.filter(r => {
				// 	if(r.cont.title){
				// 		if(r.cont.type=='radio'||r.cont.type=="checkbox"){
				// 			if(r.cont.item.length>0){
				// 				return r
				// 			}else{
				// 				return false
				// 			}
				// 		}else{
				// 			return r;
				// 		}
				// 	}
				// }).map(r => r.cont);
				
				var from_json = this.selfItems.map(r => r.cont);
				var data = {
					poster:posterurl,
					activity_name:activity_name,
					starttime:startime,
					endtime:endtime,
					entrystarttime:bstartime,
					entryendtime:bendtime,
					city:city,
					activity_detail:html,
					price:price,
					toplimit:toplimit,
					sponsor:sponsor,
					phone:phone,
					userinfosetting:JSON.stringify(userinfosetting),
					from_json:JSON.stringify(from_json)
				}
				
				try {
				  let response = await this.$http.post('/activity/addActivity',data);
				  if (response.rspInfo.rspCode == 1000) {
				    uni.showToast({
				    	title: '活动发布成功',
							duration: 1500
				    });
						if(uni.getStorageSync("channel")=='cmmc'){
							setTimeout(function(){
									that.$bridge.call("cmmc.closeWebview", '', (data) => {})
							}, 1500)
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
			}
		}
	}
</script>

<style lang="scss">
@import "@/common/style/style.scss";
</style>


