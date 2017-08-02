/**
 * Created by Administrator on 2016/9/16.
 */
/**
 * 定义了一个兼容的获得页面元素之间的文本内容的函数
 * @param element
 * @returns {string|string}
 */
function  getText(element){ // 形参，起点位的作用
    // 能力检测  所谓的能力检测就是看浏览器是否支持当前对象的属性或是方法
    if(typeof element.innerText=="string"){ // if()放 boolea类型的值，或是关系表达式，或是逻辑表达式 除以上之外，if的小括号里面还会默认的隐式调用Boolean()，将其它类型的值隐式转换成对应的boolean类型的值   0 "" undefined null false NaN
        return   element.innerText;
    }else{
        return  element.textContent;
    }
}
/**
 * 定义了一个兼容版本的设置元素内容的函数
 * @param element
 * @param value
 */
function setText(element,value){
    if(typeof element.innerText=="string"){
        element.innerText = value;
    }else {
        element.textContent = value;
    }
}

/**
 * 定义了一个与获得或是设置文本相关的对象
 * @type {{getText: Function, setText: Function}}
 */
var text  = {
    getText:function(element){
        // 能力检测  所谓的能力检测就是看浏览器是否支持当前对象的属性或是方法
        if(typeof element.innerText=="string"){ // if()放 boolea类型的值，或是关系表达式，或是逻辑表达式 除以上之外，if的小括号里面还会默认的隐式调用Boolean()，将其它类型的值隐式转换成对应的boolean类型的值   0 "" undefined null false NaN
            return   element.innerText;
        }else{
            return  element.textContent;
        }
    },
    setText:function(element,value){
        if(typeof element.innerText=="string"){
            element.innerText = value;
        }else {
            element.textContent = value;
        }
    }
}
var tagNode = {
    getNextElement:function(element){
        if(element.nextElementSibling){
            return element.nextElementSibling;
        }else { // 到了else就说明，浏览器不支持nextElementSibling，就只能用所有的浏览器都支持的nextSibling
            var ele = element.nextSibling;
            while(ele && ele.nodeType!==1){　//第一个ele的意思，就是首先得保证有这么一个兄弟姊妹节点，然后再判断此节点的节点类型是不是标签节点
                ele = ele.nextSibling; //
            }
            return ele;
        }
    },
    getPreviousElement:function(element){
        if(element.previousElementSibling){
            return element.previousElementSibling;
        }else { // 如果到了else里面了，就是不支持previousElement比如说IE8，只能用原始的所有的浏览器都支持的previousSibling
            var ele = element.previousSibling;
            while(ele && ele.nodeType!==1){
                ele = ele.previousSibling; //继续 在当前的节点上往上找节点
            }
            return ele;
        }
    },
    getFirstElement:function(element){
        if(element.firstElementChild){
            return element.firstElementChild;
        }else { // 到了else里面的话，就是不支持firstElementChild
            var ele = element.firstChild;//先拿到当前对象的第一个子节点
            while(ele && ele.nodeType!==1){
                ele= ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function(element){
        if(element.lastElementChild){
            return element.lastElementChild;
        }else {
            // 如果到了else里面，说明不支持lastElementChild,只能用所有的浏览器都支持的lastChild
            var ele = element.lastChild;
            while(ele && ele.nodeType !==1){
                ele =  ele.previousSibling;
            }
            return ele;
        }
    }
}

/**
 * 封装了一个兼容各个浏览器的获取当前对象的下一个相邻的兄弟姊妹节点的函数
 * @param element
 * @returns {*}
 */
function getNextElement(element){
    // 能力检测 ，就是看浏览器是否支持此对象的属性或是方法
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else { // 到了else就说明，浏览器不支持nextElementSibling，就只能用所有的浏览器都支持的nextSibling
        var ele = element.nextSibling;
        while(ele && ele.nodeType!==1){　//第一个ele的意思，就是首先得保证有这么一个兄弟姊妹节点，然后再判断此节点的节点类型是不是标签节点
            ele = ele.nextSibling; //
        }
        return ele;
    }
}

/**
 * 封装了一个兼容各个浏览器的获得上一个标签节点的函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else { // 如果到了else里面了，就是不支持previousElement比如说IE8，只能用原始的所有的浏览器都支持的previousSibling
        var ele = element.previousSibling;
        while(ele && ele.nodeType!==1){
            ele = ele.previousSibling; //继续 在当前的节点上往上找节点
        }
        return ele;
    }
}
/**
 * 封装了一个兼容各个浏览器版本的获得第一个子标签节点的函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else { // 到了else里面的话，就是不支持firstElementChild
        var ele = element.firstChild;//先拿到当前对象的第一个子节点
        while(ele && ele.nodeType!==1){
            ele= ele.nextSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个兼容各个浏览器的获得最后一个标签节点的函数
 * @param element
 * @returns {*}
 */
function getLastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else {
        // 如果到了else里面，说明不支持lastElementChild,只能用所有的浏览器都支持的lastChild
        var ele = element.lastChild;
        while(ele && ele.nodeType !==1){
            ele =  ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 通过ID获得标签对象
 * @param id
 * @returns {Element}
 */
function $$(id){
    return document.getElementById(id);
}

/**
 * 将原来的全部选项移动到目标
 * @param source
 * @param target
 */
function moveAll(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        target.appendChild(options[i]);
        i--;
    }
}
/**
 * 将原来的选中的选项移动到目标位置
 * @param source
 * @param target
 */
function moveSelect(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        if(options[i].selected){
            target.appendChild(options[i]);
            i--;
        }
    }
}

/**
 * 封装了一个匀速运动的函数
 * @param obj
 * @param target
 */
function animate(obj,target){
    clearInterval(obj.timerId);//每次开启定时器之前，先清空定时器，保证每次执行的时候，只开启一个定时器
    obj.timerId=setInterval(function(){
        //1. 先要获得div的当前位置   使用offsetLeft获得原始位置的值
        var leader = obj.offsetLeft;
        // 2. 匀速移动到200的位置  就像我们走路一样，匀速不断的迈同样大小的步子
        var step = 20;
        step = leader<target?step:-step;
        if(Math.abs(leader-target)>Math.abs(step)){  // leader600   target400  leader!=target这个判断 条件始终 不能让对象的位置到达目标位置，所以这个判断条件需要更换
            leader = leader + step;
            obj.style.left = leader + 'px';
        }else {
            clearInterval(obj.timerId);
            obj.style.left = target+"px"; //当前位置距离 目标位置不足一个步长的时候，直接跳过来就可以了，不用再加一个步长了。
        }

    },20)

}


