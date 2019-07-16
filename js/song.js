$(document).ready(function(){
    var arr=[
        {
            img:'http://imge.kugou.com/soft/collection/150/20190627/20190627160110438343.jpg',
            name:'虐哭单身狗·KTV必点的华语情歌对唱',
            zuozhe:'西子',
            text:'男女对唱总有一首歌让你寄托更深刻的情感当男声和女声巧妙地融合在一起时大概是这个世界上最美妙的声音了谢谢《青睐 大大》的奇思妙想2019.6.27',   
        },
        {
            img:'http://imge.kugou.com/soft/collection/150/20190627/20190627160110438343.jpg',
            name:'虐哭单身狗·KTV必点的华语情歌对唱',
            zuozhe:'西子',
            text:'男女对唱总有一首歌让你寄托更深刻的情感当男声和女声巧妙地融合在一起时大概是这个世界上最美妙的声音了谢谢《青睐 大大》的奇思妙想2019.6.27',   
        },
        {
            img:'http://imge.kugou.com/soft/collection/150/20190627/20190627160110438343.jpg',
            name:'虐哭单身狗·KTV必点的华语情歌对唱',
            zuozhe:'西子',
            text:'男女对唱总有一首歌让你寄托更深刻的情感当男声和女声巧妙地融合在一起时大概是这个世界上最美妙的声音了谢谢《青睐 大大》的奇思妙想2019.6.27',   
        },
        {
            img:'http://imge.kugou.com/soft/collection/150/20190627/20190627160110438343.jpg',
            name:'虐哭单身狗·KTV必点的华语情歌对唱',
            zuozhe:'西子',
            text:'男女对唱总有一首歌让你寄托更深刻的情感当男声和女声巧妙地融合在一起时大概是这个世界上最美妙的声音了谢谢《青睐 大大》的奇思妙想2019.6.27',   
        },
        {
            img:'http://imge.kugou.com/soft/collection/150/20190627/20190627160110438343.jpg',
            name:'虐哭单身狗·KTV必点的华语情歌对唱',
            zuozhe:'西子',
            text:'男女对唱总有一首歌让你寄托更深刻的情感当男声和女声巧妙地融合在一起时大概是这个世界上最美妙的声音了谢谢《青睐 大大》的奇思妙想2019.6.27',   
        },
    ]
    arr.map(function(even){
        $('.fix_right ').append(`  <div class="sheet">
                                         <div class="photo">
                                        <img src="`+even.img+`"/>
                                    </div>
                                    <div class="text">
                                        <div class="text_top">
                                            <a>`+even.name+`</a>
                                            <em>制作人：`+even.zuozhe+`</em>
                                        </div>
                                        <div class="txt">
                                        `+even.text+`
                                        </div>
                                        <div class="both">
                                            <a class="play">
                                                <span></span>
                                                全部播放
                                            </a>
                                            <a class="share"><span></span>分享</a>
                                        </div>
                                    </div>
                                    </div> `)
    })
    $('.fix .fix_left a').click(function(){
        $(this).addClass('blua').siblings().removeClass('blua');
    })
    
})