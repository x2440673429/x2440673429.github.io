$(document).ready(function(){
	
		
	$('.beijing .play .non1').click(function(){
		$('.beijing1').show();
	})
	
	
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
	$('.beijing1 .dazhan1 .close').click(function(){
		$('.beijing1').hide();
	})
})