<template>
	<view>
		<view class="pop-content pop-car">
			<view class="pop-fixed">
				<view class="pop-top">
					<text class="cancel" @click="close()">取消</text>
					<view class="pop-title">
						选择要参赛的车辆
					</view>
					<text class="define" @click="close">确定</text>
				</view>
				<view class="line"></view>
				<view class="cont-title">
				  <view class="add-contact" @click="TocontactAdd()">+添加车辆</view>
				</view>
			</view>
			
			<view class="content-cont">
				<scroll-view class="trys" scroll-y>
				<view class="line"></view>
				<view class="cont">
					<view class="cont-one" v-for="(item,index) in 10" :key="index">
						<view class="checkbox-bg">
							<checkbox class="checkbox" value="cb" checked="true" />
						</view>
						<view class="check-in">
							<img src="http://rdata-image.fblife.com/public/20170912/843121_o_1bpr37ijq1ttlto61emj104g1f8710.jpg?imageView2/1/w/654/h/382/q/75|imageslim" alt="" class="car-img" />
							<view class="car-text">
							  <view class="car-name">梅赛德斯奔驰{{index+1}}</view>
							  <view class="car-type">S600L 3.0 黑色</view>
							</view>
						  </view>
						<view class="modify">
							<image src="../../static/images/edit.png" mode=""></image>
						</view>
					</view>
				</view>
				</scroll-view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		close() {
			this.$emit('close')
		},
		TocontactAdd(){
			uni.navigateTo({
				url:'../../pages/addcar/addcar'
			})
		}
	}
};
</script>

<style lang="scss">
		.pop-content {
			height: 90vh;
			/*#ifdef H5*/
			height: 80vh;
			/*#endif*/
			background: #ededed;
			padding-top: 218rpx;
			box-sizing: border-box;
			position: relative;
			.pop-fixed {
				position: fixed;
				top: 0;
				z-index: 9999;
				width: 100%;
				left: 0;
			}
			.pop-top {
				background: #fff;
				height: 100rpx;
				display: flex;
				line-height: 100rpx;
				font-size: 30rpx;
				color: #333333;
				padding: 0 30rpx;
				.cancel {
					text-align: left;
					width: 80rpx;
				}
				.define {
					text-align: right;
					width: 80rpx;
					color: #1c99ff;
				}
				.pop-title {
					font-weight: 550;
					flex: 1;
					text-align: center;
					font-size: 32rpx;
					text {
						font-weight: 400;
						font-size: 22rpx;
						color: #626262;
					}
				}
			}
			.line {
				height: 16rpx;
				background: #ededed;
			}
			.cont-title {
				padding: 0 30rpx;
				line-height: 100rpx;
				border-bottom: 1px solid #e6e6e6;
				background: #fff;
				text-align: center;
				font-size: 30rpx;
				color: #1c99ff;
				.add-contact{
					margin:0 auto;
					text-align: center;
				}
			}
			.content-cont {
				height: 100%;
				overflow: auto;
			}
			.cont {
				padding: 0 30rpx;
				background: #fff;
				.cont-one {
					display: flex;
					padding: 30rpx 0;
					border-bottom: 1px solid #e6e6e6;
					align-items: center;
					font-size: 28rpx;
					color: #939393;
					.checkbox-bg {
						width: 100rpx;
						.checkbox {
							transform: scale(0.8, 0.8);
						}
					}
					.check-in{
						flex:1;
					  display:inline-flex;
					  .car-img{
						width:60px;
						height:60px;
					  }
					  .car-text{
						flex:1;
						padding-left: 20rpx;
						padding-top: 10rpx;
						.car-name{
						  font-size: 30rpx;
						  color: #333333;
						  line-height: 56rpx;
						  font-weight: 550;
						}
						.car-type{
						  font-size: 28rpx;
						  color: #939393;
						  line-height: 44rpx;
						}
					  }
					}
					.modify {
						width: 80rpx;
						text-align: center;
						image {
							width: 36rpx;
							height: 36rpx;
							margin-top: 30rpx;
						}
					}
				}
			}
		}
</style>
