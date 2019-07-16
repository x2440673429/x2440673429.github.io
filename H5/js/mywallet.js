	
$(document).ready(function(){
	var arr=[
		{
			why:'签到领元宝',
			is:'签到领取元宝到账',
			mach:'+1000',
			time:'02-26 22:30',
			colo:'red',
		},
		{
			why:'提现到账',
			is:'申请提现到账',
			mach:'+1000',
			time:'02-26 22:30',
			color:'green',
		},
		{
			why:'提现到账',
			is:'申请提现到账',
			mach:'+1000',
			time:'02-26 22:30',
			color:'green',
		},
	]
	arr.map(function(key){
		$('.Income').append(`<div class="details">
							<p>`+key.why+`<span style='color:`+key.color+`'>`+key.mach+`</span></p>
							<a>`+key.is+`</a>
							<a class="time">`+key.time+`</a>
						</div>`)
		
	})
	$('.top a').click(function(){
		window.history.go(-1);
	})
})