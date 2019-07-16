$(document).ready(function(){
	
	$(' .top a').click(function(){
		window.history.go(-1)
	})
	$('.tubiao .fenxiang').click(function(){
		$(".beijing").show();
		$('.fangshi').animate({bottom:'0.88rem'},400)
	})
	$('.beijing .no').click(function(){
		$('.beijing').hide();
	})
	$('.beijing .fangshi .box1').click(function(){
		window.location='poster.html';
	})
})