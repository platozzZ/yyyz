<template>
	<view class="order">
		<ms-tabs itemColor="#E43C3C" lineColor="#E43C3C" :list="tabList" v-model="tabActiveIdx" />
		
		<!-- <swiper style="min-height: 100vh;" :current="tabActiveIdx" @change="swiperTab">
			<swiper-item>
				
			</swiper-item>
			<swiper-item>
				222
			</swiper-item>
		</swiper> -->
		
		<view class="list-bg">
			<view class="list-one" v-for="(item,index) in listItems" :key="index">
				<view class="list-top" :data-orderid="item.l_orderid" @click="godetail">
					<view class="list-title elp1">{{item.l_matchname}}</view>
					<view class="list-status" v-if="item.l_orderstatus==10">{{getstatus(item.l_orderstatus)}}</view>
					<view class="list-status list-status20" v-if="item.l_orderstatus==20">{{getstatus(item.l_orderstatus)}}</view>
					<view class="list-status list-status30" v-if="item.l_orderstatus==30">{{getstatus(item.l_orderstatus)}}</view>
				</view>
				<view class="list-cont" :data-orderid="item.l_orderid" @click="godetail">
					<esay-loadimage class="list-image" :imgheight="150" :scroll-top="scrollTop" :open-transition="true" :image-src="item.logo" mode="aspectFill"></esay-loadimage>
					<view class="list-cont-in">
						<view class="in-people-num">报名人数：{{item.l_count}}人</view>
						<view class="in-time">活动时间：{{item.starttime}}  至  {{item.endtime}}</view>
						<view class="in-price">¥ {{item.l_charge}}</view>
					</view>
				</view>
				<view class="list-bo">
					<view class="button" v-if="item.l_orderstatus==10" :data-orderid="item.l_orderid" @click="cancelor">取消</view>
					<view class="button button-red" v-if="item.l_orderstatus==10" :data-orderid="item.l_orderid" @click="gopay">去支付</view>
				</view>
			</view>
			<uni-load-more :status="moretype" iconType="snow"></uni-load-more>
		</view>
		<x-modal v-model="show" title='提示' text='你确定要取消订单？' @confirm='confirm'/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cancelid:'',
				statustext:[{
					status:10,
					text:'未支付'
				},{
					status:20,
					text:'支付完成'
				},{
					status:30,
					text:'已取消'
				}],
				show:false,
				moretype:'more',
				scrollTop:0,
				typeItems:[1,2,3,4],
				listItems:[],
				tabList:[{
					title:'全部'
				},{
					title:'待支付'
				},{
					title:'已支付'
				},{
					title:'已取消'
				}],
				tabActiveIdx:0,
				page:1,
				rows:10
			};
		},
		watch:{
			tabActiveIdx() {
					this.page=1;
					this.listItems=[];
					this.getindex()
			}
		},
		onLoad(e) {
			var loginRes = this.checkLogin('../order/order', '2');
			if(!loginRes){return false;}
			if(e.channel=="cmmc"){
				uni.setStorage({
				    key: 'comephone',  
				    data: e.phone
				});  
				uni.setStorage({
				    key: 'channel',  
				    data: e.channel
				}); 
			}
			
		},
		onShow(e) {
			this.listItems=[];
			this.page = 1;
			this.getindex();
		},
		methods:{
			cancelor(e){
				this.show=true;
				this.cancelid = e.currentTarget.dataset.orderid;
			},
			async confirm(){
				try {
					var data = {orderid:this.cancelid}
				  let response = await this.$http.post('/order/cancel',data);
				  if (response.rspInfo.rspCode == 1000) {
						uni.showToast({
						    title: '取消成功',
						    duration: 2000
						});
						this.page=1;
						this.listItems=[]
						this.getindex()
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
			getstatus(e){
				var data = this.statustext.filter(r=>r.status==e)
				return data[0].text
			},
			onPageScroll({scrollTop}) {
				this.scrollTop = scrollTop;
			},
			godetail(e){
				console.log(e)
				uni.navigateTo({
					url:'../orderdetail1/orderdetail1?id='+e.currentTarget.dataset.orderid
				})
			},
			gopay(e){
				uni.navigateTo({
					url:'../topay/topay?id='+e.target.dataset.orderid
				})
			},
			onReachBottom(){
				if(this.moretype!='noMore'){
					this.getindex();
				}
			},
			async getindex(){//得到活动列表
				let {page, rows, tabActiveIdx, typeItems} = this;
				var type = typeItems[tabActiveIdx];
				this.moretype = 'loading';
				try {
					var data = {page:page,rows:rows,type:type}
				  let response = await this.$http.post('/order/getAllByUser',data,'',false);
				  if (response.rspInfo.rspCode == 1000) {
						this.listItems=this.listItems.concat(response.rspData.list);
						if(page*rows<response.rspData.count){
							this.moretype = 'more';
						}else{
							this.moretype = 'noMore';
						}
						this.page = this.page+1;
				  }else{
						this.moretype = 'more';
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
