<template>
	<view class="inputorder2-2">
		<view class="introduce-bg">
			<view class="intro-title">线上优惠购买礼包</view>
			<view class="intro-one">线上购买礼包，享受八折优惠，现场原价有售，线上采购每人限
				购一份优惠礼包。</view>
			<view class="intro-one">礼包需由领队携本人身份证一次性领取。</view>
			<view class="intro-one">礼包领取位置在阿拉善公园园区内［官方文创商品大厅］。具体
				位置可留意官方媒体稍后公布的地图导航或者现场签到处的领取通知。</view>
		</view>
		<view class="giftbg" v-for="(item,index) in 3" :key="index">
			<view class="gift-cont">
				<view class="gift-title">购买礼包</view>
				<view class="gift-text">线上购买优惠价 <text class="huang">¥ 80</text>一套，现场原价销售。</view>
			</view>
			<view class="numbg">
				<uni-number-box :min="0" :value="0" :max="9"></uni-number-box>
			</view>
		</view>
		<view class="step-bottom" @click="stepclick">下一步</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		stepclick(){
			this.$emit('steptap',3)
		}
	}
};
</script>

<style lang="scss">
.inputorder2-2 {
	.step-bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		background-color: #FF7A22;
		line-height: 120rpx;
		text-align: center;
		color: #fff;
		font-size: 40rpx;
	}
	.introduce-bg{
		font-size: 20rpx;
		color: #757575;
		line-height: 32rpx;
		.intro-title{
			font-size: 44rpx;
			color: #5B5B5B;
			line-height: 90rpx;
			text-align: center;
		}
		.intro-one{
			margin-bottom: 20rpx;
		}
	}
	.giftbg{
		display: flex;
		align-items: center;
		padding: 30rpx 0;
		border-top: 1px solid #e6e6e6;
		justify-content: space-between;
		.gift-cont{
			width:320rpx;
			.gift-title{
				font-size: 26rpx;
				color: #5B5B5B;
				font-weight: 600;
				line-height: 48rpx;
			}
			.gift-text{
				font-size: 20rpx;
				line-height: 38rpx;
				color: #B7B7B7;
				.huang{
					color: #FF7A22;
					font-size: 22rpx;
				}
			}
		}
	}
}
</style>
