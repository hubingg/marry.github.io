/**
 * Created by kahing on 16/10/8.
 */
$(function () {
    $(window).scroll(function(){
        if ($(document).scrollTop()>=client().height){
            $("#scrollNav").slideDown(1000).css({display:'block'});
        }else {
            $("#scrollNav").slideUp(1000);
        }
    })
    function client(){
        return {
            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight|| 0
        }
    }
    //console.log(client().height);
})
