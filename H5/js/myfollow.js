$(document).ready(function () {
	var arr=[
		{
			img:'img/tuoyuan.png',
			name:'万宝乐广场',
			mach:'10.5万粉丝',
		},
		{
			img:'img/tuoyuan.png',
			name:'万宝乐广场',
			mach:'10.5万粉丝',
		},
		{
			img:'img/tuoyuan.png',
			name:'万宝乐广场',
			mach:'10.5万粉丝',
		},
	]
	arr.map(function(key,index){
		$('.beijing').append(`<div class="who">
				<img src="${key.img}" class="photo"/>
				<div class="neirong">
					<p>${key.name}</p>
					<a>${key.mach}</a>
				</div>
				<div class="gz">关注</div>
				<div class="ygz">已关注</div>
			</div>`)
	})
	$('.beijing .who .gz,.beijing .who .ygz').click(function(){
		var crr=$(this).text();
		console.log(crr)
		if(crr=='关注'){
			$(this).hide();
			$(this).siblings('.ygz').show();
		}else{
			$(this).hide();
			$(this).siblings('.gz').show();
		}
	})
	$('.beijing .top a').click(function(){
		window.history.go(-1);
	})
})