/**
 * Created by Administrator on 2016/9/26.
 */
window.onload = function(){
    // ��ҳ�����Դ ȫ������ ��� ��ʱ�򣬲Ŵ��� ���¼�

    // 1. �Ȼ��ҳ����Ҫ�����Ķ���
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arr = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var flag = true;

    // 2. �������õ���ÿ��li���������õ�ָ������ʽ
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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

    //animate(lis[0],config[0]);
    //animate(lis[1],config[1]);
    //animate(lis[4],config[4]);
    assign();//�ȵ���һ�Σ����Ǵ��������ʱ����ÿ��li���������õ�ָ����λ��
   function assign(){
       for(var i=0;i<config.length;i++){
           animate(lis[i],config[i],function(){
               flag = true;// ��Ϊtrue��ʱ��Ҳ����˵ÿ��li������ ָ����Ŀ��λ����
           });//�ö�Ӧ��li�ߵ���Ӧ�����õ�����ʽ��λ��
       }
   }

    // 3. ��������ʱ��Ҫ��ʾ���Ұ�ť
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

    // 4. �����Ұ�ťע�ᵥ���¼�
    arrRight.onclick = function (){
           // ���һ���Ұ�ť����ʵ���Ǹı�һ�����õ������Ԫ�ص�λ��
        // Ҫʵ��֮ǰ��̬�ļ�������Ч���Ļ����������������õ��е�Ԫ����ǰ��
        // js�Ƕ�̬������������
        if(flag){ // ֻ��flagΪtrue��ʱ�����ִ������Ĵ���
            // ��������ĵ�һ��ŵ����
            flag =false;
            config.push(config.shift());  // �൱�������������飬Ҳ���Ƕ����������Ԫ�ؽ�����������
            // ��ÿ��li�����µ�����Ԫ���ٸ��Էֱ��ߵ���Ӧ��λ��
            assign();
        }

    }

    // 5. ����ఴťע���¼�
    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            // ������ఴť��ʱ���ǽ������е����һ��������������뵽�������ǰ�棬�Ӷ�Ҳʵ�� ���� ����������
            config.unshift(config.pop());
            // ����li��������������µ�˳��������Ⱦ
            assign();   // ���ʻ���css��ʽ�仯�ˣ�����liҲ����css��ʽ���в�ͬ�ı仯
        }

    }
    // 6. �ӽ�����  ��˼ ������ÿ��liû�е���ָ��λ�õ�ʱ�򣬵����ť��û��Ч����
}