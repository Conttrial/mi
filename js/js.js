
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
var NavData ={
    0:{
        src:["img/nav/xiaomi/xiaomiNOTE2-320-220!160x110.jpg","img/nav/xiaomi/MIX-320-220!160x110.jpg","img/nav/xiaomi/xiaomi5S-320-220!160x110.jpg","img/nav/xiaomi/5spluse320_220!160x110.jpg","img/nav/xiaomi/mi5!160x110.jpg","img/nav/xiaomi/maxdingbu!160x110.jpg"],
        a:["小米Note 2","小米MIX","小米5s","小米5s Plus","小米手机5","小米Max"],
        p:["2799元起","3499元","1899元","2299元起","1599元起","1299元起"]
    },
    1:{
        src:["img/nav/redmi/hmn4xtb!160x110.jpg","img/nav/redmi/hongminote4!160x110.jpg","img/nav/redmi/320-2202!160x110.jpg","img/nav/redmi/320-220!160x110.jpg"],
        a:["红米Note 4X","红米Note 4","红米4","红米4A"],
        p:["999元起","999元起","799元起","599元"]
    },
    2:{
        src:["img/nav/pad/mipad2-16!160x110.jpg","img/nav/pad/mipad2-64!160x110.jpg","img/nav/pad/mipad2-64-win!160x110.jpg","img/nav/pad/bijiben32012.5!160x110.jpg","img/nav/pad/bijiben320!160x110.jpg"],
        a:["小米平板2 16GB","小米平板2 64GB","小米平板2 64G Windows版","小米笔记本Air 12.5\"","小米笔记本Air 13.3\""],
        p:["999元","1299元","1299元","3449元","4999元"]
    },
    3:{
        src:["img/nav/tv/101848.png","img/nav/tv/101855xin.png","img/nav/tv/101860xin.png","img/nav/tv/65yingyuan.png","img/nav/tv/70dianshi.png","img/nav/tv/101865.png"],
        a:["小米电视3s 48英寸","小米电视3s 55英寸","小米电视3s 60英寸","小米电视3s 65英寸","小米电视3 70英寸","查看全部"],
        p:["2599元","3999元","4799元","6699元","9999元","小米电视"]
    },
    4:{
        src:["img/nav/box/mihezi.png","img/nav/box/mihezi.png","img/nav/box/hezi3s!160x110.jpg","img/nav/box/hezimini.png","img/nav/box/320x220.png","img/nav/box/putonban!160x110.jpg"],
        a:["小米盒子3s","小米盒子3c","小米盒子3 增强版","小米盒子mini版","小米家庭影院","小米家庭音响 标准版"],
        p:["299元","199元","399元","179元","1999元","699元"]
    },
    5:{
        src:["img/nav/wifi/miwifi!160x110.jpg","img/nav/wifi/miwifi-3!160x110.jpg","img/nav/wifi/luyouqi3c!160x110.jpg","img/nav/wifi/fdq2!160x110.jpg"],
        a:["全新小米路由器","小米路由器 3","小米路由器 3C","小米WiFi放大器 2"],
        p:["699元","149元","99元","49元"]
    },
    6:{
        src:["img/nav/smart/scooter!160x110.jpg","img/nav/smart/water2!160x110.jpg","img/nav/smart/dianfanbao!160x110.jpg","img/nav/smart/air2!160x110.jpg","img/nav/smart/xiaobai!160x110.jpg","img/nav/smart/shdt.png"],
        a:["九号平衡车","小米净水器","米家压力IH电饭煲","小米空气净化器 2","智能摄像机","查看全部"],
        p:["1999元","1299元起","999元","699元","399元","智能硬件"]
    }

};
function NavList(){
    var list_a =$("#nav .list>a");
    var list_content =  $(".nav-list");
    for(var i=0;i<7;i++) {
        list_a .eq(i).on("mouseover", {key: i}, AddContent);
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
    var key = e.data.key;
    var ul = $(".nav-list ul");
    $(".nav-list").stop(true,false).slideDown(100);
    var length = NavData[key].src.length;
    if (ul.children()) {
        ul.empty();
    }
    for (var i = 0; i < length; i++) {
        CreateContent();
        ul.children("li").eq(i).find("img").attr("src", NavData[key].src[i]);
        ul.children("li").eq(i).find("div>a").text(NavData[key].a[i]);
        ul.children("li").eq(i).find("p").text(NavData[key].p[i]);
    }
    ul.children("li:last-child").addClass("last");


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






