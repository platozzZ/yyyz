<template>
	<view class="myacvitity">
		<view class="my-acti-one" v-for="(item,index) in listItems" :key="index">
			<view class="acti-top" @click="godetail" :data-mid="item.mid">
				<view class="acti-title elp1">{{item.name}}</view>
				<view class="acti-status">{{getstatus(item.activity_status)}}</view>
			</view>
			<view class="acti-cont"  @click="godetail" :data-mid="item.mid">
				<esay-loadimage class="list-image" :imgheight="180" :scroll-top="scrollTop" :open-transition="true" :image-src="item.logo" mode=""></esay-loadimage>
				<view class="acti-info">
					<view class="info-one acti-time"><text class="label">活动时间：</text><text>{{item.starttime}} - {{item.endtime}}</text></view>
					<view class="info-one acti-address"><text class="label">举办地点：</text><text class="elp1">{{item.city}}</text></view>
					<view class="info-one acti-num"><text class="label">人数上限：</text><text>{{item.toplimit}}人</text></view>
					<view class="info-one acti-price"><text class="label">报名费用：</text><text>{{item.pricestr}} 元/人</text></view>
				</view>
			</view>
			<view class="man-num-bg">
				<view class="man-num"><text>已报名人数：</text>{{item.racer_count}}人</view>
				<view class="man-see" :data-mid="item.mid" @click="gosignlist">查看报名列表></view>
			</view>
			<view class="acti-modify">
				<view v-if="item.racer_count==0" class="button"  @click="goedit" :data-mid = "item.mid">编辑重启</view>
				<template v-if="item.activity_status==60">
					<view class="button button-hui">取消活动</view>
					<!-- <view class="button button-hui">分享活动</view> -->
				</template>
				<template v-else>
					<view class="button" @click="show=true;cancelmid=item.mid">取消活动</view>
					<!-- <view class="button">分享活动</view> -->
				</template>
			</view>
		</view>
		<uni-load-more :status="moretype" iconType="snow"></uni-load-more>
		<x-modal v-model="show" title='提示' text='你确定要取消此活动吗？' @confirm='cancelActivity' />
	</view>
</template>

<script>
	import {getstatus} from '../../common/until.js'
export default {
	props:{
		scrollTop:{
			default:0
		}
	},
	data() {
		return {
			getstatus,
			show:false,
			cancelmid:'',
			moretype:'more',
			page:1,
			rows:10,
			listItems:[]
		};
	},
	onLoad() {
		
	},
	methods: {
		// onPageScroll({scrollTop}) {
		// 	this.scrollTop = scrollTop;
		// },
		godetail(e){
			uni.navigateTo({
				url:'../../pages/matchInfo/matchInfo?mid='+e.currentTarget.dataset.mid
			})
		},
		goedit(e){
			uni.navigateTo({
				url:'../../pages/editactivity/editactivity?mid='+e.target.dataset.mid
			})
		},
		gosignlist(e){
			uni.navigateTo({
				url:'../signlist/signlist?mid='+e.target.dataset.mid
			})
		},
		gobottom(){
			if(this.moretype!='noMore'){
				this.getmyActivity();
			}
		},
		async cancelActivity(){//取消活动
			try {
				var data = {mid:this.cancelmid}
			  let response = await this.$http.post('/activity/cancelActivity',data);
			  if (response.rspInfo.rspCode == 1000) {
					uni.showToast({
					    title: '取消成功',
					    duration: 2000
					});
					this.page=1;
					this.listItems=[]
					this.getmyActivity()
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
		async getmyActivity(){//得到活动列表
			let {page, rows} = this;
			this.moretype = 'loading';
			try {
				var data = {page:page,rows:rows}
			  let response = await this.$http.post('/Site/myActivity',data);
			  if (response.rspInfo.rspCode == 1000) {
					this.listItems = this.listItems.concat(response.rspData.list)
					
					if(page*rows<response.rspData.count){
						this.moretype = 'more';
					}else{
						this.moretype = 'noMore';
					}
					this.page = this.page+1;
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
	}
};
</script>

<style lang="scss">
	.myacvitity{
		.my-acti-one {
			margin-top: 16rpx;
			background-color: #fff;
			.acti-top {
				display: flex;
				justify-content: space-between;
				line-height: 84rpx;
				padding: 0 30rpx;
				border-bottom: 1px solid #e6e6e6;
				.acti-title {
					font-size: 32rpx;
					color: #333;
					font-weight: 550;
					flex: 1;
				}
				.acti-status {
					font-size: 26rpx;
					color: #999;
					width: 180rpx;
					text-align: right;
				}
			}
			.acti-cont {
				display: flex;
				padding: 30rpx 30rpx;
				.list-image {
					width: 180rpx;
					height: 180rpx;
				}
				.acti-info {
					flex: 1;
					color: #333;
					font-size: 26rpx;
					.info-one {
						display: flex;
						padding: 10rpx 0 0 30rpx;
						.label {
							color: #888;
						}
						.elp1 {
							flex: 1;
						}
					}
				}
			}
			.man-num-bg {
				display: flex;
				line-height: 66rpx;
				padding: 0 30rpx;
				border-top: 1px solid #e6e6e6;
				border-bottom: 1px solid #e6e6e6;
				justify-content: space-between;
				.man-num {
					font-size: 26rpx;
					font-weight: 550;
					text {
						font-weight: 500;
						color: #888;
					}
				}
				.man-see {
					font-size: 26rpx;
					color: #1c99ff;
				}
			}
			.acti-modify {
				display: flex;
				padding: 20rpx 30rpx;
				justify-content: flex-end;
				.button {
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 26rpx;
					color: #333;
					text-align: center;
					border: 1px solid #333;
					margin-left: 20rpx;
					border-radius: 6rpx;
				}
				.button-hui {
					border: 1px solid #ccc;
					color: #ccc;
				}
			}
		}
	}
</style>
