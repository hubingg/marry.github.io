/**
 * Created by Administrator on 2016/10/7.
 */
//top-nav2开头
$(function(){
    var $li=$(".top-nav2-r ul li");
    $li.mouseenter(function(){
        $(this).find("a").stop().animate({
            "background-position-x":"-126px"
        },300)
    });
    $li.mouseleave(function(){
        $(this).find("a").stop().animate({
            "background-position-x":"0"
        },300)
    });
})

//top-nav2结尾