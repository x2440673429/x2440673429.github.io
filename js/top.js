//点击关闭按钮 input框不触发失去焦点事件
function dianji(abc){
    if(abc=="block"){
        var a=sessionStorage.getItem("name")
        if(a){
            document.getElementById("tanchu").style.display="block";
            var d=sessionStorage.getItem("name");
            console.log(555,d)
                var e=d.split(",");
                e=e.reverse();
                var s= e.length;
                console.log(555,e)
                document.getElementById('fjid').innerHTML='';
                for(i=0;i<s;i++){
                   if(i<6){
                     document.getElementById('fjid').innerHTML+='<p onclick="lsj(this)">'+e[i]+'</p>'; 
                   }
                  
                }
        }else{
           
                document.getElementById("tanchu").style.display="none";
        }
    }else{
        setTimeout(function(){
            document.getElementById("tanchu").style.display="none";
        },200)
    }
}
function cunchu(){
 var b= document.getElementById("lishi").value;
//  sessionStorage.setItem("name",b) ;
var c=sessionStorage.getItem("name")
if(c){
    sessionStorage.setItem("name",c+","+b) ;
}else{
    sessionStorage.setItem("name",b) ;
}
}


function lsj(even){
    var a = even.innerHTML;
    document.getElementById('lishi').value=a;

}


function empry(){
    sessionStorage.setItem("name",'')
}