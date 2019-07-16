$(document).ready(function () {
	var arr=[
		{
			company:'龙岩市万宝广场',
			name:'林XX',
			position:'运营经理',
			img:'img/man1.png',
		},
			{
			company:'龙岩市万宝广场',
			name:'陈淑玲',
			position:'销售经理',
			img:'img/man1.png',
		},
		
	]
	arr.map(function(even){
		$('.beijing').append(`<div class="Card">
							<div class="Clip"> 
								<a>`+even.company+`</a>
								<b>`+even.name+`</b>
								<a>`+even.position+`</a>
							</div>
							<img src="`+even.img+`"/>
						</div>`)
	})
	$('.beijing .top a').click(function(){
		window.history.go(-1)
	})
	$('.beijing .Card').click(function(){
		window.location='Card.html'
	})
})