$(document).ready(function(){
 
  
    
    $('.kuzai .kugouewm a').click(function(){
        console.log(111)
        $('.kuzai').hide();



    })

    //
    setTimeout(function(){
        console.log(111111)
        $('.sys').hide();
        $('.kgewm').animate({marginLeft:'120px'})
    },3000);
    
    setInterval(function(){
        console.log(222222)
    },1000)

    $('.saoyisao').hover(function(){
        $('.kgewm').stop(true,false).animate({marginLeft:'15px'},500,function(){
            $('.sys').fadeIn();
        });
       
       
    },function(){
        $('.sys').hide();
        $('.kgewm').stop(true,false).animate({marginLeft:'120px'})
    })
   





})