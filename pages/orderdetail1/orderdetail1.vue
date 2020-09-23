<template>
	<view class="orderdetail1">
		<view class="top-bg">
			<view class="status" v-if="orderdetail.l_orderstatus==10">{{getstatus(orderdetail.l_orderstatus)}}</view>
			<view class="status status20" v-if="orderdetail.l_orderstatus==20">{{getstatus(orderdetail.l_orderstatus)}}</view>
			<view class="status status30" v-if="orderdetail.l_orderstatus==30">{{getstatus(orderdetail.l_orderstatus)}}</view>
			<view class="top-bg-in">
				<image class="top-img" :src="orderdetail.logo" mode=""></image>
				<view class="matchinfo">
					<view class="title">{{orderdetail.l_matchname}}</view>
					<view class="info-cont">
						活动时间：<text class="text">{{orderdetail.y_starttime}} - {{orderdetail.y_endtime}}</text>
					</view>
					<view class="info-cont">
						活动地点：<text class="text">{{orderdetail.city}}</text>
					</view>
					<view class="info-cont">
						订单总额：<text class="text red">¥ {{orderdetail.l_charge}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="cont">
			<view class="cont-list"><text class="label">数量：</text><text class="text">{{orderdetail.l_count}}</text></view>
			<view class="cont-list"><text class="label">备注：</text><text class="text">{{orderdetail.l_extra}}</text></view>
			<view class="cont-list"><text class="label">联系人姓名：</text><text class="text">{{orderdetail.l_name}}</text></view>
			<view class="cont-list"><text class="label">联系人电话：</text><text class="text">{{orderdetail.l_mobile}}</text></view>
		</view>
		<view class="line"></view>
		<view class="otherinfo">
			<view class="other-title">其他信息</view>
			<view class="other-one">订单编号：<text>{{orderdetail.l_orderid}}</text></view>
			<view class="other-one">下单时间：<text>{{orderdetail.l_ordertime}}</text></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statustext:[{
					status:10,
					text:'未支付'
				},{
					status:20,
					text:'支付成功'
				},{
					status:30,
					text:'已取消'
				}],
				orderid:'',
				orderdetail:''
			};
		},
		onLoad(e) {
			this.orderid=e.id;
			this.orderInfo()
		},
		methods:{
			getstatus(e){
				var data = this.statustext.filter(r=>r.status==e)
				return data[0].text
			},
			async orderInfo(){//得到赛事活动详情
				var data = {order_id:this.orderid}
				try {
				  let response = await this.$http.post('/order/memberActivityDetail',data);
				  if (response.rspInfo.rspCode == 1000) {
						this.orderdetail = response.rspData;
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
	}
</script>

<style lang="scss">
@import "@/common/style/style.scss";
</style>
