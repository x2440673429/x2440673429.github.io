$(document).ready(function () {
	var arr=[
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
		{
			img:'img/txaa.png',
			name:'保温杯',
			mach:'元宝：10000',
		},
	]
	arr.map(function(even){
		$('.product').append(`<div class="Goods">
								<img src="`+even.img+`"/>
								<b>`+even.name+`</b>
								<a>`+even.mach+`</a>
							</div>`)
	})
	
	var arr1=[
		{
			heji:88888,
			shil:1,
			yuanb:'160000',
		},
	]
	
	arr1.map(function(even1){
		$(".beijing .that").append(`<div class="befor">
					<img src="img/txaa.png"/>
					<div class="nerb">
						<b>可爱充电宝</b>
						<a>合计：<span>`+even1.heji+`元宝</span></a>
						<span class="baojing">元宝不足！</span>
					</div>
				</div>
				<div class="next">
					<b>兑换数量：</b><a class="plus"  >+</a><span>`+even1.shil+`</span><a class="reduce">-</a>
				</div>
				<div class="next">
					<b>我的元宝：</b><em>`+even1.yuanb+`</em>
				</div>
				<div class="bom">确认兑换</div>
				<p>温馨提示：礼品为免费赠送且数量有限，逾期兑换礼品将失效，所耗元宝无法退还，请您在兑换有限期内凭此记录至万宝广场客服台进行礼品兑换，感谢支持！</p>`)
	
	

	
		$('.beijing .that .next .reduce').click(function(){
			var add = Number($(this).siblings('span').text());
			console.log(88,add)
			if(add>1){
				$(this).siblings('span').text(add-1)
				$('.nerb>a>span').text((add-1)*88888+'元宝')
			}
		})
		
		
		$('.beijing .that .next .plus').click(function(){
			var add = Number($(this).siblings('span').text());
			console.log(88,add)
			if(add<99){
				$(this).siblings('span').text(add+1);
				$('.nerb>a>span').text((add+1)*88888+'元宝')
			
			}
		})
		
		
		$('.bom').click(function(){
			var add = Number($('.plus').siblings('span').text())*88888;
			console.log(121221,add)
			if(add>160000){
				
				$('.baojing').show()
			}else{
				$('.baojing').hide()
			}
			
		})
		
	
	
	
	
	
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('.activity a').click(function(){
		$(this).text(666).css({border:'none',textAlign:'left',fontSize:'0.32rem',marginTop:'0.23rem'})
	})
	$('.activity b'||'.activity img').click(function(){
		$('.beijing1').show()
	})
	$('.beijing1 img').click(function(){
		$(".beijing1").hide(); 
	})
	$('.product .Goods').click(function(){
		$('.beijing').show();
	})
	$('.beijing .cuo').click(function(){
		$('.beijing').hide()
	})
	

})