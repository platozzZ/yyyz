<template>
	<view class="inputorder2-2">
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
		<view class="choosezu-bg">
			<view class="choosezu-title">选择组别</view>
			<view class="choosezu-cont">
				<view v-for="(item,index) in zuItems" :key="index"  @click="choosezu(item)" :class="{'choosezu-one':true,'choosezu-one-cur':item.choosed}">
					<view class="choose-top">{{item.title}}</view>
					<view class="choose-bot">{{item.price}}</view>
				</view>
			</view>
		</view>
		<view class="addcar-button" @click="$refs.popup1.open()">
				<image class="add-but" src="../../static/images/inputorder2/tianjia.png"></image>
				<view class="addcarin-text">添加车辆 /保险人员</view>
		</view>
		<view class="addcar-one" v-for="(item,index) in 3" :key="index">
				<view class="number">{{index+1}}</view>
				<view class="addcar-one-cont">
					<view class="car-card">
						<view class="card-text">豫N 928373</view>
						<image class="card-modify" src="../../static/images/inputorder2/xiepinglun.png"></image>
					</view>
					<view class="car-man">
						<text v-for="(item,index) in 5" class="man-one" :key="index">周杰伦</text>
						<text class="man-one"></text><text class="man-one"></text><text class="man-one"></text>
					</view>
				</view>
		</view>
		<view class="step-bottom" @click="stepclick">下一步</view>
		
		<uni-popup ref="popup1" type="bottom">
			<view class="add-man-k"><self-inputorder2-addcar @close="close1" /></view>
		</uni-popup>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			zuItems:[{
				title:'专业组',
				price:'299元',
				choosed:true
			},{
				title:'量产组',
				price:'166元',
				choosed:false
			},{
				title:'巾帼组',
				price:'888元',
				choosed:false
			},{
				title:'业余组',
				price:'388元',
				choosed:false
			}]
		};
	},
	methods: {
		choosezu(e){
			this.zuItems.map(r=>{
				r.choosed=false;
				return r;
			})
			e.choosed=true
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
.inputorder2-2 {
	.choosezu-bg{
		.choosezu-title{
			font-size: 28rpx;
			color: #797979;
			padding:50rpx 0 26rpx;
		}
		.choosezu-cont{
			display: flex;
			justify-content:space-between;
			flex-wrap: wrap;
			.choosezu-one{
				padding:30rpx 0;
				width:262rpx;
				height: 76rpx;
				text-align: center;
				border: 1px solid #D1D1D1;
				border-radius: 6rpx;
				margin-bottom: 12rpx;
				color: #808080;
				line-height: 36rpx;
				font-size: 28rpx;
				.choose-bot{
					font-size: 24rpx;
				}
			}
			.choosezu-one-cur{
				color: #FF7D13;
				border: 1px solid #FF7D13;
			}
		}
	}
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
	.addcar-button{
		height: 250rpx;
		width:562rpx;
		margin:60rpx auto;
		background:url(../../static/images/inputorder2/cheliang.png) no-repeat center center;
		background-size: 562rpx 250rpx;
		.add-but{
			width:72rpx;
			height: 72rpx;
			margin:40rpx 0 0 300rpx;
		}
		.addcarin-text{
			font-size: 24rpx;
			line-height: 50rpx;
			padding-left: 232rpx;
			color: #FFFFFF;
		}
	}
	.addcar-one{
		height: 250rpx;
		width:562rpx;
		margin:60rpx auto;
		background:url(../../static/images/inputorder2/qiche.png) no-repeat center center;
		background-size: 562rpx 250rpx;
		display: flex;
		align-items: center;
		.number{
			width:66rpx;
			height: 66rpx;
			background: #D9D9D9;
			border-radius: 50%;
			text-align: center;
			line-height: 66rpx;
			font-size: 44rpx;
			color: #fff;
			margin-left: 120rpx;
			margin-right: 20rpx;
		}
		.addcar-one-cont{
			width:250rpx;
			font-size: 24rpx;
			color: #939393;
			line-height: 32rpx;
			.car-card{
				font-size: 36rpx;
				color: #313131;
				display: flex;
				align-items: center;
				height: 48rpx;
				.card-text{
					width:240rpx;
				}
				.card-modify{
					width:24rpx;
					height: 24rpx;
				}
			}
			.car-man{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				flex-direction: row;
				.man-one{
					height: 32rpx;
					min-width: 48rpx;
				}
			}
		}
	}
}
</style>
