


const checkphone =(phonenum) => {
	if(!phonenum){
		uni.showToast({
		    title: '手机号不能为空',
				icon:'none',
		    duration: 2000
		});
		return false
	}else if(!RegExp(/^1[34578]\d{9}$/).test(phonenum)){
		uni.showToast({
		    title: '手机号格式不正确',
				icon:'none',
		    duration: 2000
		});
		return false
	}else{
		return true
	}
}

const checknull =(data,showtext) => {
	if(!data){
		uni.showToast({
		    title: showtext || '不能为空',
				icon:'none',
		    duration: 2000
		});
		return false
	}else{
		return true
	}
}

const getstatus = (statusnum) =>{
	var data = [{
		status:10,
		text:'活动未开始'
	},{
		status:20,
		text:'报名进行中'
	},{
		status:30,
		text:'截止报名'
	},{
		status:40,
		text:'活动进行中'
	},{
		status:50,
		text:'活动结束'
	},{
		status:60,
		text:'活动取消'
	}]
	var text = data.filter(r=>r.status==statusnum);
	return text[0].text;
}

module.exports = {
    checkphone: checkphone,
		checknull: checknull,
		getstatus:getstatus
};