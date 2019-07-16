$(document).ready(function(){
   
  










    $('.dan').hover(function(){

      var str=$(this).children('.xiangxia').css("background-position");
      var num = str.slice(1,4);
      if(num=='450'){
         $(this).children('.xiangxia').css("background-position",'-450px -60px');
      }else{
         $(this).children('.xiangxia').css("background-position",'-480px -60px');
      }
      
    }, function(){

      console.log(111,)
      let str=$(this).children('.xiangxia').css("background-position");
      let num=str.slice(1,4);
      if(num=='480'){
         $(this).children('.xiangxia').css("background-position",'-480px -120px');
      }else{
         $(this).children('.xiangxia').css("background-position",'-450px -120px');
      }
     
      })
   $('.dan').click(function(){
    //  console.log(111,'dan')
      console.log($(this).siblings('.shou'))
      var crr=$(this).siblings('.shou').css('display')
      var that = $(this);
      $(this).siblings('.shou').slideToggle(400,function(){
        
         if(crr=='block'){
            that.children('.xiangxia').css("background-position",'-480px -60px');
            console.log(222,$(this))
         }else{
            that.children('.xiangxia').css("background-position",'-450px -60px');
         }
      })


   })
   $('.shou li').click(function(){
      $('.shou li').removeClass('liact')
      $(this).addClass('liact')
   })

   // $('.shou li').hover(function(){

   //    $(this).css({background: '#f5f8fb',color:' #288fe7'});

   // },function(){

   //    $(this).css({background: 'none',color:'#555'});
   // })
   $('#Check').click(function(){
      
      let add=$(this).css('background-position')
      console.log(111,add)
      let srq=add.slice(8,11);
      if(srq=='180'){
            $(this).css('background-position','-180px -150px')
            $('.election .mark').css('background-position','-180px -150px')
         }else{
            $(this).css('background-position','-180px -180px')
            $('.election .mark').css('background-position','-180px -180px')
         }
         
      
   })

   $('.election .mark').click(function(){

      let add=$(this).css('background-position')
      console.log(add)
      let srq=add.slice(8,11);
      
      if(srq=='180'){
         $(this).css('background-position',('-180px -150px'))
      }else{
         $(this).css('background-position',('-180px -180px'))
      }
      
      let crr=$('.election .mark').length;
      var bol ='全选';
      for(var i=0; i<crr;i++){

        let zrr= $('.election .mark')[i];
        let qwe=$(zrr).css('background-position')
        var qeq=qwe.slice(8,11);
        console.log(qeq)
        if(qeq=='150'){
         bol='未选'
        }
        
        
      }
      if(bol=='未选'){
         $('#Check').css('background-position','-180px -150px')
      }else{
         $('#Check').css('background-position','-180px -180px')
      }

   })

})
   