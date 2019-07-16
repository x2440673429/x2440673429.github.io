
       var img=[
        "https://imgessl.kugou.com/commendpic/20190109/20190109104155147376.jpg",
        "https://imgessl.kugou.com/commendpic/20190624/20190624104535218534.jpg",
        "https://imgessl.kugou.com/commendpic/20190623/20190623232914894158.jpg",
        "https://imgessl.kugou.com/commendpic/20190623/20190623233017402471.jpg",
        "https://imgessl.kugou.com/commendpic/20190611/20190611101938392990.jpg",
        "https://imgessl.kugou.com/commendpic/20190109/20190109104215314555.jpg",
        "https://imgessl.kugou.com/commendpic/20190624/20190624000535823365.jpg",
    ];
    var oop=0;

function tianma(edd,key){
    oop=key;
    var ad=document.getElementById("arr");
    ad.children[0].classList.remove("act")
    ad.children[1].classList.remove("act")
    ad.children[2].classList.remove("act")
    ad.children[3].classList.remove("act")
    ad.children[4].classList.remove("act")
    ad.children[5].classList.remove("act")
    ad.children[6].classList.remove("act")
    
    
    edd.classList.add("act");
    var ba = document.getElementById('immg');
    ba.src=img[key];
}


function prev(){
    console.log(oop)
    var ba = document.getElementById('immg');
    if(oop == 0){
        oop=7
    }
    oop=oop-1;
    
    ba.src=img[oop];
    geta(oop)
}


function geta(num){
    var ad=document.getElementById("arr");
    ad.children[0].classList.remove("act")
    ad.children[1].classList.remove("act")
    ad.children[2].classList.remove("act")
    ad.children[3].classList.remove("act")
    ad.children[4].classList.remove("act")
    ad.children[5].classList.remove("act")
    ad.children[6].classList.remove("act")
    
    
    ad.children[num].classList.add("act");
}


function next(){
    console.log(oop)
    var ba = document.getElementById('immg');
    if(oop == 6){
        oop=-1
    }
    oop=oop+1;
    
    ba.src=img[oop];
    geta(oop)
}
var neirong=[
    ["<p class='ye'>夏婉安 - 叹离愁<span class='sp'></span></p>","<p class='ye'>Vk - 一生一遇<span class='sp'></span></p>","<p class='ye'>虎二 - 缘分易碎<span class='sp'></span></p>","<p class='ye'>贺一航 - 判若两人<span class='sp'></span></p>","<p class='ye'>格子兮 - 爱恨两难<span class='sp'></span></p>","<p class='ye'>孙语赛、王麒龙 - 释然<span class='sp'></span></p>","<p class='ye'>鞠婧祎 - 一双翅膀【请赐我一双翅膀电视剧片尾曲】<span class='sp'></span></p>","<p class='ye'>小曼 - 是否<span class='sp'></span></p>"],
    ["<p class='ye'>Shawn Mendes、Camila Cabello - Señorita<span class='sp'></span></p>","<p class='ye'>Nicki Minaj - MEGATRON<span class='sp'></span></p>","<p class='ye'>Marshmello、Kane Brown - One Thing Right<span class='sp'></span></p>","<p class='ye'>Mark Ronson、King Princess - Pieces of Us<span class='sp'></span></p>","<p class='ye'>Imagine Dragons、Elisa - Birds<span class='sp'></span></p>","<p class='ye'>88-Keys、Mac Miller、Sia - That s Life<span class='sp'></span></p>","<p class='ye'>Zara Larsson - All the Time<span class='sp'></span></p>","<p class='ye'>Stormzy - Crown<span class='sp'></span></p>"],
    ["<p class='ye'>Red Velvet - 짐살라빔 (Zimzalabim)<span class='sp'></span></p>", "<p class='ye'>SOMI - BIRTHDAY<span class='sp'></span></p>", "<p class='ye'>金请夏 - Snapping<span class='sp'></span></p>","<p class='ye'>艺声 - Pink Magic<span class='sp'></span></p>", "<p class='ye'>张凡俊 - 손 닿으면 (碰到手的话)【请输入搜索词WWW OST】<span class='sp'></span></p>", "<p class='ye'>Stray Kids - 부작용 (Side Effects)<span class='sp'></span></p>","<p class='ye'>邕圣祐 - Heart Sign (Prod. Flow Blow)<span class='sp'></span></p>", "<p class='ye'>레오(LEO) - 로맨티시즘 (Romanticism)<span class='sp'></span></p>"],
    ["<p class='ye'>宇野実彩子 - LOST<span class='sp'></span></p>","<p class='ye'>西島隆弘 - NA<span class='sp'></span></p>","<p class='ye'>米津玄師 - Ghosts of the Sea【海兽之子主题曲】<span class='sp'></span></p>", "<p class='ye'>TWICE - Happy Happy<span class='sp'></span></p>", "<p class='ye'>花澤香菜 - 「Hello, Again ~昔からある場所~」from消滅都市 -TV size-【消灭都市片尾曲】<span class='sp'></span></p>", "<p class='ye'>まじ娘 - WISH<span class='sp'></span></p>", "<p class='ye'>Sonar Pocket、GFRIEND - Oh difficult (with GFRIEND)<span class='sp'></span></p>", "<p class='ye'>RADWIMPS - 前前前世<span class='sp'></span></p>"],
]
function onput(old,lxd){
  var box =  document.getElementsByClassName("city")[0];
 
    for(var i =0; i<box.children.length;i++){
        box.children[i].style.color= "#000";
    }
    lxd.style.color="#009af3";
    var nn= document.getElementById("gem");
    nn.innerHTML="";
    console.log(old)
    for(var i = 0; i<neirong[old].length;i++){
        nn.innerHTML+=neirong[old][i];
    }
 }
 var xrr=[
    ["<div class='dzq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20181122/20181122091128804.jpg'class='jj'/><p>G.E.M.邓紫棋</p></div>",
     "<div class='dzq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20180515/20180515002522714.jpg'class='jj'/><p>周杰伦</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20190103/20190103191232626.jpg'class='zz'/><p>薛之谦</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20180906/20180906181115284.jpg'class='zz'/><p>许嵩</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20161209/20161209164303152140.jpg'class='zz'/><p>林俊杰</p></div>",],
     ["<div class='dzq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20140409/20140409145904650908.jpg'class='jj'/><p>Michael Jackson</p></div>",
     "<div class='dzq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20190320/20190320150807942.jpg'class='jj'/><p>Alan Walker</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20190531/20190531100034704.jpg'class='zz'/><p>Taylor Swift</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20181102/20181102182312198.jpg'class='zz'/><p>Imagine Dragons</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20170223/20170223163852686.jpg'class='zz'/><p>Marshmello</p></div>",],
     ["<div class='dzq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20161229/20161229183012269.jpg'class='jj'/><p>G-DRAGON</p></div>",
     "<div class='dzq' onmouseover='adddiv(this)' ><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20190126/20190126110708708.jpg'class='jj'/><p>EXO</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20170704/20170704172442730.jpg'class='zz'/><p>BIGBANG</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20180620/20180620191347895.jpg'class='zz'/><p>IBLACKPINK</p></div>",
     "<div class='zq' onmouseover='adddiv(this)'><img src='https://imgessl.kugou.com/uploadpic/softhead/240/20171204/20171204122223222.jpg'class='zz'/><p>泫雅</p></div>",],
 ]
function unput(enen,xd){
   var d = document.getElementsByClassName("kangcui")[0];
   for(var i=0;i<d.children.length;i++){
       d.children[i].style.color="#000";
   }
   xd.style.color="#009af3";
   var srr=document.getElementsByClassName("gem")[0];
   srr.innerHTML="";
   for(var i = 0 ; i<xrr[enen].length;i++){
       srr.innerHTML+=xrr[enen][i];
   }
}
function out(year,top){
    var crr=document.getElementsByClassName("diandiandian")[0];
    for(var i = 0; i<crr.children.length;i++){
        crr.children[i].style.background="#666";
    }console.log(crr.children[i])
    top.style.background="#009af3";
} 




//body添加div
function adddiv(even,type){

   var rr =  document.getElementsByClassName('myhide')[0];
   if(rr){
    document.body.removeChild(rr);
   }
    //获取元素到文档顶部的距离
    var top = even.offsetTop;
    var left = even.offsetLeft;
    var h = even.offsetHeight;
    var w = even.offsetWidth;
     var div = document.createElement('div');
     div.classList.add("myhide");
     div.style.width = w.toString()+'px';
     div.style.height = h.toString()+'px';
     div.style.top = top.toString()+'px';
     div.style.left = left.toString()+'px';
     

     if(type=='rb'){
         var v1 =w-49+'px'
         var v2 =h-49+'px'
         console.log(v1+' '+v2)
         div.style.backgroundPosition=v1+' '+v2
       
     }else if(type=='ct'){
        var v1 =w/2-24+'px'
        var v2 =h/2-24+'px'
        console.log(v1+' '+v2)
        div.style.backgroundPosition=v1+' '+v2
     }else if(type=='ctr'){
        div.style.borderRadius='50%';
        var v1 =w/2-24+'px'
        var v2 =h/2-24+'px'
        console.log(v1+' '+v2)
        div.style.backgroundPosition=v1+' '+v2

     }else{
        div.style.backgroundPosition='-50px -50px'
     }
     console.log('移入')
     var bo = document.body;//获取body对象.
        //动态插入到body中
        bo.insertBefore(div,bo.lastChild);
        //body移除div
        div.onmouseout = function(){
            console.log('移出')
            bo.removeChild(div);
        }
        console.log(left)
}
    function backatop(){
        document.documentElement.scrollTop=0;
    }
    this.onscroll = function () {
        console.log(1111,document.documentElement.scrollTop)
        var top = document.documentElement.scrollTop
       
        if(top>300){
            document.getElementById('fixed').style.display='block';
            if(top>2000){
                console.log(9999)
                document.getElementById('fixed').style.bottom='360px';
            }else{
                document.getElementById('fixed').style.bottom='50px';
            }
        }else {
            document.getElementById('fixed').style.display='none';
        }
    }