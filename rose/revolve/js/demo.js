/**
 * Created by Administrator on 2016/9/26.
 */
window.onload = function(){
    // 当页面的资源 全部加载 完毕 的时候，才触发 的事件

    // 1. 先获得页面中要操作的对象
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arr = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var flag = true;

    // 2. 根据配置单让每个li都到达配置单指定的样式
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //animate(lis[0],config[0]);
    //animate(lis[1],config[1]);
    //animate(lis[4],config[4]);
    assign();//先调用一次，还是打开浏览器的时候，让每个li都到达配置单指定的位置
   function assign(){
       for(var i=0;i<config.length;i++){
           animate(lis[i],config[i],function(){
               flag = true;// 变为true的时候，也就是说每个li都到达 指定的目标位置了
           });//让对应的li走到对应的配置单的样式的位置
       }
   }

    // 3. 鼠标移入的时候，要显示左右按钮
    wrap.onmouseover = function (){
           animate(arr,{
               "opacity":1
           });
    }
    wrap.onmouseout = function(){
        animate(arr,{
            "opacity":0
        })
    }

    // 4. 给左右按钮注册单击事件
    arrRight.onclick = function (){
           // 点击一次右按钮，其实就是改变一次配置单里面的元素的位置
        // 要实现之前静态文件分析的效果的话，就是依次让配置单中的元素向前提
        // js是动态的弱类型语言
        if(flag){ // 只有flag为true的时候才能执行下面的代码
            // 剪切数组的第一项放到最后
            flag =false;
            config.push(config.shift());  // 相当于重新生成数组，也就是对数组里面的元素进行重新排序
            // 让每个li按着新的数据元素再各自分别走到对应的位置
            assign();
        }

    }

    // 5. 给左侧按钮注册事件
    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            // 单击左侧按钮的时候，是将数组中的最后一项剪切下来，插入到数组的最前面，从而也实现 数组 的重新排序
            config.unshift(config.pop());
            // 再让li根据数组里面的新的顺序生成渲染
            assign();   // 本质还是css样式变化了，所以li也跟着css样式进行不同的变化
        }

    }
    // 6. 加节流阀  意思 就是在每个li没有到达指定位置的时候，点击按钮是没有效果的
}