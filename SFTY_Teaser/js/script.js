$(document).ready(function(){
    var elm = ".box";

    $(elm).each(function(index){
        $(this).on("mousewheel DOMMouseScroll", function(e){
            e.preventDefault();

            var delta = 0;

            if(event.wheelDelta){
                delta = event.wheelDelta / 120;
                if(window.opera){
                    delta = -deltal
                }
            }else if(event.detail){
                delta = event.detail / 3
            }

            var moveTo = $(window).scrollTop();
            var elmIndex = $(elm).eq(index);

            if(delta < 0){index.html
                try{
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).next().offset().top;

                        $(".box").removeClass("active");
                        $(elmIndex).next().addClass("active");

                        var $cur_index = $(".box.active").index();

                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch(e){
                    
                }
            }else{
                try{
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).prev().offset().top;

                        $(".box").removeClass("active");
                        $(elmIndex).prev().addClass("active");

                        var $cur_index = $(".box.active").index();

                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch(e){
                    
                }
            }

            $("html, body").stop().animate({scrollTop : moveTo + "px"}, 750);
        });
    })


    $("header li").click(function(){
        var $index = $(this).index();

        $("header li").removeClass("active");
        $(this).addClass("active");

        $(".box").removeClass("active");
        $(".box").eq($index).addClass("active");

        $("html, body").stop().animate({scrollTop : $("main section").eq($index).offset().top}, 750);
    });



    var key_num = 0;
    
    $(document).on("keydown", function(event){
        key = event.keyCode;
        
        var $target = $(".box.active").index();

        if(key == 40 || key == 34){
            try{
                $("html, body").animate({scrollTop : $(".box").eq($target + 1).offset().top}, 750, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target + 1).addClass("active");

                    $("header li").removeClass("active");
                    $("header li").eq($target + 1).addClass("active");
                });
            }catch(event){

            }
        }else if(key == 38 || key == 33){
            try{
                $("html, body").animate({scrollTop : $(".box").eq($target - 1).offset().top}, 750, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target - 1).addClass("active");

                    $("header li").removeClass("active");
                    $("header li").eq($target - 1).addClass("active");
                });    
            }catch(event){

            }
        }else if(key == 36){
            try{
                $("html, body").animate({scrollTop : $(".box").first().offset().top}, 750, function(){
                    $(".box").removeClass("active");
                    $(".box").first().addClass("active");
                    
                    $("header li").removeClass("active");
                    $("header li").first().addClass("active");
                })
            }catch(event){

            }
        }else if(key == 35){
            try{
                $("html, body").animate({scrollTop : $(".box").last().offset().top}, 750, function(){
                    $(".box").removeClass("active");
                    $(".box").last().addClass("active");
                    
                    $("header li").removeClass("active");
                    $("header li").last().addClass("active");
                })
            }catch(event){

            }
        }
    });
});