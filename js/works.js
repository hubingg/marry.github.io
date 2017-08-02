/**
 * Created by Administrator on 2016/10/8.
 */

$(function() {
    var picAll = [
        {"name": "0", "src": "201609201474352714.jpg", "con": "紫色爱恋"},
        {"name": "0", "src": "201609201474352650.jpg", "con": "美丽说"},
        {"name": "0", "src": "201609201474352139.jpg", "con": "缪斯"},
        {"name": "0", "src": "201608181471502526.jpg", "con": "走马观花"},
        {"name": "0", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "0", "src": "201608161471345337.jpg", "con": "空中花园"},
        {"name": "0", "src": "201608161471345164.jpg", "con": "来自星星的你"},
        {"name": "0", "src": "201608161471344979.jpg", "con": "威尼斯情人"},

        {"name": "1", "src": "201607271469606769.jpg", "con": "天台爱情"},
        {"name": "1", "src": "201607271469607479.jpg", "con": "椰树林"},
        {"name": "1", "src": "201607271469609306.jpg", "con": "爱情阶梯"},
        {"name": "1", "src": "201607271469609800.jpg", "con": "爱情藤"},
        {"name": "1", "src": "201607281469683497.jpg", "con": "十里银滩"},
        {"name": "1", "src": "201607281469685192.jpg", "con": "最美时光"},
        {"name": "1", "src": "201607281469685647.jpg", "con": "绿野仙踪"},
        {"name": "1", "src": "201607281469697636.jpg", "con": "沁园"},

        {"name": "2", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "2", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "2", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "2", "src": "201608161471345337.jpg", "con": "瑞拉公主馆"},
        {"name": "2", "src": "201608161471345478.jpg", "con": "空中花园"},
        {"name": "2", "src": "201609201474352139.jpg", "con": "威尼斯情人"},
        {"name": "2", "src": "201609201474352650.jpg", "con": "凡尔赛宫"},
        {"name": "2", "src": "201609201474352714.jpg", "con": "浪漫花都"},

        {"name": "3", "src": "201510171445052104.jpg", "con": "海鸥之恋"},
        {"name": "3", "src": "201510171445054135.jpg", "con": "浪漫晚霞"},
        {"name": "3", "src": "201510171445054761.jpg", "con": "碧海蓝天"},
        {"name": "3", "src": "201510171445054879.jpg", "con": "海之魅惑"},

        {"name": "4", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "4", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "4", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "4", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "4", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "4", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "4", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "4", "src": "201609201474352714.jpg", "con": "威尼斯情人"},


        {"name": "5", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "5", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "5", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "5", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "5", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "5", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "5", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "5", "src": "201609201474352714.jpg", "con": "威尼斯情人"},

        {"name": "6", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "6", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "6", "src": "201609201474352714.jpg", "con": "威尼斯情人"},
        {"name": "6", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "6", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "6", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "6", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "6", "src": "201609201474352650.jpg", "con": "来自星星的你"},

        {"name": "7", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "7", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "7", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "7", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "7", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "7", "src": "201609201474352714.jpg", "con": "威尼斯情人"},
        {"name": "7", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "7", "src": "201608161471344979.jpg", "con": "缪斯"},

        {"name": "8", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "8", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "8", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "8", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "8", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "8", "src": "201609201474352714.jpg", "con": "威尼斯情人"},
        {"name": "8", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "8", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},

        {"name": "9", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "9", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "9", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "9", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "9", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "9", "src": "201608161471345337.jpg", "con": "走马观花"},
        {"name": "9", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "9", "src": "201609201474352714.jpg", "con": "威尼斯情人"},

        {"name": "10", "src": "201608161471345478.jpg", "con": "瑞拉公主馆"},
        {"name": "10", "src": "201607091468044377.jpg", "con": "紫色爱恋"},
        {"name": "10", "src": "201609201474352650.jpg", "con": "来自星星的你"},
        {"name": "10", "src": "201609201474352714.jpg", "con": "威尼斯情人"},
        {"name": "10", "src": "201607091468044645.jpg", "con": "美丽说"},
        {"name": "10", "src": "201609201474352139.jpg", "con": "空中花园"},
        {"name": "10", "src": "201608161471344979.jpg", "con": "缪斯"},
        {"name": "10", "src": "201608161471345337.jpg", "con": "走马观花"},
    ];
    //works-t部分特效
    var $wtLi = $(".works-t li");
    $wtLi.mouseenter(function () {
        $(this).css({
            "background-color": "#f55c5c",
            "border": "1px solid #f55c5c",
            "color": "#ffffff"
        });
    });
    $wtLi.mouseleave(function () {
        $(this).css({
            "background-color": "#fff",
            "border": "1px solid #ddd",
            "color": "#000"
        });
    });
    //加载
    var times = 0;
    $wtLi.click(function () {
        times = 0;
        var str = "";
        var index = $(this).index();
        $(".works-con").children().remove();
        for (var i = 0; i < picAll.length; i++) {
            if (picAll[i].name == index) {
                str = '<li><a href="#"><img src="images/works/' + picAll[i].src + '" alt=""/><p><span>' + picAll[i].con + '</span></p></a></li>';
                $(".works-con").append(str);
                if (index == 0) {
                    $wfDiv.html("点击加载...");
                    $wfDiv.css("background-color","#fff");
                } else {
                    $wfDiv.html("加载完毕");
                    $wfDiv.css("background-color","#ddd");
                }
            }
        }
        pUp();
    });

    //works-con部分特效
    pUp();
    function pUp(){
        var $wcUl = $(".works-con");
        var $wcLi = $wcUl.find("li");
        $wcLi.mouseenter(function () {
            $(this).find("p").stop().animate({"height": "79px"}, 200);
        });
        $wcLi.mouseleave(function () {
            $(this).find("p").stop().animate({"height": "0"}, 200);
        });
    }
    //works-f部分特效
    var $wfDiv = $(".works-f");
    $wfDiv.hover(function(){
        var wfTxt1=$wfDiv.html();
        if(wfTxt1=="点击加载..."){
            $(this).css("background-color","#ddd");
        }
    },function(){
        var wfTxt2=$wfDiv.html();
        if(wfTxt2=="点击加载..."){
            $(this).css("background-color","#fff");
        }
    });
    $wfDiv.click(function () {
        var wfTxt=$wfDiv.html();
        if(wfTxt=="点击加载..."){
            times++;
            var wfStr = $(".works-con").html();
            for (var i = 0; i < picAll.length; i++) {
                if (picAll[i].name == times) {
                    wfStr= '<li><a href="#"><img src="images/works/' + picAll[i].src + '" alt=""/><p><span>' + picAll[i].con + '</span></p></a></li>';
                    $(".works-con").append(wfStr);
                }
            }
            pUp();
            if(times==picAll[picAll.length-1].name){
                $wfDiv.html("加载完毕");
                $wfDiv.css("background-color","#ddd");
            }
        }
    })
})