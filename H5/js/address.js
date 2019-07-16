$(document).ready(function(){
	
	
	var obj = JSON.parse(getUrlParam('param'))
	console.log(obj);
	$('.name').val(obj.name)
	console.log(obj.name);
	$('.phone').val(obj.iphone)
	$('.city').text(obj.city)
	$('.address').val(obj.dizhi)
	
	if(obj.act){
		$('.shezhi .man p .guan').hide();
		$('.shezhi .man p .kai').show();
	}else{
		$('.shezhi .man p .kai').hide();
		$('.shezhi .man p .guan').show();
	}
	$('.shezhi .man p img').click(function(){
		var arr= $(this).attr('class');
		console.log(arr)
		if(arr=='kai'){
			$(this).hide();
			$('.shezhi .man p .guan').show();
		}else{
			$('.shezhi .man p .guan').hide();
			$('.shezhi .man p .kai').show();
		}
	})
	$('.top a').click(function(){
		window.history.go(-1)
	});
	$('.queding').click(function(){
		window.location='Receiving.html'
	});
})



//获取地址拦参数
function getUrlParam(name){
    // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}