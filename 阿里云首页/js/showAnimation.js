/**
 * Created by 81964 on 2017/3/23.
 */
showAnimation();
showList();
function showList(){
    var li_index;
    var num1;
    $(".title-list").each(function(index){
        $(".title-list").eq(index).hover(function(){
                li_index = index;
                if(index==1){
                    $(".title-li-info[index=product]").show();
                }
                if(index==2){
                    $(".title-li-info[index=solution]").show();
                }
                if(index==3){
                    $(".title-li-info[index=market]").show();
                }
                if(index==5){
                    $(".title-li-info[index=community]").show();
                }
                if(index==8){
                    $(".title-li-info[index=more]").show();
                }
        },
            function(){
                if(index==1){
                    $(".title-li-info[index=product]").hide();
                }
                if(index==2){
                    $(".title-li-info[index=solution]").hide();
                }
                if(index==3){
                    $(".title-li-info[index=market]").hide();
                }
                if(index==5){
                    $(".title-li-info[index=community]").hide();
                }
                if(index==8){
                    $(".title-li-info[index=more]").hide();
                }
            }
        )
    });
    $(".title-li-info").hover(function(){
            if(li_index==1){
                $(".title-li-info[index=product]").show();
            }
            if(li_index==2){
                $(".title-li-info[index=solution]").show();
            }
            if(li_index==3){
                $(".title-li-info[index=market]").show();
            }
            if(li_index==5){
                $(".title-li-info[index=community]").show();
            }
            if(li_index==8){
                $(".title-li-info[index=more]").show();
            }
            $(".title-list").eq(li_index).css("borderBottom","2px solid #00e0ff");
    },
        function(){
            if(li_index==1){
                $(".title-li-info[index=product]").hide();
            }
            if(li_index==2){
                $(".title-li-info[index=solution]").hide();
            }
            if(li_index==3){
                $(".title-li-info[index=market]").hide();
            }
            if(li_index==5){
                $(".title-li-info[index=community]").hide();
            }
            if(li_index==8){
                $(".title-li-info[index=more]").hide();
            }
            $(".title-list").eq(li_index).css("border","none");
        }
    );
    //$(".ul-move").mouseenter(function(){
    //    $(".title-li-info-right div:nth-child("+(num1+1)+")").css("display","none");
    //});
    $(".li-move").each(function(i){
        $(".li-move").eq(i).hover(function(){
                num1 = i;
            $(".li-move").css("backgroundColor","");
            $(this).css("backgroundColor","#00c1de");
                $(".contant-1").eq(num1).css("display","block").siblings().css("display","none");
        },
            function(){
                $(this).css("backgroundColor","");
                $(".contant-1").eq(num1).css("display","none");
            }
        )
    });
    $(".ul-move").mouseleave(function(){
        $(".contant-1").eq(num1).css("display","block");
        $(".li-move").eq(num1).css("backgroundColor","#00c1de");
    });
    $(".btn-up").each(function(index){
        $(".btn-up").click(function(){
            $(this).parents(".title-li-info").slideUp(400);
        })
    })
}
function showAnimation(){
    var num;
    var card_item =document.getElementsByClassName("card-item");
    var y_row =document.getElementsByClassName("y-row")[0];
    //获取第一面
    var card_item_first = document.getElementsByClassName("card-item-first");
    //获取第二面
    var flag =false;
    var card_item_content = document.getElementsByClassName("card-item-content");
    for(var i =0;i<card_item.length;i++){
        card_item[i].index = i;
        $(".y-row").mouseenter(function(){
            $(".card-item").removeClass("active");
            card_item_first[num].style.display = "block";
            card_item_content[num].style.display = "none";
        });
        card_item[i].onmouseover = function(){
            if(this.index !=0){
                $(".card-item").eq(0).removeClass("active");
                card_item_first[0].style.display = "block";
                card_item_content[0].style.display = "none";
            }
            $(".card-item").eq(this.index).addClass("active");
            card_item_first[this.index].style.display = "none";
            card_item_content[this.index].style.display = "block";
        };
        //离开li事件
        card_item[i].onmouseout = function(){
                num=this.index;
                $(".card-item").eq(this.index).removeClass("active");
                card_item_first[this.index].style.display = "block";
                card_item_content[this.index].style.display = "none";
        };
        $(".y-row").mouseleave(function(){
            $(".card-item").eq(num).addClass("active");
            card_item_first[num].style.display = "none";
            card_item_content[num].style.display = "block";
        })
    }
}