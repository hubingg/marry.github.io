/**
 * Created by kahing on 16/10/7.
 */

/**
 * 提交姓名电话时提醒
 */
$(function(){
    var regName = /^[\u4e00-\u9fa5]{2,6}$/;
    var phone=/^1[34578]\d{9}$/;
    $("#submit-btn").on("click",function(){
        if (!regName.test($("#realName").val())){
            alert("请输入正确名字");
        }else{
            if (!phone.test($("#realPhone").val())){
                alert("请输入正确的电话号码");
            }else {
                alert("提交成功");
                var charge=10;
                var timeId=setInterval(function(){
                    charge--;
                    $("input").attr("disabled",true);
                    $("input").text(this.value).css({"color":"#888888"});
                    $("#submit-btn").val("正在发生验证码-"+charge+"秒");
                    if (charge==0){
                        clearInterval(timeId);
                        $("input").attr("disabled",false);
                        $("input").text(this.value).css({"color":""});
                        $("#submit-btn").val("已发送验证码");
                    }


                },1000)
            }
        }
    })
})