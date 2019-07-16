$(document).ready(function(){
	var arr=[
		{
			why:'系统提示',
			txt:'尊敬的用户您好！您的商务合作申请不通过！原因是：........',
			time:'2019年4月1日 &nbsp;&nbsp;12:13',			
		},
		{
			why:'系统提示',
			txt:'尊敬的用户xxx商家回复了你的评价！ <span>点击查看详情</span>',
			time:'2019年4月1日 &nbsp;&nbsp;12:13',			
		},
	]
	arr.map(function(even,key){
		if(key==0){
			$('.beijing .Tips').append(`<div class="content" >
										<a class='yuan'></a>
										<b>`+even.why+`</b>
										<p>`+even.txt+`</p>
									</div>
									<p>`+even.time+`</p>`)
		}else{
			$('.beijing .Tips').append(`<div class="content" >
										<a></a>
										<b>`+even.why+`</b>
										<p>`+even.txt+`</p>
									</div>
									<p>`+even.time+`</p>`)
		}
		
	})
	$('.beijing .Tips .content').click(function(){
		$(this).children('a').remove();
	})
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
})