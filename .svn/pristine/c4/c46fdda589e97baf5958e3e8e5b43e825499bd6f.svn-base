<template>
	<view class="my">
		<view class="my-top">
			<image class="header-pic" :src="headpic?headpic:'../../static/images/default_photo.png'" mode=""></image>
			<view class="my-name">
				<text>{{username}}</text>
			</view>
			<view class="logout" @click="show=true">退出</view>
		</view>
		<ms-tabs class="tabs" itemColor="#E43C3C" lineColor="#E43C3C" :list="tabList" v-model="tabActiveIdx" />
		<view class="tab-cont">
			<view class="tab-concat"  v-show="tabActiveIdx==0">
				<view class="add-concat" @click="goaddman">
					<uni-icons color="#1c99ff" type="plusempty" size="36"></uni-icons>
					<text>新增联系人信息</text>
				</view>
				<view class="concat-one" v-for="(item,index) in listItems" :key="index">
					<view class="infbg">
						<view class="concat-name">
							<text>{{item.name}}</text> 
							<text class="concat-self">本人</text>
						</view>
						<view class="one-label">
							<text>身份证：</text>
							<text class="label-cont">411421199301081214</text>
						</view>
						<view class="one-label">
							<text>手机号码：</text>
							<text class="label-cont">{{item.mobile}}</text>
						</view>
					</view>
					<view class="modifybg">
						<view class="del" @click="delconcat(item.id)">删除</view>
						<view class="modify">编辑</view>
					</view>
				</view>
				<uni-load-more :status="moretype" iconType="snow"></uni-load-more>
			</view>
			
			<view class="my-acti"  v-show="tabActiveIdx==1">
				<selfmyacvitity :scrollTop="scrollTop" ref="selfmyacvitity"/>
			</view>
		</view>
		<x-modal v-model="showconcat" title='提示' text='你确定要删除联系人？' @confirm='confirmconcat'/>
		<x-modal v-model="show" title='提示' text='你确定要退出吗？' @cancel='cancel' @confirm='loginout' @event='event'/>
	</view>
</template> 


<script>
	export default {
		data() {
			return {
				showconcat:false,
				scrollTop:0,
				headpic:uni.getStorageSync("userpic"),
				username:uni.getStorageSync("username"),
				show:false,
				tabList:[{
					title:'联系人'
				},{
					title:'我的活动'
				}],
				tabActiveIdx:0,
				page:1,
				rows:10,
				moretype:'more',
				listItems:[],
			}
		},
		onLoad() {
			var loginRes = this.checkLogin('../my/my', '2');
			if(!loginRes){return false;}
			this.getindex();
		},
		onReady() {
			this.$refs.selfmyacvitity.getmyActivity()
		},
		methods: {
			delconcat(e){
				this.showconcat=true
			},
			confirmconcat(e){
				
			},
			onPageScroll({scrollTop}) {
				this.scrollTop = scrollTop;
			},
			loginout(){
				uni.clearStorageSync()
				uni.reLaunch({
				    url: '../index/index'
				});
			},
			onReachBottom(){
				if(this.tabActiveIdx==1){
					this.$refs.selfmyacvitity.gobottom();
				}else{
					this.getindex();
				}
			},
			async getindex(){//得到联系人列表
				let {page, rows} = this;
				this.moretype = 'loading';
				try {
					var data = {page:page,rows:rows,type:10}
				  let response = await this.$http.post('/order/getRacer',data,'',false);
				  if (response.rspInfo.rspCode == 1000) {
						this.listItems=this.listItems.concat(response.rspData.list);
						console.log(this.listItems)
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
			goaddman(){
				uni.navigateTo({
					url:'../addman/addman'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/style/style.scss";
</style>
