$(document).ready(function(){
	$('.top a').click(function(){
		window.history.go(-1);
	})
	
	$('.pin .pin_top .xin,.pin .pin_top .hongxin').click(function(){
		var add=$(this).attr('class');
		console.log(add)
		if(add=='xin'){
			$(this).hide();
			$(this).siblings('.hongxin').show();
		}else{
			$(this).hide();
			$(this).siblings('.xin').show();
		}
		

	})
		$('.pin .pinglun .ziji .xin,.pin .pinglun .ziji .hongxin').click(function(){
		var add=$(this).attr('class');
		console.log(add)
		if(add=='xin'){
			$(this).hide();
			$(this).siblings('.hongxin').show();
		}else{
			$(this).hide();
			$(this).siblings('.xin').show();
		}
		})
})