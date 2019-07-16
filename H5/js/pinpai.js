	
$(document).ready(function(){
	var arr=[
		{
			img:'img/huaz2@2x.png',
			name:'洁面',
		},
		{
			img:'img/huaz2@2x.png',
			name:'奶粉',
		},
		{
			img:'img/huaz2@2x.png',
			name:'纸尿裤',
		},
		{
			img:'img/huaz2@2x.png',
			name:'产后修复',
		},
		{
			img:'img/huaz2@2x.png',
			name:'孕妇彩妆',
		},
		{
			img:'img/huaz2@2x.png',
			name:'孕妇护肤',
		},
	]
	arr.map(function(old){
		$('.right').append(`<div class="chanpin">
								<img src="`+old.img+`"/>
								<a>`+old.name+`</a>
							</div>`)
	})
	$('.left a').click(function(){
		$(this).addClass('dianji').siblings().removeClass('dianji')
	})
		
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
	$('.beijing .top input').click(function(){
		window.location='sousuo.html'
	})
})