$(document).ready(function(){
	var arr=[
		{
			img:'img/huaz2@2x.png',
			text:'2019春夏新款仙女宽松网纱长袖雪纺衬衫雪纺衬衫…',
			mach:'￥223',
		},
		{
			img:'img/huaz2@2x.png',
			text:'2019春夏新款仙女宽松网纱长袖雪纺衬衫雪纺衬衫…',
			mach:'￥223',
		},
	]
	arr.map(function(old){
		$('.beijing').append(`<div class="neirong">
								<img src="`+old.img+`"/ class="photo">
								<div class="js"> 
									<p>`+old.text+`</p>
									<a>`+old.mach+`</a>
									<img src="img/s-icon@2x.png"/>
								</div>
							</div>`)
	})
	
	$('.beijing .dt').click(function(){
		
		$(this).addClass('color').siblings().removeClass('color');
	})
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
	
})