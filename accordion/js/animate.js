/**
 * Created by Administrator on 2016/9/25.
 */
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId=setInterval(function(){
        var flag = true;
        for(var key in json){  // 对于json来说 key就是json的属性
            if(key=="opacity"){
                //var leader = obj.offsetLeft; // 这个offsetLeft仅仅获得的是当前对象的原来的位置的值
                var leader = getStyle(obj,key)*100 ||0 ; // opacity是一个小数，为了便于方便，我们将小数扩大100倍
                // 短路运算中的逻辑或
                var target = json[key]*100;//将目标值也要扩大100倍
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                // 根本原因  是设置了一个left值导致出了一个bug
                // obj.style.left = leader+'px'; // left值仅仅是让当前对象的位置发生变化 ，向左或是向右移动
                obj.style[key] = leader/100; // 再将值恢复成原来之后，赋值给对应的opacity
            }else if(key=="zIndex"){
                var leader =parseInt(getStyle(obj,key)) || 0 ;//parseInt是将字符串转换成数字类型的时候，是一个字符一个字符的转换，直到遇到不能转换的字符为止
                // 短路运算中的逻辑或
                var target = json[key];
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                obj.style[key] = leader;
//                    obj.style[key]=json[key];
            }else {  // 才是width   height  left   top
                var leader =parseInt(getStyle(obj,key)) ||0 ;//parseInt是将字符串转换成数字类型的时候，是一个字符一个字符的转换，直到遇到不能转换的字符为止
                // 短路运算中的逻辑或
                var target = json[key];
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                // obj.style.left = leader+'px'; // left值仅仅是让当前对象的位置发生变化 ，向左或是向右移动
                obj.style[key] = leader+'px';
            }
            //var leader = obj.offsetLeft; // 这个offsetLeft仅仅获得的是当前对象的原来的位置的值
            if(leader !=target){  // 在这个例子当中，只要有一个属性的值到达到了目标位置就清空定时器
                // 需要定义一个标识，如果有一个属性还没有到达目标位置的时候，就不要清空定时器
                flag = false;
            }

        }
        // 如果所有的属性都到达了目标位置的话，再来真正的清除定时器
        if(flag){
            clearInterval(obj.timerId);
            if(fn){  // 对象只要不为null，转换对应的boolean类型的话，就是True
                fn();  // 上面的清除了定时器的时候，如果有函数，再去执行另一个函数
            }

        }

    },15);

}
/**
 * 封装了一个兼容性的获得样式属性值的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    // 能力检测     所谓的能力检测，就是看当前的浏览器是否支持对象的此属性或是方法
    if(obj&&obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,null)[attr];
    }
}
