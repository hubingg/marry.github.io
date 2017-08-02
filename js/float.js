/**
 * Created by Administrator on 2016/10/7.
 */
//welcome开头
$(function(){
    var $div=$(".welcome");
    var aTop=$div.offset().top;
    $(window).scroll(function(){
        var sTop=$(document).scrollTop();
        var sHeight=$(window).height()/2;
        var picw=$div.find("img").height()/2;
        if(sTop>780-sHeight+picw){
            $div.stop().animate({"top":sTop+sHeight-picw},700);
        }else{
            $div.css("top",aTop);
        }
    });
})

//welcome结尾