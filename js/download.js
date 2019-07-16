$(document).ready(function(){
    var arr=[
        {
            im:'http://imge.kugou.com/commendpic/20190103/20190103183059763424.png',
            name:"酷狗音乐ipd版",
            all:'更新日期： 2018.12.11',
            buntt:'3.1.0',
        },
        {
            im:'http://imge.kugou.com/commendpic/20190103/20190103183059763424.png',
            name:"酷狗音乐Mac版",
            all:'更新日期：2019.06.14',
            buntt:'2.9.2',
        },
        {
            im:'http://imge.kugou.com/commendpic/20190103/20190103183059763424.png',
            name:"酷狗音乐 UWP",
            all:'更新日期：2018.7.28',
            buntt:'1.3.8',
        },
        {
            im:'http://imge.kugou.com/commendpic/20190103/20190103183059763424.png',
            name:"酷狗音乐 TV版",
            all:'更新日期：2019.06.6',
            buntt:'1.1.1',
        },
        {
            im:'http://imge.kugou.com/commendpic/20190103/20190103183059763424.png',
            name:"酷狗音乐 车载版",
            all:'更新日期：2019.06.26',
            buntt:'1.0.2',
        },
        {
            im:'http://imge.kugou.com/commendpic/20180122/20180122182013588212.png',
            name:"VIPER HiFi （PC版）",
            all:'更新日期：2018.02.02',
            buntt:'V 1.0.20',
        },
        {
            im:'http://imge.kugou.com/commendpic/20180122/20180122182013588212.png',
            name:"VIPER HiFi（安卓版）",
            all:'更新日期：2019.04.24',
            buntt:'V 2.0.8',
        },
        {
            im:'http://imge.kugou.com/commendpic/20180716/20180716162613490629.png',
            name:"酷狗直播Android",
            all:'更新日期：2018.7.24',
            buntt:'V 3.97.30',
        },
        {
            im:'http://imge.kugou.com/commendpic/20180716/20180716162613490629.png',
            name:"酷狗直播iOS版",
            all:'更新日期：2018.7',
            buntt:'V 3.97.2',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160923/20160923102422471014.jpg',
            name:"酷FM 安卓版",
            all:'更新日期：2016.02.03',
            buntt:'V 4.0.3',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160923/20160923102253649529.jpg',
            name:"酷FM iOS版",
            all:'更新日期：2016.02.06',
            buntt:'V 4.0.2',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160923/20160923102540126069.jpg',
            name:"酷狗收音机PC版",
            all:'更新日期：2018.7.2',
            buntt:'V 7683',
        },
        {
            im:'http://imge.kugou.com/commendpic/20170524/20170524171235578844.png',
            name:"酷狗识曲",
            all:'更新日期：2017.5.23',
            buntt:'1.0.0.0',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160923/20160923102321682214.jpg',
            name:"铃声制作工具",
            all:'更新日期：2014.01.08',
            buntt:'V 1.1',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160927/20160927165051580267.png',
            name:"哄你睡",
            all:'更新日期：2016.8.23',
            buntt:'V 2.2.0',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160927/20160927165401261382.png',
            name:"5sing",
            all:'更新日期：2016.8.20',
            buntt:'V 6.2.3',
        },
        {
            im:'http://imge.kugou.com/commendpic/20160927/20160927171344243016.png',
            name:"米粒桌面",
            all:'更新日期：2016.08.19',
            buntt:'V 1.5.1',
        }

    ]
    arr.map(function(even){
        $('.tuijian_products .ku').append(`<div class="ipd">
                        <div class="img">
                            <img src="`+even.im+`"/>
                        </div>
                        <div class="banben">
                            <p title="`+even.name+`">`+even.name+`</p>
                            <a>`+even.all+`</a>
                            <button>下载</button>
                            <span>`+even.buntt+`</span>
                        </div>
                    </div>`)
    })
})

function jump(url){
    window.location.href=url;
}






