$(document).ready(function(){
	var arr=[
		
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
			
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
			
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
			
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
			guanz:'true',
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
		
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
		
		},
		{
			name:'万宝乐广场',
			img:'img/tuoyuan.png',
			fensi:'10.5万粉丝',
			
		},
	]
		
	arr.map(function(even){
	
	$('.beijing').append(`<div class="zuji">
						<img src="`+even.img+`" />
						<div class="fensi">
							<a>`+even.name+`</a>
							<p>`+even.fensi+`</p>
						</div>
						<div class="in">
							<a>关注</a>
						</div>
						</div>
						`)
			})
			
		
	$('.zuji .in').click(function(){
		console.log(111)
		var crr=$(this).children('a').text();
		console.log($(this).children('a').text())
		if(crr=='关注'){
			$(this).addClass('yiguanz')
			$(this).children('a').text('已关注')
			console.log(this)
		}else{
			$(this).removeClass('yiguanz')
			$(this).children('a').text('关注')
		}
		
	})
	$('.beijing .top span').click(function(){
		window.history.go(-1);
	})
})