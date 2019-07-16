$(document).ready(function(){
	var arr=[
		{
			img:'img/youyou2x.png',
			text:'今天是周末，拉上三五好朋友一起来万宝逛街还和好朋友逛累了去…',
		},
		{
			img:'img/youyou2x.png',
			text:'看到玩偶就忍不住想把它带回家～满满的安全感,而且还有折扣活',
		},
		
	]
	arr.map(function(even){
		$('.beijing').append(`<div class="who">
							<img src="`+even.img+`" class="photo"/>
							<div class="neirong">
								<p>`+even.text+`</p>
								<img src="img/sjtx@2x.png" class="logo"/>
								<a>万宝广场</a>
								<img src="img/hongxin.png" class="hongxin"/>
							</div>
						</div>`)
	})
	$('.beijing .top a').click(function(){
		
		window.history.go(-1);
	})
})