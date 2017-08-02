/**
 * Created by Administrator on 2016/9/25.
 */

window.onload=function(){
    var box=document.getElementById("box");
    var lis=box.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++) {
        lis[i].style.backgroundImage = "url(images/"+"s" +(i + 1) + ".jpg)";
    }
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover = function(){
            for(var j=0;j<lis.length;j++){
                animate(lis[j],{
                    "width":100
                })
            }
            animate(this,{
                "width":800
            })
        }
        lis[i].onmouseout=function(){
            for(var j=0;j<lis.length;j++){
                animate(lis[j],{
                    "width":240
                })
            }
        }
    }
}
