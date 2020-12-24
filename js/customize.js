$(document).ready(function(){
    // Header color change
    $(window).on("scroll",function(){
        let scrollDistance = $(window).scrollTop();
        let $header = $('.js-header');
        if (scrollDistance > 80){
            $header.addClass('header-colored');
        }
        else {
            $header.removeClass('header-colored');
        }
    })

    // wow plugin initialize
    new WOW().init();
})