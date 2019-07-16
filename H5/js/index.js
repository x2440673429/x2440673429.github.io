$(document).ready(function(){
	
	
	
	var arr=[
		{
			img:'img/youyou2x.png',
			text:'今天是周末，拉上三五好朋友 一起来万宝逛街喽',
		},
		{
			img:'img/peo.jpeg',
			text:'今天是周末，拉上三五好朋友 一起来万宝逛街喽',
		},
		{
			img:'img/pee.jpeg',
			text:'今天是周末，拉上三五好朋友 一起来万宝逛街喽',
		},
		{
			img:'img/youyou2x.png',
			text:'今天是周末，拉上三五好朋友 一起来万宝逛街喽',
		},
	]
	arr.map(function(even){
		$('.clear').before(`<div class="guangc"> 
							<div class="ditu">
								<img src="`+even.img+`"/>
								<div class="juli">
									<img src="img/mappin@2x.png" >
									<a>1.2Km</a>
								</div>
							</div>
							<p>`+even.text+`</p>
							<div class="wbgc">
								<a><img src='img/sjtx@2x.png'/></a>
								<P>万宝广场</P>
								<span>1850</span>
								<b><img src="img/xin.png"/></b>
								
							</div>
						</div>`)
	})

	
	
	setTimeout(function(){
		var ji = 0;
		var ou = 0;
		$('.wanbao .guangc').each(function(key,val){
			if(key%2==0){
				console.log('偶数',key)
				ou+=$(this).height()
			}else{
				console.log('基数',key)
				ji+=$(this).height()
			}
				// console.log(this,val,key)
				// console.log($(this).height())
				// he+=$(this).height();
				
				
		})
		console.log(ji,ou)
		if(ji>ou){
			$('.wanbao').height(ji+50)
		}else{
			$('.wanbao').height(ou+50)
		}
	},500)
	//each循环
	
	
	
	
	
	
	$('.beijing .bottom .index').click(function(){
		$(this).addClass('off').siblings().removeClass('off')
	})
	$('.nav .yb').click(function(){
		window.location='pan.html';
	})	
	$('.nav .pp').click(function(){
		window.location='pinpai.html';
	})
	$('.nav .pl').click(function(){
		window.location='play.html';
	})
	
	$('.wanbao .guangc').click(function(){
		
		var url = $(this).find('.ditu>img').attr('src');
			console.log(url)
		window.location='shangjia.html?imgurl='+url
	})
	
})