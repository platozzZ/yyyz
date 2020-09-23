<template>
	<view class="inputorder2">
		<image class="top-img" src="../../static/images/del/inputorder2bg.png" mode=""></image>
		<view class="cont">
			<view class="steps-bg">
				<view  v-for="(item,index) in stepItems" :key="index"  :class="{'stepone':true,'steponecur':index==current}">
					<view class="stepone-top">
						{{index+1}}
						<image v-if="index<current" class="right" src="../../static/images/right.png" mode=""></image>
					</view>
					<view class="stepone-text">{{item.name}}</view>
				</view>
			</view>
			<!-- <self-inputorder2-2-man @steptap="steptap" v-if="current==1"></self-inputorder2-2-man> -->
			<!-- <self-inputorder2-1 @steptap="steptap" v-if="current==0"></self-inputorder2-1> -->
			<self-inputorder2-2 @steptap="steptap" v-if="current==0"></self-inputorder2-2>
			<self-inputorder2-3 @steptap="steptap" v-if="current==2"></self-inputorder2-3>
			<view class="input4" @steptap="steptap" v-if="current==3">
				<view class="introduce-bg">
					<view class="intro-one">
						请仔细核对相关数据。
						<text class="huang">付款后，无法退款和修改。</text> 
					</view>
				</view>
				<view class="listone" v-for="(item, index) in 3" :key="index">
					<view class="price">单价 ¥80</view>
					<view class="one-cont">
						<view class="one-cont-top">100</view>
						<view class="one-cont-middle">
							<view class="middle-text">保险</view>
							<image class="middle-modify" src="../../static/images/right.png" mode=""></image>
						</view>
						<view class="bottom-click">（点修改礼包数量）</view>
					</view>
					<view class="allprice">总计 ¥15000</view>
				</view>
				<view class="zongprice">
					<view class="zongin">
						<view class="price-icon">合计：¥</view>
						<view class="num">82700</view>
					</view>
				</view>
				<view class="duty-bg">
					<view class="duty-title">免责声明:（点击下面提交按钮将代表同意下方声明）</view>
					<view class="duty-cont">
						<image class="duty-icon" src="../../static/images/inputorder2/chenggong@2x.png" mode=""></image>
						<view class="contin">本人已阅读越野e族《2019阿拉善英雄会免责协议》并自愿参加越野e族英雄会，对本人或将有较大的 人身财产第三方赔偿等风险非常清楚并认可</view>
					</view>
				</view>
				<view class="step-bottom">
					<view class="sub-left">
						<view class="left-num">¥ 892000</view>
						<view class="left-but">明细 ></view>
					</view>
					<view class="sub-but">
						<view class="sub-text">立即支付</view>
						<view class="sub-exrt">支付成功后，不能退款</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mid:'',
			current:0,
			stepItems:[{ 
				name:'添加领队',
			},{
				name:'添加车辆',
			},{
				name:'选择礼包',
			},{
				name:'支付付款',
			}]
		};
	},
	onLoad(e) {
		this.mid = e.mid;
		this.orderInfo()
	},
	methods: {
		steptap(e){
			console.log(e)
			this.current = e;
		},
		async orderInfo(){//得到活动详情
			var data = {mid:this.mid}
			try {
			  let response = await this.$http.post('/order/create',data);
			  if (response.rspInfo.rspCode == 1000) {
					
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
	}
};
</script>

<style lang="scss">
@import '@/common/style/style.scss';
</style>
