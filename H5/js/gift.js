$(document).ready(function(){
	var arr=[
		{
			code:'兑券码：156df455',
			off:'已领取',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
		{
			code:'兑券码：156df455',
			off:'未领取',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
		{
			code:'兑券码：156df455',
			off:'已取消',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
		{
			code:'兑券码：156df455',
			off:'已过期',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
		{
			code:'兑券码：156df455',
			off:'已领取',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
		{
			code:'兑券码：156df455',
			off:'已领取',
			img:'img/txaa.png',
			name:'可爱充电宝',
			yuanbao:'元宝：888888',
			time:'2019-04-22 12:25',
		},
	]
	function yangshi(asd){
		if(asd=='已领取'){
			return `<a class="yilingqu">`+asd+`</a>`
		}else if(asd=='未领取'){
			return `<a class="weilingqu">`+asd+`</a>`
		}else if(asd=='已过期' || asd=='已取消'){
			return `<a class="yiguoqi">`+asd+`</a>`
		}
	}
	arr.map(function(even){
		$('.beijing').append(`<div class="Tips">
									<p class="code">`+even.code+yangshi(even.off)+`</p>类似于这里
									<div class="box">
										<img src="`+even.img+`"/>
										<div class="box1"> 
											<p>`+even.name+`</p>
											<a>`+even.yuanbao+`<span>x1</span></a>
											<p class="time">`+even.time+`</p>
										</div>
									</div>
								</div>`)
						})
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
	$('.beijing1 img').click(function(){
		$(".beijing1").hide(); 
	})
	$('.beijing .duihuan .rule').click(function(){
		$('.beijing1').show();
	})
})