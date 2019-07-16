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
							<a>进入</a>
						</div>
						</div>`)
			})
			$('.beijing .top a').click(function(){
				window.history.go(-1)
			})
})