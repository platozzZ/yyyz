<template>
	<view>
		<view class="pop-content">
			<view class="pop-fixed">
				<view class="pop-top">
					<text class="cancel" @click="close()">取消</text>
					<view class="pop-title">
						选择要报名的人员
						<text>（已选1人）</text>
					</view>
					<text class="define" @click="close">确定</text>
				</view>
				<view class="line"></view>
				<view class="cont-title">
					<view class="contact-title">联系人列表</view>
					<view class="add-contact" @click="TocontactAdd()">
						+
						添加联系人
					</view>
				</view>
			</view>
			<view class="content-cont">
				<scroll-view class="trys" scroll-y>
				<view class="cont">
					<view class="cont-one" v-for="(item,index) in 10" :key="index">
						<view class="checkbox-bg">
							<checkbox class="checkbox" value="cb" checked="true" />
						</view>
						<view class="info-bg">
							<view class="name">
								周杰伦{{index}}
								<text>本人</text>
							</view>
							<view class="idcard">身份证：127273272666546789</view>
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
				url:'../../pages/addman/addman'
			})
		}
	}
};
</script>

<style lang="scss">
	
	
		.pop-content {
			height: 80vh;
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
				font-size: 30rpx;
				color: #333;
				display: flex;
				justify-content: space-between;
				.add-contact {
					font-size: 30rpx;
					color: #1c99ff;
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
					.info-bg {
						flex: 1;
						.name {
							color: #333;
							font-size: 30rpx;
							line-height: 48rpx;
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
