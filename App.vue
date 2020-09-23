<script>
export default {
	onLaunch: function(e) {
		if(e.query.channel=="cmmc"){
			wx.hideTabBar();
			uni.setStorage({
			    key: 'channel',  
			    data: e.query.channel
			}); 
		}
		if(e.query.channel=="phone"){
			uni.setStorage({
			    key: 'comephone',  
			    data: e.query.phone
			});  
		}
	},
	onShow: function() {
		
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
body{
	background-color: #f3f3f3;
}
/* #ifdef H5 */
    uni-page-head {
        display: none;
    }
/* #endif */
</style>
