function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId=setInterval(function(){
        var flag = true;
        for(var key in json){  // ����json��˵ key����json������
            if(key=="opacity"){
                //var leader = obj.offsetLeft; // ���offsetLeft������õ��ǵ�ǰ�����ԭ����λ�õ�ֵ
                var leader = getStyle(obj,key)*100 ||0 ; // opacity��һ��С����Ϊ�˱��ڷ��㣬���ǽ�С������100��
                // ��·�����е��߼���
                var target = json[key]*100;//��Ŀ��ֵҲҪ����100��
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                // ����ԭ��  ��������һ��leftֵ���³���һ��bug
                // obj.style.left = leader+'px'; // leftֵ�������õ�ǰ�����λ�÷����仯 ��������������ƶ�
                obj.style[key] = leader/100; // �ٽ�ֵ�ָ���ԭ��֮�󣬸�ֵ����Ӧ��opacity
            }else if(key=="zIndex"){
                var leader =parseInt(getStyle(obj,key)) || 0 ;//parseInt�ǽ��ַ���ת�����������͵�ʱ����һ���ַ�һ���ַ���ת����ֱ����������ת�����ַ�Ϊֹ
                // ��·�����е��߼���
                var target = json[key];
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                obj.style[key] = leader;
//                    obj.style[key]=json[key];
            }else {  // ����width   height  left   top
                var leader =parseInt(getStyle(obj,key)) ||0 ;//parseInt�ǽ��ַ���ת�����������͵�ʱ����һ���ַ�һ���ַ���ת����ֱ����������ת�����ַ�Ϊֹ
                // ��·�����е��߼���
                var target = json[key];
                var step = (target-leader)/10;
                step= step>0?Math.ceil(step):Math.floor(step);
                leader = leader+step;
                // obj.style.left = leader+'px'; // leftֵ�������õ�ǰ�����λ�÷����仯 ��������������ƶ�
                obj.style[key] = leader+'px';
            }
            //var leader = obj.offsetLeft; // ���offsetLeft������õ��ǵ�ǰ�����ԭ����λ�õ�ֵ
            if(leader !=target){  // ��������ӵ��У�ֻҪ��һ�����Ե�ֵ���ﵽ��Ŀ��λ�þ���ն�ʱ��
                // ��Ҫ����һ����ʶ�������һ�����Ի�û�е���Ŀ��λ�õ�ʱ�򣬾Ͳ�Ҫ��ն�ʱ��
                flag = false;
            }

        }
        // ������е����Զ�������Ŀ��λ�õĻ������������������ʱ��
        if(flag){
            clearInterval(obj.timerId);
            if(fn){  // ����ֻҪ��Ϊnull��ת����Ӧ��boolean���͵Ļ�������True
                fn();  // ���������˶�ʱ����ʱ������к�������ȥִ����һ������
            }

        }

    },15);

}
/**
 * ��װ��һ�������ԵĻ����ʽ����ֵ�ĺ���
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    // �������     ��ν��������⣬���ǿ���ǰ��������Ƿ�֧�ֶ���Ĵ����Ի��Ƿ���
    if(obj&&obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,null)[attr];
    }
}
