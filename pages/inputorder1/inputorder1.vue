<template>
    <view class="inputorder1">
			<w-picker
				mode="date" 
				startYear="1900" 
				endYear="2029"
				:current="true"
				value=""
				:inde = 'inde'
				fields="minute"
				@confirm="onConfirm($event,'date')"
				:disabled-after="false"
				ref="date" 
			></w-picker>
        <view class="ord-cont">
            <view class="order1-list">
                <view class="label">活动名称：</view>
                <view class="text">{{matchInfoDatas.name}}</view>
            </view>
            <view class="order1-list">
                <view class="label">活动时间：</view>
                <view class="text">{{matchInfoDatas.starttime}} - {{matchInfoDatas.endtime}}</view>
            </view>
            <view class="order1-list">
                <view class="label">活动价格：</view>
                <view class="text red">¥ {{matchInfoDatas.price}}</view>
            </view>
            <view class="order1-list">
                <view class="label">数量：</view>
                <uni-number-box class="numadd" :min="0" :value="0" @change="changebox" :max="100000"></uni-number-box>
            </view>
            <view class="order1-textarea">
                <view class="textarea-title">备注：</view>
                <textarea class="textarea" @focus="tryss2" @blur="tryss" v-model="beizhu" placeholder="" /> 
            </view>
        </view>
        <view class="concat-title">联系人信息</view>
        <view class="concat-bg">
            
            <view class="concat-list" v-for="(item, index) in userinfo" :key="index">
                <view class="label">{{item.desc}}：</view>
                <input type="text" @focus="tryss2" @blur="tryss" class="concat-input" v-model="item.value" placeholder-class="pla" :placeholder="'请输入'+item.desc" />
            </view>
            <view class="selfinput" v-for="(item,index) in userextra" :key="index">
                <view class="concat-list" v-if="item.type=='text'">
                    <view class="label">{{item.title}}：</view>
                    <input type="text" @focus="tryss2" @blur="tryss" class="concat-input" v-model="item.value" placeholder-class="pla" :placeholder="'请输入'+item.title" />
                </view>
                <view class="concat-list" v-if="item.type=='textarea'">
                    <view class="label">{{item.title}}：</view>
                    <textarea @focus="tryss2" @blur="tryss" class="textarea" v-model="item.value" placeholder-class="pla" :placeholder="'请输入'+item.title" /> 
                </view>
                <view class="concat-list"  v-if="item.type=='radio'">
                    <view class="label">{{item.title}}：</view>
                    <view class="choosed">
                        <radio-group  @change="radiocheck" :data-index="index">
                            <view v-for="(ite,index2) in item.item" :key="index2"><label class="radio"><radio :value="ite.value" />{{ite.name}}</label></view>
                        </radio-group>
                    </view>
                </view>
                <view class="concat-list" v-if="item.type=='checkbox'">
                    <view class="label">{{item.title}}：</view>
                    <view class="choosed">
                        <checkbox-group @change="checkboxcheck" :data-index="index">
                            <view v-for="(ite,index2) in item.item" :key="index2"><label class="checkbox"><checkbox :value="ite.value" />{{ite.name}}</label></view>
                        </checkbox-group>
                    </view>
                </view>
								<view class="concat-list" v-if="item.type=='time'">
								    <view class="label">{{item.title}}：</view>
										<input type="text" class="concat-input" :data-index = 'index' disabled @click="showtime" v-model="item.value" placeholder-class="pla" :placeholder="'请选择'+item.title" />
								</view>
								<view class="concat-list" v-if="item.type=='picload'">
								    <view class="label">{{item.title}}：</view>
								    <view class="choosedimg">
												<!-- <view v-if="poster.length==0" class="add-head-pic inline" @click="uploadpic">
													<image class="imgdefault" src="../../static/images/add-icon.png" mode=""></image>
												</view> -->
												<image class="img-top" :data-index="index" :src="item.value" @click="uploadpic" mode="aspectFill"></image>
										</view>
								</view>
            </view>
        </view>
        <view class="sub-bg iphonex">
            <view class="price-bg">
                <text>总额</text>
                <text class="price">¥{{bugnum*matchInfoDatas.price}}</text>
            </view>
            <view class="sub" @click="addorder">提交订单</view>
        </view>
        <view class="hidden" v-if="bottomshowin"></view>
    </view>
</template>

<script>
	import qiniuUploader from '../../components/qiniuUploader/qiniuUploader.js'
	import md5 from '../../common/md5.js'
    export default {
        data() {
            return {
								inde:'',
                bottomshow:false,
								bottomshowin:false,
                mid:'',
                matchInfoDatas:'',
                bugnum:0,
                beizhu:'',
                userinfo:[],
                userextra:[],
								token:''
            }; 
        },
        onLoad(e) {
            this.mid = e.mid;
            var that = this;
            uni.getSystemInfo({
                success: function (res) {
									if(uni.getStorageSync("channel")&&res.platform=="android"){
											that.bottomshow=true
									}
                }
            });
            this.matchInfo()
        },
        methods:{
					tryss(e){
						if(this.bottomshow){
							this.bottomshowin=false
						}
					},
					tryss2(e){
						if(this.bottomshow){
							this.bottomshowin=true
						}
					},
					showtime(e){
						this.$refs.date.show();
						this.inde = e.target.dataset.index;
					},
					onConfirm(e){
						this.userextra[e.inde].value = e.result
					},
            radiocheck(e){
							this.userextra[e.currentTarget.dataset.index].value=e.detail.value;
            },
            checkboxcheck(e){
                this.userextra[e.currentTarget.dataset.index].value=e.detail.value;
            },
            gotopay(e) {
							if(this.matchInfoDatas.price*this.bugnum==0){
								uni.switchTab({
									url:'../order/order'
								})
							}else{
								uni.navigateTo({
								    url: '../topay/topay?id='+e
								});
							}
                
            },
            changebox(e){
                this.bugnum=e;
            },
						
						uploadpic(e){
							var ind = e.target.dataset.index;
							var that = this;
							uni.chooseImage({
							    count: 1, //默认9
							    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							    sourceType: ['album'], //从相册选择
							    success: function (res) {
										that.getqntoken(res.tempFilePaths[0],md5(Math.random().toString(36).substr(2)),ind)
							    }
							});
						},
						async getqntoken(poster, key, ind){//得到七牛云token
							var that = this;
							try {
							  let response = await this.$http.post('/real/imagetoken',{});
							  if (response.rspInfo.rspCode == 1000) {
									that.token=response.rspData.uptoken;
									that.upload(poster,key,ind)
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
						upload(filePath,keys,ind){
							var that = this;
							qiniuUploader.upload(filePath, (res) => {
								that.userextra[ind].value=`http://rdata-image.fblife.com/${res.key}`
							}, (error) => {
								var a = JSON.stringify(error);
								console.log('error: ' + a);
							}, {
								region: 'NCN',
								domain: 'up-z1.qiniu.com',
								key: keys,
								uptoken: that.token,
							});
						},
						
						
            async addorder(){//提交订单
                let {bugnum, beizhu, userinfo, userextra} = this;
                var checknull1 = this.$until.checknull(bugnum,'请选择数量');
                if(!checknull1){return}
								
								//判断后台设置字段是否为空
								var checkall=true;
								for(var i=0;i<userinfo.length;i++){
									var checkone = this.$until.checknull(userinfo[i].value,userinfo[i].show);
									if(checkone){
										checkall=true
									}else{
										checkall=false
										return;
									}
								}
								if(!checkall){return}
								
								//判断自定义字段是否为空
								var checkall2=true;
								for(var i=0;i<userextra.length;i++){
									if(userextra[i].validate==1){
										var checkone2 = this.$until.checknull(userextra[i].value,userextra[i].show);
										if(userextra[i].type=="picload"&&userextra[i].value=="../../static/images/add-icon.png"){
											this.$until.checknull('',userextra[i].show);
											checkall2=false
											return;
										}
										if(checkone2){
											checkall2=true
										}else{
											checkall2=false
											return;
										}
									}
								}
								if(!checkall2){return}
                var data = {mid:this.mid,count:bugnum,extra:beizhu,userinfo:JSON.stringify(userinfo),from_json:JSON.stringify(userextra)}
                try {
                  let response = await this.$http.post('/order/saveMemberActivity',data);
                  if (response.rspInfo.rspCode == 1000) {
                        this.gotopay(response.rspData.data)
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
            async matchInfo(){//得到赛事活动详情
                var data = {mid:this.mid}
                try {
                  let response = await this.$http.post('/activity/editActivity',data,'',false);
                  if (response.rspInfo.rspCode == 1000) {
                        this.matchInfoDatas = response.rspData;
                        this.userinfo = response.rspData.userinfo.filter(r=>r.checked).map(r =>{
                            var data = {"field":r.field,"desc":r.desc,"value":'',show:r.desc+'不能为空'};
                            return data;
                        });
                        this.userextra = response.rspData.userextra.map(r =>{
                            if(r.type!="picload"){
															var data = {"title":r.title,"type":r.type,"validate":r.validate,"item":r.item,"value":"",show:r.title+'不能为空'};
														}else{
															var data = {"title":r.title,"type":r.type,"validate":r.validate,"item":r.item,"value":"../../static/images/add-icon.png",show:r.title+'不能为空'};
														}
                            return data;
                        })
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
