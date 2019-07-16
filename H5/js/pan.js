$(document).ready(function(){
	var arr = [
		{
			img:'img/one3@2x.png',
			name:'YEMAOZI',
			time:'04-01 12:25',
			ner:'16',
			what:true
		},
		{
			img:'img/one3@2x.png',
			name:'YEMAOZI',
			time:'04-01 12:25',
			ner:'16',
			what:false
		},
		{
			img:'img/one3@2x.png',
			name:'YEMAOZI',
			time:'04-01 12:25',
			ner:'16',
			what:false
		},
	];
	var arr1 = [
		{
			img:'img/one3@2x.png',
			name:'齐德龙东强',
			time:'04-01 12:25',
			ner:'16',
			what:true
		},
		{
			img:'img/one3@2x.png',
			name:'齐德龙东强',
			time:'04-01 12:25',
			ner:'16',
			what:false
		},
		{
			img:'img/one3@2x.png',
			name:'齐德龙东强',
			time:'04-01 12:25',
			ner:'16',
			what:false
		},
	]
	//初始化执行
	srlist('我的好友');
	$('.bobys .aft').click(function(){
		$(this).addClass('aftact').siblings().removeClass('aftact');
			var txt = $(this).text();
			srlist(txt)
			
		
	})
	
	//判断时候抢夺的方法
	function pdqd(bol){
		if(bol){
			return 	`<div class="qiang" onclick="qiangyb(this)"><a>抢TA元宝</a></div>`;
		}else{
			return 	`<div class="fu">
				<a>已抢夺</a>
			</div>`
		}
	}
	function pdqd1(bol){
		if(bol){
			return 	`<div class="qiang" onclick="qiangyb1(this)"><a>抢TA元宝</a></div>`;
		}else{
			return 	`<div class="fu">
				<a>已复仇</a>
			</div>`
		}
	}
	
	
	//渲染列表数据
	function  srlist(txt){
		$('.player').empty();
		if(txt=='我的好友'){
			arr.map(function(even,key){
				$('.player').append(`<div class="one">
										<img src="`+even.img+`"/>
										<div class="who">
											<p>`+even.name+`</p>
											<a class="o1">`+even.time+`</a>
											<a>抢了您<span>`+even.ner+`</span>元宝</a>
										</div>`+pdqd(even.what)+`</div>`)
			})
		}else{
			arr1.map(function(even,key){
				$('.player').append(`<div class="one">
										<img src="`+even.img+`"/>
										<div class="who">
											<p>`+even.name+`</p>
											<a class="o1">`+even.time+`</a>
											<a>抢了您<span>`+even.ner+`</span>元宝</a>
										</div>`+pdqd1(even.what)+`</div>`)
			})
			
		}
	}
	
	
	
	
	$('.yuanbao .qiandao').click(function(){
		var crr=$('.yuanbao .qiandao').text();
		console.log(crr)
		if(crr=='签到'){
			$('.beijing').show();
			
			$('.yuanbao .qiandao a').text('已签到')
			$('.yuanbao .qiandao').css({"background":"#d7d7d7"});
			console.log(111)
			
		}else{
			$('.beijing2').show();$('.yuanbao .qiandao a').text('已签到')
			
		}
	})
		$('.beijing2 .tixian2 img').click(function(){
			$('.beijing2').hide();
		})
		
		$('.beijing .tixian img').click(function(){
			$('.beijing').hide();
		})
		$('.top2 a').click(function(){
			window.history.go(-1)
		})
})



function qiangyb(even){
		$(even).addClass('fu').removeClass('qiang');
		$(even).find('a').text('已抢夺');
	}
	function qiangyb1(even){
			$(even).addClass('fu').removeClass('qiang');
			$(even).find('a').text('已复仇');
		}