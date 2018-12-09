$('.slider.usual').slick({
    centerMode: true,
    centerPadding: '471px',
    zIndex: 250,
    responsive: [
        {
            breakpoint: 1680,
            settings: {
                centerPadding: '331px'
            }
        },
        {
            breakpoint: 1360,
            settings: {
                centerPadding: '291px'
            }
        },
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '239px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '183px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '135px'
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '0',
            }
        }
    ]
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

$(function(){

    $('.slider.usual .slider-item .image, .slider.usual .slick-prev, .slider.usual .slick-next').height($('.slider.usual .slider-item').width()/1.5);
    $(window).resize(function(){
        $('.slider.usual .slider-item .image, .slider.usual .slick-prev, .slider.usual .slick-next').height($('.slider.usual .slider-item').width()/1.5);
    });

    $('.slider.slider-for .slider-item .image, .slider.slider-for .slick-prev, .slider.slider-for .slick-next').height($('.slider.slider-for .slider-item').width()/1.5);
    $(window).resize(function(){
        $('.slider.slider-for .slider-item .image, .slider.slider-for .slick-prev, .slider.slider-for .slick-next').height($('.slider.slider-for .slider-item').width()/1.5);
    });

    $('.slider.slider-nav .slider-item .image').height($('.slider.slider-nav .slider-item').width()/1.5);
    $(window).resize(function(){
        $('.slider.slider-nav .slider-item .image').height($('.slider.slider-nav .slider-item').width()/1.5);
    });
});