/**
 * Created by 81964 on 2017/3/22.
 */
$(function () {
    var index = [1, 2, 3, 4];
    var timer;
    //��ҳ����������Ӧ������
    $(".picture_img").each(function(i){
        $("this").css("z-index", index[index.length-1 - i]);
    });
    var num = 0;
    showPicture();
    //�Զ����ź���
    function showPicture() {
        timer = setInterval(function () {
            //С�����ɫ
            $(".div_sign").each(function(i){
                $(".div_sign").eq(i).css("backgroundColor", "white");
            });
            num++;
            if (num == 4) {
                $(".picture_img:nth-child(" + num + ")").fadeOut("slow");
                num = 0;
            }
            else {
                $(".picture_img:nth-child(" + num + ")").fadeOut("slow");

            }
            $(".picture_img:nth-child(" + (num + 1) + ")").fadeIn("slow");
            $(".div_sign:nth-child(" + (num + 1) + ")").css("backgroundColor", "#de0000");
        }, 1500);
    }
    /*��ť�¼�*/
    $(".picture").mouseover(function(){
        clearInterval(timer);
    })
        .mouseout(function(){
            showPicture();
        });
    //�����ť
    $(".div_span:nth-child(1)").click(function () {
        $(".div_sign").each(function(i){
            $(".div_sign").eq(i).css("backgroundColor", "white");
        });
        if (num == 0) {
            $(".picture_img:nth-child(" + (num + 1) + ")").fadeOut("slow");
            num = 4;
        }
        else {
            $(".picture_img:nth-child(" + (num + 1) + ")").fadeOut("slow");
        }
        $(".picture_img:nth-child(" + num + ")").fadeIn("slow");
        $(".div_sign:nth-child(" + num + ")").css("backgroundColor", "#de0000");
        num--;
    });
    //����Ұ�ť
    $(".div_span:nth-child(2)").click(function () {
        $(".div_sign").each(function(i){
            $(".div_sign").eq(i).css("backgroundColor", "white");
        });
        num++;
        if (num == 4) {
            $(".picture_img:nth-child(" + num + ")").fadeOut("slow");
            num = 0;
        }
        else {
            $(".picture_img:nth-child(" + num + ")").fadeOut("slow");
        }
        $(".picture_img:nth-child(" + (num + 1) + ")").fadeIn("slow");
        $(".div_sign:nth-child(" + (num + 1) + ")").css("backgroundColor", "#de0000");
    });
    //���Сͼ���л�ͼƬ
    $(".div_sign").each(function(i){
        $(".div_sign").eq(i).mouseenter(function(){

            $(".div_sign").each(function(i){
                $(".div_sign").eq(i).css("backgroundColor", "white");
            });
            //if(i==num-1){
            //    return false;
            //}
                $(".picture_img:nth-child(" + (num+1) + ")").fadeOut("slow");
                num = i;
                $(".picture_img:nth-child(" + (num+1) + ")").fadeIn("slow");
                $(".div_sign:nth-child(" + (num + 1) + ")").css("backgroundColor", "#de0000");
        })
    })
})