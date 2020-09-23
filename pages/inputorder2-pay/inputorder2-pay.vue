<template>
	<view class="inputorder2-pay">
		<image class="top-img" src="../../static/images/del/inputorder2bg.png" mode=""></image>
		<view class="cont">
			<view class="goback">
				<image class="goback" src="../../static/images/backgo.png" mode=""></image>
				<view class="text">支付宝方式</view>
			</view>
			<view class="zongprice">
				<view class="zongnum">¥892000</view>
				<view class="zongtext">总费用</view>
			</view>
			<view class="pricelist-bg" v-for="(item,index) in 4" :key="index">
				<view class="price-title">
					<view class="label">云台山景区门票</view>
					<view class="pricenum"> ¥900</view>
				</view>
				<view class="price-title price-cont">
					<view class="label">专业组</view>
					<view class="pricenum"> ¥900x5</view>
				</view>
				<view class="price-title price-cont">
					<view class="label">越野赛事人身意外险</view>
					<view class="pricenum"> ¥900x5</view>
				</view>
			</view>
			<view class="choosepay">
				<view class="paybg">
					<image class="payimg" src="../../static/images/payment_alipay.png" mode=""></image>
				</view>
				<view class="paybg">
					<image class="payimg" src="../../static/images/payment_wechat.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="step-bottom" @click="stepclick">去支付</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
		
	}
};
</script>

<style lang="scss">
@import '@/common/style/style.scss';
</style>
