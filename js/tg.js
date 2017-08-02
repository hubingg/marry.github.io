$(document).ready(function () {
    $(".zuixin ul li").mouseenter(function () {
        $(this).find("a").css("opacity", "1");
        $(this).siblings().find("a").css("opacity", "0.5");
    });
    $(".zuixin").mouseleave(function () {
        $(this).find("li a").css("opacity", "1");
    });
});