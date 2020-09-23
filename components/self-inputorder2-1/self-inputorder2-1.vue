<template>
	<view class="inputorder2-1">
		<view class="introduce-bg"><view class="intro-one">领队负责所有随行人员的物料领取。领队必须携本人身份证，亲 临现场。有且只有领队能够一次性领取随行人员所有物料。</view></view>
		<view class="club-bg">所属大队：北京大队</view>
		<view class="input-bg">
			<view class="input-one">
				<view class="label">姓名</view>
				<view class="input-cont">
					<input class="input" type="text" value="" />
					<text class="star">*</text>
				</view>
			</view>
			<view class="input-one">
				<view class="label">身份证</view>
				<view class="input-cont">
					<input class="input" type="text" value="" />
					<text class="star">*</text>
				</view>
			</view>
			<view class="input-one">
				<view class="label">领队电话</view>
				<view class="input-cont">
					<input class="input" type="number" value="" />
					<text class="star">*</text>
				</view>
			</view>
			<view class="input-one">
				<view class="label">验证码</view>
				<view class="input-cont">
					<input class="input" type="number" value="" />
					<text class="star">*</text>
				</view>
			</view>
			<view class="input-one">
				<view class="label">e族ID</view>
				<view class="input-cont">
					<input class="input" type="text" value="" />
					<text class="star">*</text>
				</view>
			</view>
		</view>
		<view class="step-bottom" @click="stepclick">下一步</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
		stepclick(){
			this.$emit('steptap',1)
		}
	}
};
</script>

<style lang="scss">
.inputorder2-1 {
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
		.intro-one{
			margin-bottom: 20rpx;
		}
	}
	.club-bg{
		font-size: 32rpx;
		line-height: 98rpx;
		text-align: center;
		color: #FF7A22;
		background:url(../../static/images/daiduibeijing.png) no-repeat center center;
		background-size: 558rpx 98rpx;
	}
	.input-bg{
		.input-one{
			.label{
				font-size: 24rpx;
				color: #a7a7a7;
				padding: 28rpx 0 10rpx;
			}
			.input-cont{
				height: 98rpx;
				width: 100%;
				border:1px solid #F2F2F2;
				border-radius: 30rpx;
				display: flex;
				justify-content: space-between;
				.input{
					padding:25rpx;
					line-height: 48rpx;
					flex:1;
					font-size: 30rpx;
					color: #333;
				}
				.star{
					font-size: 48rpx;
					line-height: 98rpx;
					color: #818181;
					width:80rpx;
					text-align: center;
				}
			}
		}
	}
}
</style>
