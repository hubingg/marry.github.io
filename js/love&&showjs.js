/**
 * Created by ShirleyD on 16/10/7.
 */

$(function () {

    /**
     * loveShow轮播
     */
    function playLoveShow() {
        $(".loveShow-image ul").animate({marginLeft:"-310px"},1000,function () {
            $(".loveShow-image ul").css({marginLeft:0});
            $(".loveShow-image ul li:first").remove().clone(true).appendTo(".loveShow-image ul");
        })
    }

    var loveShowTimeId=setInterval(playLoveShow,2000);

    $(".loveShow-image").hover(function () {
        clearInterval(loveShowTimeId);
    },function () {
        loveShowTimeId=setInterval(playLoveShow,2000);
    })

    $(".loveShow-image ul li a").hover(function () {
        $(this).children().eq(1).css({display:"block"}).animate({bottom:"79px"},500);
    },function () {
        $(this).children().eq(1).animate({bottom:"0px"},1000).css({display:"none"});
    })




    var storeShowOlLis=$(".storeShow-image .num").children();
    var storeShowPic=0;

    /**
     * 鼠标划入ol时，storeShow图片改变
     */
    storeShowOlLis.mouseenter(function () {
        storeShowOlLis.css({background:"#444"});
        $(this).css({background:"#FF7700"});
        $(".bannpic li").fadeOut();
        $(".bannpic li").eq($(this).index()).fadeIn();
        storeShowPic=$(this).index();
    });

    /**
     * 左标签
     */
    $(".prev").click(function () {
        if(storeShowPic==0){
            storeShowPic=storeShowOlLis.length-1;
        }
        $(".bannpic li").fadeOut();
        $(".bannpic li").eq(storeShowPic).fadeIn();
        storeShowOlLis.css({background:"#444"});
        storeShowOlLis.eq(storeShowPic).css({background:"#FF7700"})
        storeShowPic--;
    })


    /**
     * 右标签
     */
    $(".next").click(playStoreShow);

    function playStoreShow() {
        if(storeShowPic==storeShowOlLis.length-1){
            storeShowPic=0;
        }
        $(".bannpic li").fadeOut();
        $(".bannpic li").eq(storeShowPic).fadeIn();
        storeShowOlLis.css({background:"#444"});
        storeShowOlLis.eq(storeShowPic).css({background:"#FF7700"})
        storeShowPic++;
    }

    /**
     *storeShow自动轮播
     */
    var storeShowTimeId=setInterval(playStoreShow,2000);

    /**
     * storeShow左右标签变色
     */
    $(".storeShow-image a").hover(function () {
        $(".storeShow-image a").animate({opacity:"0.7"});
    },function () {
        $(".storeShow-image a").animate({opacity:"0.1"});
    })


    $(".storeShow-image").hover(function () {
        $(".storeShow-image a").animate({opacity:"0.1"});
        clearInterval(storeShowTimeId);//鼠标移入清除轮播
    },function () {
        $(".storeShow-image a").animate({opacity:"0"});
        storeShowTimeId=setInterval(playStoreShow,2000);//鼠标滑出继续轮播
    })


})
