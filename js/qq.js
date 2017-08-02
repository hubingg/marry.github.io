/**
 * Created by Administrator on 2016/10/9.
 */

$(function(){
    var $qx=$(".qqx");
    var $q=$(".bc-contact");
    var $qBOX=$(".qqBox");
    var $qBg=$(".qq-bg");
    var $close=$(".qq-close");
    var $sTop
    $(window).scroll(function(){
        $sTop=$(document).scrollTop();
        $qBOX.stop().animate({
            "top":$sTop+200+"px"
        },300)
    });
    $q.click(function(){
        $qBg.show();
        $sTop=$(document).scrollTop();
        $qBOX.stop().animate({
            "width":"1000px",
            "height":"380px",
            "top":$sTop+300+"px"
        },200)
    });
    $close.click(function(){
        $qBg.hide();
        $qBOX.stop().css({
            "width":"0",
            "height":"0",
            "top":"0"
        })
    });
})