<template>
	<view class="orderdetail">
		<view class="orderinfo-bg">
			<view class="orderinfo">
				<view class="order-num">订单号：158553708300001671734</view>
				<view class="sign-time">2020-03-30 报名</view>
			</view>
			<view class="match-title">2017阿拉善英雄会报名</view>
			<view class="order-cont">
				<view class="start-time">
					<view class="time-top">04-29</view>
					<view class="time-b">开始时间</view>
				</view>
				<view class="sign-num">
					<view class="sign-people">1名报名人</view>
					<view class="match-address">阿拉善左旗沙漠梦想汽车公园</view>
				</view>
				<view class="end-time">
					<view class="time-top">04-30</view>
					<view class="time-b">结束时间</view>
				</view>
			</view>
			<view class="order-price">
				<text class="price-label">总额：</text>
				<text class="price-num">￥700.00</text>
			</view>
		</view>
		<view class="serveself-bg">
			<view class="self-top">
				<view class="self-title">自助服务</view>
				<view class="slef-see">查看</view>
			</view>
			<view class="self-cont">
				<view class="self-list">报名人（1）</view>
				<view class="self-list">保险（1）</view>
				<view class="self-list">门票（5）</view>
			</view>
		</view>
		<view class="button" @click="show=true">取消订单</view>
		<x-modal v-model="show" title='提示' text='你确定要取消订单？' @cancel='cancel' @confirm='confirm' @event='event'/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			};
		},
		methods:{
			open(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">
@import "@/common/style/style.scss";
</style>
