		$(document).ready(function(){
			// console.log(window.location)
			// console.log(window.location.href)
			var arr = window.location.search.split('=')
			// console.log(arr[1])
			$('.haidilaao').attr('src',arr[1])
			
			
	$('.shangjia .text .quanwen').click(function(){
		var txt=$('.shangjia .text .quanwen a').text();
		if(txt=='展开全文'){
			$(this).children('a').text('收起文字')
			$('.shangjia .text').css({height:'auto',paddingBottom:"1.15rem"})
			$('.shangjia .text .quanwen').css({height:'102%',background:'none'})
			$('.shangjia .text .quanwen img').css('transform','rotate(180deg)')
		}else{
			$('.shangjia .text').css({height:'3.66rem',paddingBottom:"0.15rem"})
			$('.shangjia .text .quanwen').css({height:'100%',background:'linear-gradient(to top,#fff,rgba(255,255,255,0) 95%)'})
			$('.shangjia .text .quanwen img').css('transform','rotate(0deg)')
			$(this).children('a').text('展开全文')
		}
		
	})
	
	$('.beijing .dongtai a').click(function(){
		window.history.go(-1)
	})
	
	$('.shangjia .pinglun .fenxiang').click(function(){
		window.location='dongtai.html';
	})
	$('.txt').click(function(){
		window.location='pinlun.html';
		console.log(111)
	})
	$('.shangjia .top .gz').click(function(){
		$(this).text('已关注').css({border:'0.01rem solid #cccccc',color:'#cccccc'})
	})
})