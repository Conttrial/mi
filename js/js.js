
//-----------------------------------滑块控制
function ControlsLeft(e){
    var key = e.data.key;
    var left = key.position().left;


    if($(this).hasClass("active")){
            if(left/1240%1 == 0 && $(this).hasClass("active") ){
                key.css("left",left+1240+"px");
                left += 1240;
                if(left === 0){
                    $(this).removeClass("active");
                }
                $(this).siblings().addClass("active");
            }
    }
}

function ControlsRight(e){
    var key = e.data.key;
    var left = key.position().left;
    if($(this).hasClass("active")){
            if(left/1240%1 == 0 && $(this).hasClass("active") ){
                key.css("left",left-1240+"px");
                left -= 1240;
                if(key.width()+left<=1226){
                    $(this).removeClass("active");
                }
                $(this).siblings().addClass("active");
            }
    }

}


//滑块/
function ControlsAuto(content,leftC,rightC){
        var left = content.position().left;
        var width = content.width();
        if(left/1240%1 == 0){
            if(width+left >1227){
                content.css("left",left-1240+"px");
                leftC.addClass("active");
                left -= 1240;
            }else{
                content.css("left","0px");
                leftC.removeClass("active");
                rightC.addClass("active");
                left = 0;
            }
            if(width+left <=1226){
                rightC.removeClass("active");
            }
        }
}




//---------------------------------轮播图
function CarouselAuto(){

        var carousel=$(".carousel-img>a");
        var index=$(".carousel-img>a.active").index();
        var last =carousel.length-1;
        var pointer =$(".carousel-pointer>a");
        carousel.eq(index).removeClass("active");
        pointer.eq(index).removeClass("active");
        if(index<last){
            carousel.eq(index+1).addClass("active");
            pointer.eq(index+1).addClass("active");
        }else{
            carousel.eq(0).addClass("active");
            pointer.eq(0).addClass("active");
        };

}
function CarouselSlide(){
    var pre=$(".carousel-pre");
    var next=$(".carousel-next");

    var pointer =$(".carousel-pointer>a");
    var carousel=$(".carousel-img>a");
    var last =carousel.length-1;

    pre.on("click",function(){
        var index=$(".carousel-img>a.active").index();
        carousel.eq(index).removeClass("active");
        pointer.eq(index).removeClass("active");
        if(index>0){
            carousel.eq(index-1).addClass("active");
            pointer.eq(index-1).addClass("active");
        }else{
            carousel.eq(last).addClass("active");
            pointer.eq(last).addClass("active");
        };
    });

    next.on("click",function(){
        var index=$(".carousel-img>a.active").index();
        carousel.eq(index).removeClass("active");
        pointer.eq(index).removeClass("active");
        if(index<last){
            carousel.eq(index+1).addClass("active");
            pointer.eq(index+1).addClass("active");
        }else{
            carousel.eq(0).addClass("active");
            pointer.eq(0).addClass("active");
        };
    })
}
function CarouselPointer(){
    var pointer =$(".carousel-pointer>a");
    var carousel=$(".carousel-img>a");
    for(var i=0;i<carousel.length;i++){
        pointer.eq(i).on("click",function(){
            var index = $(this).index();
            carousel.eq(index).addClass("active");
            carousel.eq(index).siblings().removeClass("active");
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
    };
}








//----------------------------------------导航下拉菜单

function NavList(){
    var list_a =$("#nav .list>a");
    var list_content =  $(".nav-list");
    for(var i=0;i<7;i++) {
        list_a .eq(i).on("mouseover", {index: i}, AddContent);
    }
    list_a.on("mouseout",function(){
        list_content.slideUp(100);
    });
    list_content.on("mouseover",function(){
        list_content.stop(true,false).slideDown(100);;
    });
    list_content.on("mouseout",function(){
        list_content.slideUp(100);
    })
}
function CreateContent(){
    var li =document.createElement("li");
    var a =document.createElement("a");
    var img =document.createElement("img");
    var div =document.createElement("div");
    var a2 = document.createElement("a");
    var p = document.createElement("p");
    div.className = ("title");
    a.setAttribute("href","#");
    a2.setAttribute("href","#");
    div.appendChild(p);
    div.appendChild(a2)
    a.appendChild(img);
    li.appendChild(a);
    li.appendChild(div);
    $(".nav-list .wrap>ul").append(li);
}

function AddContent(e) {
    var index = e.data.index;
    var ul = $(".nav-list ul");
    $.ajax({
        type:"GET",
        url:"data.json",
        success:function(data){
            if (ul.children()) {
                ul.empty();
            }
            var length = data.data[index].src.length;
            for (var i = 0; i < length; i++) {
                CreateContent();
                ul.children("li").eq(i).find("img").attr("src", data.data[index].src[i]);
                ul.children("li").eq(i).find("div>a").text(data.data[index].a[i]);
                ul.children("li").eq(i).find("p").text(data.data[index].p[i]);
            }
            ul.children("li:last-child").addClass("last");
        }
    });
    $(".nav-list").stop(true,false).slideDown(100);

}


//------------------------------------------选项卡切换
function TabSwitch(button,content){
    button.on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        content.eq(index).addClass("active").siblings().removeClass("active");
    })
}

//-----------------------------------内容切换
function ContentSwitch(e) {
    var key = e.data.list;
    var index = e.data.index;
    key.css("left","-"+index*296+"px");
    $(this).addClass("active").siblings().removeClass("active");

}
function ContentLeft(e){
    var key = e.data.list;
    var btn = e.data.btn;
    var left =key.position().left;
    if(left%296 === 0){
        if(left<0){
            key.css("left",left+296+"px");
            left +=296;
            btn.eq(-left/296).addClass("active").siblings().removeClass("active");
        }else{
            key.css("left","-"+(btn.length-1)*296+"px");
            btn.eq(btn.length-1).addClass("active").siblings().removeClass("active");
        }
    }
}
function ContentRight(e){
    var key = e.data.list;
    var btn = e.data.btn;
    var left =key.position().left;

    if(left%296 === 0){
        if(!(left === -(btn.length-1)*296)){
            key.css("left",left-296+"px");
            left -=296;
            btn.eq(-left/296).addClass("active").siblings().removeClass("active");
        }else{
            key.css("left",0+"px");
            btn.eq(0).addClass("active").siblings().removeClass("active");
        }
    }

}
function ContentBind(button,ul,left,right){
    for(var i = 0;i< button.length; i++){
        button.eq(i).on("click",{index:i,list:ul},ContentSwitch)
    }
    left.on("click",{list:ul,btn:button},ContentLeft);
    right.on("click",{list:ul,btn:button},ContentRight);
}


//---------------------------------------视频模态框
function video(){
    $(".modal").show();
    $(this).siblings(".video-modal").show(300).css("display","block");
}

function close(){
    $(".modal").hide();
    $(this).parents("h3").siblings("video").trigger('pause');
    $(this).parents(".video-modal").hide();
}

$(document).ready(function(){
        //轮播图
        var CarouselTime = setInterval("CarouselAuto()",5000);
        CarouselSlide();
        CarouselPointer();

        //导航切换
        $(NavList());

        //明星单品滑块
        $(".star a.controls-left").on("click",{key:$(".star-goods")},ControlsLeft);
        $(".star a.controls-right").on("click",{key:$(".star-goods")},ControlsRight);
        setInterval("ControlsAuto($('.star .star-goods'),$('.star a.controls-left'),$('.star a.controls-right'));",8000);

        //推荐产品滑块
        $("#recommend a.controls-left").on("click",{key:$(".re-goods"),ie:$(".re-goods li.goods")},ControlsLeft);
        $("#recommend a.controls-right").on("click",{key:$(".re-goods"),ie:$(".re-goods li.goods")},ControlsRight);

        //选项卡切换
        $(TabSwitch($("#match .tab-list li"),$("#match .tab-content")));
        $(TabSwitch($("#accessories .tab-list li"),$("#accessories .tab-content")));
        $(TabSwitch($("#around .tab-list li"),$("#around .tab-content")));


        //内容切换
        ContentBind($(".book .content-circle-control i"),$(".book .content-content"),$(".book .content-left"),$(".book .content-right"));
        ContentBind($(".theme .content-circle-control i"),$(".theme .content-content"),$(".theme .content-left"),$(".theme .content-right"));
        ContentBind($(".game .content-circle-control i"),$(".game .content-content"),$(".game .content-left"),$(".game .content-right"));
        ContentBind($(".app .content-circle-control i"),$(".app .content-content"),$(".app .content-left"),$(".app .content-right"));

        //视频模态框
        $(".video-list>li>a").on("click",video);
        $(".close").on("click",close);
    }
)






