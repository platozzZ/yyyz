<template>
	<view>
		<view class="pop-content pop-car pop-inputorder2-addcar">
			<view class="addcarbg">
				<scroll-view class="trys" scroll-y>
					<view class="title-bg">
						保险预定
						<image class="close" @click="close" src="../../static/images/inputorder2/close.png" mode=""></image>
					</view>
					<view class="cont-p">1.阿拉善英雄会报名免费。但为安全保障，推荐每位 参与者购买保险。</view>
					<view class="cont-p">2.本表单收集保险预订信息。保险自愿购买，不购买 保险的人员无需在表中填写。</view>
					<view class="cont-p">
						3.表中填写的每人将按照120/人购买保险。xxxx保 险为阿拉善英雄会专业定制承保。
						<text class="orange">[ 保险细则条款 ]</text>
					</view>
					<view class="cont-p">4.大漠壮丽，风险与存。为了安全保障，推荐每个参 加人员填写表单，购买保险。</view>
					<view class="carinfo-bg">
						<view class="car-card-bg">
							<!-- <view class="card-left">京</view> -->
							<picker class="card-left" @change="bindPickerChange" :value="courtryIndex" :range="courtryItem">
								<view class="uni-input">{{courtryItem[courtryIndex]}}</view>
							</picker>
							<input type="text" class="card-input" placeholder="输入车牌号" />
						</view>
						<view class="card-type-bg">
							<view class="card-brand card-brand1">
								<view class="label">品牌：</view>
								<picker class="brand-input" @change="cartypeChange" :value="cartypeIndex" :range="cartype">
									<view class="uni-input elp1">{{cartype[cartypeIndex]}}</view>
								</picker>
							</view>
							<view class="card-brand">
								<view class="label">车型：</view>
								<picker class="brand-input" @change="carChange" :value="carIndex" :range="car">
									<view class="uni-input elp1">{{car[carIndex]}}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="cont-input-bg" v-if="false">
						<view class="inp-bg">
							<view class="input-one">
								<view class="one-title">
									<image class="one-img" src="../../static/images/inputorder2/jiashi.png" mode=""></image>
									<view class="one-titl">驾驶人员</view>
									<view class="one-warning">*身份证与姓名不匹配</view>
								</view>
								<view class="one-input-bg">
									<view class="one-in">
										<view class="label">姓名：</view>
										<input class="one-inpu" type="text" />
									</view>
									<view class="one-in">
										<view class="label">身份证：</view>
										<input class="one-inpu" type="text" placeholder="港澳台/国外友人请现场报名" />
									</view>
									<view class="one-in no-border">
										<view class="label">手机号：</view>
										<input class="one-inpu" type="text" />
									</view>
								</view>
								<image class="close-input" src="../../static/images/inputorder2/guanbi.png" mode=""></image>
							</view>
							<view class="input-one">
								<view class="one-title">
									<image class="one-img" src="../../static/images/inputorder2/chengke.png" mode=""></image>
									<view class="one-titl">乘客1</view>
									<view class="one-warning"></view>
								</view>
								<view class="one-input-bg">
									<view class="one-in">
										<view class="label">姓名：</view>
										<input class="one-inpu" type="text" />
									</view>
									<view class="one-in">
										<view class="label">身份证：</view>
										<input class="one-inpu" type="text" placeholder="港澳台/国外友人请现场报名" />
									</view>
									<view class="one-in no-border">
										<view class="label">手机号：</view>
										<input class="one-inpu" type="text" />
									</view>
								</view>
								<image class="close-input" src="../../static/images/inputorder2/guanbi.png" mode=""></image>
							</view>
						</view>
						<image class="add-button" src="../../static/images/inputorder2/tianjiatongxingrenyuan.png" mode=""></image>
						<view class="sub">确定</view>
					</view>
					
					<view class="cont-input-bg">
						<view class="inp-bg">
							<view class="input-one">
								<view class="one-title">
									<image class="one-img" src="../../static/images/inputorder2/jiashi.png" mode=""></image>
									<view class="one-titl">驾驶人员</view>
									<view class="one-warning">*身份证与姓名不匹配</view>
								</view>
								<view class="one-input-bg">
									<view class="one-in">
										<view class="label">姓名：</view>
										<input class="one-inpu" type="text" />
									</view>
									<view class="one-in">
										<view class="label">身份证：</view>
										<input class="one-inpu" type="text" placeholder="港澳台/国外友人请现场报名" />
									</view>
									<view class="one-in no-border">
										<view class="label">手机号：</view>
										<input class="one-inpu" type="text" />
									</view>
								</view>
							</view>
							<view class="input-one">
								<view class="one-title">
									<image class="one-img" src="../../static/images/inputorder2/chengke.png" mode=""></image>
									<view class="one-titl">乘客1</view>
									<view class="one-warning"></view>
								</view>
								<view class="one-input-bg">
									<view class="one-in">
										<view class="label">姓名：</view>
										<input class="one-inpu" type="text" />
									</view>
									<view class="one-in">
										<view class="label">身份证：</view>
										<input class="one-inpu" type="text" placeholder="港澳台/国外友人请现场报名" />
									</view>
									<view class="one-in no-border">
										<view class="label">手机号：</view>
										<input class="one-inpu" type="text" />
									</view>
								</view>
							</view>
						</view>
						<view class="sub" style="margin-top: 50rpx;">确定</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import {carCx, citys} from '../../common/carCx.js' 
export default {
	data() {
		return {
			carCx,
			courtryItem: citys,
			courtryIndex:0,
			
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
		bindPickerChange: function(e) {
			this.courtryIndex = e.target.value;
		},
		close() {
			this.$emit('close');
		},
		TocontactAdd() {
			uni.navigateTo({
				url: '../../pages/addcar/addcar'
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/common/style/style.scss';
.pop-content {
	height: 100vh;
	/*#ifdef H5*/
	// height: 80vh;
	/*#endif*/
	background: rgba(0, 0, 0, 0.7);
	box-sizing: border-box;
	position: relative;
	z-index: 999;
	padding: 100rpx 35rpx 0;
	.addcarbg {
		height: 100%;
		overflow: auto;
	}
}
	.pop-inputorder2-addcar{
		.addcarbg{
			.title-bg{
				font-size: 36rpx;
				color: #FFFFFF;
				text-align: center;
				line-height:80rpx;
				color:#fff;
				position: relative;
				.close{
					position: absolute;
					right:20rpx;
					top:25rpx;
					width:30rpx;
					height: 30rpx;
				}
			}
			.cont-p{
				padding:0 60rpx;
				color: #fff;
				font-size: 24rpx;
				line-height: 30rpx;
				margin-bottom: 16rpx;
				.orange{
					color:  #FF7A22;
				}
			}
			.carinfo-bg{
				width:644rpx;
				height: 278rpx;
				margin:100rpx auto 0;
				overflow: hidden;
				background:url(../../static/images/inputorder2/whitecar.png) no-repeat center top;
				background-size: 644rpx 278rpx;
				.car-card-bg{
					margin:28rpx 0 14rpx 210rpx;
					border: 1px solid #DEDEDE;
					border-radius: 16rpx;
					width:350rpx;
					height: 80rpx;
					display: flex;
					overflow: hidden;
					.card-left{
						width:150rpx;
						font-size: 32rpx;
						color: #000;
						text-align: center;
						line-height: 80rpx;
						border-right:1px solid #DEDEDE;
					}
					.card-input{
						font-size: 30rpx;
						color: #333;
						height: 80rpx;
						line-height: 80rpx;
						padding:0 20rpx;
					}
				}
				.card-type-bg{
					border: 1px solid #DEDEDE;
					margin-left: 60rpx;
					border-radius: 16rpx;
					width:498rpx;
					height: 80rpx;
					display: flex;
					.card-brand{
						width: 50%;
						display: inline-flex;
						line-height: 80rpx;
						font-size: 30rpx;
						color: #666;
						.label{
							width:110rpx;
							text-align: right;
						}
						.brand-input{
							width:140rpx;
							height: 80rpx;
							line-height: 80rpx;
							font-size: 28rpx;
							color: #777;
							.uni-input{
								width:140rpx;
								height: 80rpx;
							}
						}
					}
					.card-brand1{
						border-right:1px solid #DEDEDE;
					}
				}
			}
			.cont-input-bg{
				background-color: #fff;
				padding:0 40rpx 60rpx;
				margin-top: -6rpx;
				border-radius: 40rpx 40rpx 0 0;
				.input-one{
					padding-top: 54rpx;
					position: relative;
					.close-input{
						width:60rpx;
						height: 60rpx;
						position: absolute;
						right:0;
						top:64rpx;
					}
					.one-title{
						display: flex;
						padding-left:20rpx;
						line-height: 54rpx;
						.one-img{
							width:54rpx;
							height: 54rpx;
						}
						.one-titl{
							font-size: 36rpx;
							color: #282828;
							padding:0 15rpx 0 8rpx;
						}
						.one-warning{
							font-size: 22rpx;
							color: #FF7A22;
						}
					}
					.one-input-bg{
						margin-top: -10rpx;
						border-radius: 30rpx;
						border: 2px solid #F2F2F2;
						.one-in{
							border-bottom: 2px solid #F2F2F2;
							line-height: 90rpx;
							padding:0 32rpx;
							display: flex;
							.label{
								font-size: 28rpx;
								color: #818181;
								width:120rpx;
							}
							.one-inpu{
								height: 90rpx;
								flex:1;
								font-size: 28rpx;
								color: #818181;
							}
						}
						.no-border{
							border: 0;
						}
					}
				}
				.add-button{
					width: 110rpx;
					display: block;
					height: 110rpx;
					margin:70rpx auto 50rpx;
				}
				.sub{
					width:250rpx;
					height: 90rpx;
					display: block;
					text-align: center;
					line-height: 90rpx;
					background: #FF7A22;
					border-radius: 14rpx;
					font-size: 36rpx;
					margin: 0 auto;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
