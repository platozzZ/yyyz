<template>
	<view class="inputorder2-2-man">
		<view class="introduce-bg">
			<view class="intro-one">填写报名车辆和保险人员信息。如果领队需要领取车贴和购买保
				险，需要在本表中再次填写信息。</view>
			<view class="intro-one">每车赠送一套车贴，车贴根据车辆数量自动分发。按照往年规则，
				贴有车贴的车辆才可以进入阿拉善梦想公园园区。（以现场实际规则为准）</view>
		</view>
		<view class="leader-info">
			<view class="leader-name"><text class="label">领队：</text>王宝强 / 北京大队  </view>
			<view class="leader-text">以下所有人员的车贴\礼包，由王宝强持本人身份证在现场报名处统一领取。</view>
		</view>
		
		<view class="addcont-bg" v-for="(item,index) in 2" :key="index">
			<view class="addcont-title">新增-同行人员</view>
			<view class="addcont-show">驾驶人员需要购买保险，姓名身份证必须真实有效</view>
			<view class="addcont-input-bg">
				<view class="label">姓名：</view>
				<input type="text" value="" class="input-in" />
				<view class="xing">*</view>
			</view>
			<view class="addcont-input-bg">
				<view class="label">身份证：</view>
				<input type="text" value="" class="input-in" />
				<view class="xing">*</view>
			</view>
			<view class="addcont-input-bg">
				<view class="label">手机号：</view>
				<input type="text" value="" class="input-in" />
				<view class="xing">*</view>
			</view>
			<view class="addcont-input-bg">
				<view class="label">品牌：</view>
				<picker class="input-in" @change="cartypeChange" :value="cartypeIndex" :range="cartype">
					<view class="uni-input elp1">{{cartype[cartypeIndex]}}</view>
				</picker>
				<view class="xing">*</view>
			</view>
			<view class="addcont-input-bg">
				<view class="label">车型：</view>
				<picker class="input-in" @change="carChange" :value="carIndex" :range="car">
					<view class="uni-input elp1">{{car[carIndex]}}</view>
				</picker>
				<view class="xing">*</view>
			</view>
		</view>
		
		<image class="add" src="../../static/images/inputorder2/tianjiatongxingrenyuan.png" mode=""></image>
		
		<view class="step-bottom" @click="stepclick">下一步</view>
	</view>
</template>

<script>
	import {carCx, citys} from '../../common/carCx.js' 
export default {
	data() {
		return {
			cartype:carCx.map(r=>r.text),
			cartypeIndex:0,
			
			car:carCx[0].children.map(r=>r.text),
			carIndex:0
		};
	},
	methods: {
		carChange(e){
			this.carIndex = e.target.value;
			console.log(e)
		},
		cartypeChange(e){
			this.cartypeIndex = e.target.value;
			this.carIndex=0,
			this.car = carCx[this.cartypeIndex].children.map(r=>r.text)
		},
		close1() {
			this.$refs.popup1.close();
		},
		stepclick(){
			this.$emit('steptap',2)
		}
	}
};
</script>

<style lang="scss">
.inputorder2-2-man {
	.uni-popup{
		z-index: 999999;
	}
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
	.leader-info{
		margin: 0 auto;
		width:538rpx;
		height: 182rpx;
		background: url(../../static/images/inputorder2/lingdui.png) no-repeat center center;
		background-size: 538rpx 182rpx;
		.leader-name{
			padding:0 24rpx;
			line-height: 82rpx;
			font-size: 32rpx;
			color: #FF7A22;
			.label{
				font-size: 28rpx;
				color: #838383;
			}
		}
		.leader-text{
			line-height: 32rpx;
			padding:10rpx 24rpx;
			font-size: 24rpx;
			color: #505050;
		}
	}
	.addcont-bg{
		.addcont-title{
			font-size: 36rpx;
			color: #282828;
			text-align: center;
			padding:50rpx 0 30rpx;
		}
		.addcont-show{
			font-size: 24rpx;
			color: #858585;
			padding:0 0 20rpx;
		}
		.addcont-input-bg{
			border-bottom: 2px solid #F1F1F1;
			display: flex;
			padding:25rpx;
			line-height: 50rpx;
			margin-bottom: 28rpx;
			height:50rpx;
			border: 1px solid #DFDFDF;
			border-radius: 30rpx;
			border-radius: 30rpx;
			.label{
				font-size: 28rpx;
				color: #818181;
				width:140rpx;
			}
			.input-in{
				font-size: 28rpx;
				color: #333;
				flex:1;
			}
			.xing{
				width:50rpx;
				text-align: right;
				font-size: 44rpx;
				color: #818181;
			}
		}
	}
	.add{
		width:110rpx;
		height: 110rpx;
		display: block;
		margin:0 auto;
	}
}
</style>
