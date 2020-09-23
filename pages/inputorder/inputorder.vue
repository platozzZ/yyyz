<template>
	<view class="inputorder">
		<view class="order-top">
			<image class="imgfl" src="http://rdata-image.fblife.com/public/2044/547112_o_1dpk51om713g7nip1vk8fo0ek6h.jpg" mode=""></image>
			<view class="textfr">
				<view class="match-title eptwo">越野e族“中央公馆杯”山东日照</view>
				<view class="match-time">
					<view class="time">开始时间：2017-07-23</view>
					<view class="man-price">
						<text>¥100</text>
						／人
					</view>
				</view>
			</view>
		</view>

		<view class="club-bg">
			<view class="club-tit">俱乐部名义报名</view>
			<view class="club-change"><switch class="switch" color="#4CD964" @change="switch1Change" /></view>
		</view>

		<view class="choose-man">
			<view class="pub-title">
				选择报名人
				<text>(每单最多100人)</text>
			</view>
			<view class="choose-man-list">
				<view class="man-list">
					<view class="lis-one" v-for="(item, index) in 2" :key="index">
						<uni-swipe-action-item :options="options" @click="onClick" @change="change">
							<view class="mandetail">
								<view class="man-info">
									<view class="man-name">包大鹏</view>
									<view class="man-card">3403938473662728X</view>
								</view>
								<uni-icons color="#939393" type="arrowright" size="32"></uni-icons>
							</view>
						</uni-swipe-action-item>
					</view>
				</view>
			</view>
			<view class="choose-button" @click="open">
				<uni-icons color="#1c99ff" type="plusempty" size="32"></uni-icons>
				请先选择报名人
			</view>
			<view class="choose-button" @click="open1">
				<uni-icons color="#1c99ff" type="plusempty" size="32"></uni-icons>
				添加车辆
			</view>
		</view>

		<view class="line-bg">
			<view class="line"></view>
			<view class="line-text">请确定上述人员信息后再行填写</view>
			<view class="line"></view>
		</view>

		<view class="insure">
			<view class="pub-title">保险</view>
			<view class="insure-list">
				<view class="listone" v-for="(item, index) in 2" :key="index">
					<view class="checkbox-bg"><checkbox class="checkbox" value="cb" checked="true" /></view>
					<view class="eptwo">越野一族提供的比赛意外险高原尊享型（含意外身故险100万）</view>
					<view class="manprice">
						<view class="price">
							<text>¥ 50</text>
							／人
						</view>
						<view class="explain">
							说明
							<uni-icons color="#939393" type="arrowdown" size="26"></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class="state">
				<view class="state-icon"><uni-icons color="#ccc" type="info" size="32"></uni-icons></view>
				<view class="state-text">请您付款前仔细核对报名人的证件信息，否则错误的信息无法订保，不予退款</view>
			</view>
			<view class="more">
				更多保险(5)
				<uni-icons color="#1c99ff" type="arrowdown" size="30"></uni-icons>
			</view>
		</view>

		<view class="pub-info">
			<view class="pub-title">礼包</view>
			<view class="info-detail">
				<view class="text-bg">
					<view class="info-text">共4件商品，英雄会珍藏版T恤1件，英雄来看实际管理局爱国就丽莎姐格劳克斯个上市是</view>
					<view class="info-button"><text>详情</text></view>
				</view>
				<view class="choose-num">
					<uni-number-box :min="0" :value="0" :max="2"></uni-number-box>
					<view class="man-price">
						<text>¥50</text>
						／人
					</view>
				</view>
			</view>
		</view>
		<view class="pub-info">
			<view class="pub-title">门票</view>
			<view class="info-detail">
				<view class="text-bg">
					<view class="info-text">报名门票</view>
					<view class="info-button"><text>详情</text></view>
				</view>
				<view class="choose-num">
					<uni-number-box :min="0" :value="0" :max="9"></uni-number-box>
					<view class="man-price">
						<text>¥666</text>
						／张
					</view>
				</view>
			</view>
		</view>

		<view class="pub-title phone">
			咨询电话
			<text>4000068826</text>
		</view>

		<view class="pub-order">
			<view class="total-bg">
				总额
				<text class="money-icon">¥</text>
				<text class="num">298</text>
			</view>
			<view class="sub-bg">
				<view class="detailed" @click="$refs.popup2.open()">
					明细
					<uni-icons color="#fff" type="arrowdown" size="26"></uni-icons>
				</view>
				<view class="sub" @click="gotopay">提交订单</view>
			</view>
		</view>

		<uni-popup ref="popup" type="bottom">
			<view class="add-man-k"><self-addman @close="close" /></view>
		</uni-popup>

		<uni-popup ref="popup1" type="bottom">
			<view class="add-man-k"><self-addcar @close="close1" /></view>
		</uni-popup>

		<uni-popup ref="popup2" type="bottom">
			<view class="add-man-k">
				<view class="detailed-pop">
					<view class="de-title">费用明细</view>
					<scroll-view class="trys" scroll-y>
						<view class="de-listone" v-for="(item, index) in 3" :key="index">
							<view class="de-listone-t">
								<view class="de-listone-t-l">报名费{{index}}</view>
								<view class="de-listone-price">¥300</view>
							</view>
							<view class="de-cont">
								<view class="de-cont-t">专业组</view>
								<view class="de-cont-price">¥300x0</view>
							</view>
							<view class="de-cont">
								<view class="de-cont-t">车系锦标赛</view>
								<view class="de-cont-price">¥800x0</view>
							</view>
						</view>
						<view class="de-listone">
							<view class="de-listone-t">
								<view class="de-listone-t-l">总额</view>
								<view class="de-listone-price">¥6500</view>
							</view>
						</view>
					</scroll-view>
					<image @click="$refs.popup2.close()" class="de-close" src="../../static/images/layer_close.png" mode=""></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#E43C3C'
					}
				}
			],
			mid:''
		};
	},
	onLoad(e) {
		this.mid = e.mid;
		// this.matchInfo()
	},
	methods: {
		open() {
			this.$refs.popup.open();
		},
		close() {
			this.$refs.popup.close();
		},
		open1() {
			this.$refs.popup1.open();
		},
		close1() {
			this.$refs.popup1.close();
		},
		gotopay() {
			uni.navigateTo({
				url: '../topay/topay'
			});
		},
		async matchInfo(){//得到赛事活动详情
			var data = {mid:this.mid}
			try {
			  let response = await this.$http.post('/order/create',data,'',false);
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
