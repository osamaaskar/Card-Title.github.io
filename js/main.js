$(function(){
    "use strict"
    
    //Slider Size
     var winh = $(window).height();
    
    $(".slider, .carousel-item").height(winh);
    
    //Swipper Slider
    
    var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    },
    pagination: {
    el: '.swiper-pagination',
    },
    });
 
    //Back ground of navbar
    
    $(window).scroll(function(){
        var x = $(this).scrollTop();
        if(x>300){
            $(".navbar").css("background","rgb(115, 115, 62)");
        }
        else{
            $(".navbar").css("background","none");
        }
        
    });
});
