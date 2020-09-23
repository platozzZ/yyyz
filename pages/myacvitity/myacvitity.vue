<template>
	<view>
		<selfmyacvitity :scrollTop="scrollTop" ref="selfmyacvitity"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0,
			};
		},
		onLoad(e) {
			
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
		onReady() {
			this.$refs.selfmyacvitity.getmyActivity() 
		},
		methods:{
			onReachBottom(){
				this.$refs.selfmyacvitity.gobottom();
			},
			onPageScroll({scrollTop}) {
				this.scrollTop = scrollTop;
			},
		}
	}
</script>

<style lang="scss">

</style>
