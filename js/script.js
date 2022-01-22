jQuery(function ($) {
    "use strict";

    // Responsive menu


    if ($(window).width() < 420) {
        $('.fa-bars').on('click', function () {
            $('.mobile_nav').show();
            $('.header_top .inner_header nav ul').hide();
            $('.fa-bars').hide();
            $('.fa-times').show();

        });
        $('.fa-times').on('click', function () {
            $('.mobile_nav').hide();
            $('.header_top .inner_header nav ul').hide();
            $('.fa-times').hide();
            $('.fa-bars').show();
        });
    }
    else {
        $('.fa-bars').on('click', function () {
            $('.header_top .inner_header nav ul').show();
            $('.mobile_nav').hide();
            $('.fa-bars').hide();
            $('.fa-times').show();

        });
        $('.fa-times').on('click', function () {
            $('.header_top .inner_header nav ul').hide();
            $('.mobile_nav').hide();
            $('.fa-times').hide();
            $('.fa-bars').show();
        });
    }
    /* ШАБЛОН----------------------------------------------------
   if($('.fa-bars').length){
       $('.fa-bars').on('click', function(){
           $('.header_top .inner_header nav ul').show();
           $(this).hide();
           $('.fa-times').show();
   
       });
       $('.fa-times').on('click', function(){
           $('.header_top .inner_header nav ul').hide();
           $(this).hide();
           $('.fa-bars').show();
       });
   
   }
   ШАБЛОН----------------------------------------------------*/

    //Header slider
    if ($('.home_slider').length) {

        $('.home_slider').slick({
            vertical: true,
            arrows: false,
            dots: true,
        });
    }
    //Carousel slider for Shop Items
    if ($('.shop_carousel').length) {
        $('.shop_carousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: '<div class="left"><i class="fas fa-arrow-left"></i></div>',
            nextArrow: '<div class="right"><i class="fas fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /* Slider for testemonials*/
    if ($('.testemonials_carousel').length) {
        $('.testemonials_carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.testemonials_slider_box'),
            prevArrow: '<div class="left_arrow"><div class="left"><i class="fas fa-arrow-left"></i></div></div>',
            nextArrow: '<div class="right_arrow"><div class="right"><i class="fas fa-arrow-right"></i></div></div>',
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.testemonials_carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var tabs_container = $('.testemonials_tab_container');

            tabs_container.find($('.tab_item')).hide();
            tabs_container.find($('.tab_' + nextSlide)).show();
        });
    }

    /* Slider for twitter*/
    if ($('.twits').length) {
        $('.twits').slick({
            vertical: true,
            appendArrows: $('.arrows_top_bottom'),
            prevArrow: '<div class="top"><i class="fas fa-arrow-up"></i></div>',
            nextArrow: '<div class="bottom"><i class="fas fa-arrow-down"></i></div>'
        });
    }


    if ($('.open-video').length) {
        $('open-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    if ($('.test_galery').length) {
        $('.test_galery').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }

        });
    }

});
