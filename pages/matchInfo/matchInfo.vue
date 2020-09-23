<template>
	<view class="matchInfo">
		<image class="image-bg" :src="matchInfoDatas.poster" mode="aspectFill"></image>
		<view class="content-top">
			<view class="cont-top">
				<view class="head-pic-bg">
					<image class="head-pic" :src="matchInfoDatas.logo" mode=""></image>
				</view>
				<view class="title">{{matchInfoDatas.name}}</view>
				<view class="price">¥{{matchInfoDatas.price}} / 组</view>
				<view class="info-bg">
					<view class="time">
						<text class="info-bg-label">活动时间：</text>
						<text class="info-bg-cont"> {{matchInfoDatas.starttime}} 至 {{matchInfoDatas.endtime}}</text>
					</view>
					<view class="sponsor">
						<text class="info-bg-label">主办方：</text>
						<text class="info-bg-cont"> {{matchInfoDatas.sponsorname}}</text> 
					</view>
					<view class="address">
						<text class="info-bg-label">举办地点：</text>
						<text class="info-bg-cont"> {{matchInfoDatas.city}}</text>
					</view>
				</view>
				<view class="countdown-bg" v-if="matchInfoDatas.match_status.match_status_code==20">
					<text>距离报名截止：</text>
					<uni-countdown class="countdown" color="#fff" splitor-color="#666" background-color="#E43C3C" :day="gettimes(matchInfoDatas.entryendtime*1000,'day')" :hour="gettimes(matchInfoDatas.entryendtime*1000,'hours')"  :minute="gettimes(matchInfoDatas.entryendtime*1000,'minutes')" :second="36"></uni-countdown>
				</view>
				<view class="together-bg" v-if="matchInfoDatas.RacerTop.length>0">
					<view class="together-top">
						<view class="together-title">与你相伴</view>
						<view class="together-all" @click="gosignlist">全部</view>
					</view>
					<view class="list-bg" >
						<view class="list-one" v-for="(ite, index) in matchInfoDatas.RacerTop" :key="index">
							<image :src="ite.avatar?ite.avatar:'../../static/images/default_photo.png'" src="../../static/images/default_photo.png" mode=""></image>
							<text class="text">{{ite.racername}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="heng"></view>
		<view class="match-b">
			<ms-tabs class="ms-tabs" itemColor="#E43C3C" lineColor="#E43C3C" :list="tabList" v-model="tabActiveIdx" />
			<view class="tab-list-one">
				<view v-for="(item, index) in matchInfoDatas.matchdetail" :key="index" v-if="tabActiveIdx === index">
					<view v-html="edit(item.content)"></view>
				</view>
			</view>
		</view>
		<view class="sub iphonex" v-if="matchInfoDatas.match_status.match_status_code==20" @click="goinputorder"><view class="xin">立即报名</view></view>
		<view class="sub sub1 iphonex" v-else><view class="xin">{{getstatus(matchInfoDatas.match_status.match_status_code)}}</view></view>
	</view>
</template>

<script>
	import {getstatus} from '../../common/until.js'
	export default {
		data() {
			return {
				phonetype:'',
				getstatus,
				mid:'',
				matchInfoDatas:'',
				tabList:[{
					title:'赛事简介'
				},{
					title:'赛事保险须知' 
				}],
				tabActiveIdx:0,
			};
		},
		methods:{
			edit(cont){
				const regex = new RegExp('<img', 'gi')
				if(!cont){return ''}
				var newcont = cont.replace(regex, `<img style="max-width: 100%; height: auto"`)
				return newcont;
			},
			tabSelect(idx) {
				this.tabActiveIdx = idx
			},
			
			logincallback(){
				this.$bridge.register("loginResult",(data) => {
					uni.setStorage({
					    key: 'comephone',  
					    data: data
					});  
					uni.navigateTo({
						url:'../inputorder1/inputorder1?mid='+this.mid
					})
				})
			},
			goinputorder(){
				var that = this;
				if(this.matchInfoDatas.type==110){
					window.location.href = 'https://' + this.matchInfoDatas.activity_url;
					return;
				}
				if(uni.getStorageSync("channel")&&!uni.getStorageSync("comephone")){
						this.$bridge.call("cmmc.pushToLogin",'', (data) => {
							if(that.phonetype=="android"){
								var newdata = JSON.parse(data);
								uni.setStorage({
								    key: 'comephone',  
								    data: newdata.mobile
								});  
								that.goinput()
							}
						})
						return false
				}else{
					var loginRes = this.checkLogin('../matchInfo/matchInfo?mid='+this.mid, '1');
					if(!loginRes){return false;}
					that.goinput()
				}
				
			},
			goinput(){
				if(this.matchInfoDatas.type==100){
					uni.navigateTo({
						url:'../inputorder1/inputorder1?mid='+this.mid
					})
				}else{
					uni.navigateTo({
						url:'../inputorder2/inputorder2?mid='+this.mid
					})
				}
			},
			gosignlist(){
				switch(this.matchInfoDatas.type){
					case 100:
						uni.navigateTo({
							url:'../signlist/signlist?mid='+this.mid
						});
						break;
					default:
						uni.navigateTo({
							url:'../signlist_match/signlist_match?mid='+this.mid
						});
						break;
				}
				
			},
			async matchInfo(){//得到赛事活动详情
				var data = {mid:this.mid}
				try {
				  let response = await this.$http.post('/match/matchInfo',data,'',false);
				  if (response.rspInfo.rspCode == 1000) {
						this.matchInfoDatas = response.rspData;
						this.tabList = response.rspData.matchdetail.map(r=>{
							return {title:r.tabname}
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
			},
			gettimes(completeTime, type){
				var stime = Date.parse(new Date());
				var etime = Date.parse(new Date(completeTime));
				var usedTime = etime - stime;  //两个时间戳相差的毫秒数
				var days=Math.floor(usedTime/(24*3600*1000));
				//计算出小时数
				var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
				var hours=Math.floor(leave1/(3600*1000));
				//计算相差分钟数
				var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
				var minutes=Math.floor(leave2/(60*1000));
				var time = days + "天"+hours+"时"+minutes+"分";
				if(type=='day'){
					return days
				}else if(type=="hours"){
					return hours
				}else if(type=="minutes"){
					return minutes
				}else{
					return time
				}
			},
		},
		onLoad(e) {
			this.mid = e.mid;
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
							that.phonetype = res.platform
			    }
			});
			//#ifndef MP-WEIXIN
				this.logincallback()
			// #endif
			
			this.matchInfo()
		}
	}
</script>

<style lang="scss">
	@import "@/common/style/style.scss";
</style>
