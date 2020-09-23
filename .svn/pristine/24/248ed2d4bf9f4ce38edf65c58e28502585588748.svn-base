<template>
	<view class="signlist_match">
		<view class="tit">{{match_name}}</view>
		<ms-tabs class="tabblock" itemColor="#E43C3C" lineColor="#E43C3C" :list="tabList" v-model="tabActiveIdx" />
		<view class="signlist_match_in">
			<view class="listone" v-for="(item,index) in listItems" :key="index">
				<view class="indexbg">{{index+1}}</view>
				<esay-loadimage class="userpic" :imgheight="100" :scroll-top="scrollTop" :open-transition="true" :image-src="item.avatar||'../../static/images/default_photo.png'" mode="aspectFill"></esay-loadimage>
				<view class="usercont">
					<view class="username">{{item.racername}}<text class="blue">{{item.carnum}}</text></view>
					<view class="usergroup elp1">{{item.club||"-"}}</view>
				</view>
			</view>
			<uni-load-more :status="moretype" iconType="snow"></uni-load-more>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				match_name:'',
				tabList:[],
				tabListold:[],
				tabActiveIdx:0,
				mid:'',
				listItems:[],
				moretype:'more',
				scrollTop:0,
				page:1,
				rows:20,
				group_id:''
			};
		},
		watch:{
			tabActiveIdx() {
					this.group_id = this.tabListold[this.tabActiveIdx].groupid
					this.page=1;
					this.listItems=[];
					this.getindex()
			}
		},
		methods:{ 
			onReachBottom(){
				if(this.moretype!='noMore'){
					this.getindex();
				}
			},
			async getindex(){//得到报名列表
				let {page, rows, mid, group_id} = this;
				this.moretype = 'loading';
				try {
					var data = {page:page,rows:rows,mid:mid,group_id:group_id}
				  let response = await this.$http.post('/match/racerList',data,'',false);
				  if (response.rspInfo.rspCode == 1000) {
						this.listItems=this.listItems.concat(response.rspData.list.entryinfo);
						if(page*rows<response.rspData.count){
							this.moretype = 'more';
						}else{
							this.moretype = 'noMore';
						}
						this.page = this.page+1;
						var newgroup = response.rspData.list.group.map(r=>{
							var data = {title:r.name}
							return data;
						})
						this.tabList = newgroup;
						this.tabListold = response.rspData.list.group;
						this.match_name=response.rspData.list.match_name
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
