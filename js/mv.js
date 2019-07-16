$(document).ready(function(){
 var arr=[
     {
         name:'雪莉 - 哥布林 (Goblin)',
         imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
     },
     {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },

    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
    {
        name:'雪莉 - 哥布林 (Goblin)',
        imgL:'http://imge.kugou.com/mvpic/b5/fc/b5fc342e92c978945536e3d88a4a929b.jpg',
    },
 ]
 arr.map(function(even){
     $(".mvtj").append(` <div class="dange">
                                <img src="`+even.imgL+`"/  title="`+even.name+`">
                                <a>`+even.name+`</a>
                                <p></p>
                            </div>`)
 })
 var crr=[
     {
         name:'刘心 - 一点点心动',
         number:'1',
     },
     {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
    {
        name:'刘心 - 一点点心动',
        number:'1',
    },
 ]
crr.map(function(key){
    $('.ranking').append(` <div class="pai" > 
                            <b class="ner">`+key.number+`</b>
                            <a>`+key.name+`</a>
                            <p></p>
                        </div>`)
})

    $('.dian a').hover(function(){

        console.log(111)
        $(this).addClass('dd').siblings().removeClass('dd');
   
    },)
    $(".radioleft div").click(function(){
        $(this).addClass('one').siblings().removeClass('one')
      
       })

})