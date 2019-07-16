$(document).ready(function(){
	$('.bottom .index').click(function(){
		$(this).addClass('off').siblings().removeClass('off')
	})
	$('.beijing .shezhi .kefu').click(function(){
		$('.beijing1').show();
	})
	$('.beijing1 .tanchuang b').click(function(){
		$('.beijing1').fadeOut();
	})
	$('.beijing1 .tanchuang .box .quxiao').click(function(){
		$('.beijing1').fadeOut();
		})
})
function jump(){
	window.location='mywallet.html';
};
function dz(){
	window.location='myGive.html';
};
function gz(){
	window.location='myfollow.html';
};
function sc(){
	window.location='myCollection.html';
};
function go(){
	window.location='xinxi.html';
};
function notice(){
	window.location='notice.html';
};
function goto(){
	window.location='gift.html';
	console.log(11)
};
function apply(){
	window.location='cooperation.html';
	
};
function business(){
	window.location='Business.html';
console.log(11)
}