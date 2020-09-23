<template>
	<view class="signlist">
		<view class="matchinfo">
			<!-- <view class="match-title elp1">阿拉善越野友谊赛</view> -->
			<view class="match-cont">
				<view class="cont-one">报名总人数:<text class="one-info">{{condition.number}}人</text></view>
				<view class="cont-two">报名总费用:<text class="one-info">{{condition.charge}}元</text></view>
			</view>
		</view>
		<view class="listone listone-title">
			<view class="infobg infobg-title">
				<view class="indexnum"></view>
				<view class="name">姓名</view>
				<view class="time">报名时间</view>
				<view class="num">数量</view>
				<view class="see">操作</view>
			</view>
		</view>
		<view class="listone" v-for="(item,index) in listItems" :key="index">
			<view class="infobg">
				<view class="indexnum">{{index+1}}</view>
				<view class="name">{{item.name}}</view>
				<view class="time">{{item.ctime}}</view>
				<view class="num">{{item.count}}</view>
				<view class="see seebutton" @click="seeone(item.detail)">查看</view> 
			</view>
		</view>
		<uni-load-more :status="moretype" iconType="snow"></uni-load-more>
		
		<uni-popup ref="popup2" type="bottom">
			<view class="add-man-k">
				<view class="detailed-pop">
					<!-- <view class="de-title elp1">阿拉善越野友谊赛阿拉善越野友谊赛阿拉善越野友谊赛</view> -->
					<scroll-view class="trys" scroll-y>
						<view class="de-listone" v-for="(item, index) in showdetail" :key="index">
							<view class="label">{{item.title}}:</view>
							<view class="labelcont" v-if="item.type==0">{{item.cont}}</view>
							<image class="labelimg" :src="item.cont" v-else mode=""></image>
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
				showdetail:'',
				mid:'',
				listItems:[],
				moretype:'more',
				scrollTop:0,
				page:1,
				rows:20,
				condition:''
			};
		},
		methods:{
			onReachBottom(){
				if(this.moretype!='noMore'){
					this.getindex();
				}
			},
			seeone(e){
				this.showdetail = e;
				this.$refs.popup2.open()
			},
			async getindex(){//得到报名列表
				let {page, rows, mid} = this;
				this.moretype = 'loading';
				try {
					var data = {page:page,rows:rows,mid:mid}
				  let response = await this.$http.post('/activity/enrolmentList',data,'',false);
				  if (response.rspInfo.rspCode == 1000) {
						this.listItems=this.listItems.concat(response.rspData.list);
						this.condition =response.rspData.condition
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
		},
		onLoad(e) {
			this.mid = e.mid;
			this.getindex()
		}
	}
</script>

<style lang="scss">
@import '@/common/style/style.scss';
</style>
