$(document).ready(function(){
	var arr=[
		{
			name:'万宝乐',
			iphone:'12346579877',
			dizhi:'福建省龙岩市XXXXXXX区XXXXX路XXXX号XX',
			city:'福建省龙岩市',
			act:false
		},
		{
			name:'万宝乐',
			iphone:'12346579877',
			dizhi:'福建省龙岩市XXXXXXX区XXXXX路XXXX号XX',
			city:'福建省厦门市',
			act:true
		},
		{
			name:'万宝乐',
			iphone:'12346579877',
			dizhi:'福建省龙岩市XXXXXXX区XXXXX路XXXX号XX',
			city:'福建省福州市',
			act:false
		},
	]
	arr.map(function(key,index){
		if(index==0){
				$('.address').append(`<div class="add1">
							<div class='xuanzhong'>
								<a class="yuan1"><img src="img/dui.png"/ class='im'></a>
							</div>
							<div class="one">
								<div class="shezhi">
									<p class="name">`+key.name+`<span>`+key.iphone+`</span></p>
									<p class="dizhi">`+ifact(key.act)+key.dizhi+`</p>
								</div>
								<a class="edit" data-item=`+JSON.stringify(key)+`>编辑</a>
							</div>
						</div>`)
		}else{
			$('.address').append(`<div class="add1">
						<div class='xuanzhong'>
							<a class="yuan"><img src="img/dui.png"/ class='im'></a>
						</div>
						<div class="one">
							<div class="shezhi">
								<p class="name">`+key.name+`<span>`+key.iphone+`</span></p>
								<p class="dizhi">`+ifact(key.act)+key.dizhi+`</p>
							</div>
							<a class="edit" data-item=`+JSON.stringify(key)+`>编辑</a>
						</div>
					</div>`)
		}
	
	})
	
	function ifact(act){
		if(act){
			return '<b>默认</b>'
		}else{
			return '';
		}
		
	}
	$('.address .one .edit').click(function(){
		var ast=$(this).attr('data-item')
		console.log(ast)
		window.location='address.html?param='+ast
	})
	
	
	$('.address .add1 .xuanzhong a').click(function(){
		//这一句是为了把全部的a标签变成未选中状态 样式为yuan
		$('.address .add1 .xuanzhong a').removeClass('yuan1').addClass('yuan');
		//让当前a标签变为选中状态样式为yuan1
		$(this).addClass('yuan1').removeClass('yuan')
		
	})
	$('.top a').click(function(){
		window.location='xinxi.html'
	})
	$('.xinzeng').click(function(){
		window.location='address.html'
	})
	
	
	
})