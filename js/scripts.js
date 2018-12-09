// popup
$(function(){
    $('.open_popup').click(function() {
        var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).show();
        $('.overlay').show();
    })
    $('.popup .close, .overlay').click(function() {
        $('.overlay, .popup').hide();
    })
});
// end popup

// language
jQuery(function($){
    $('.lang > .selected').click(function(){
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');
    });
});
// end language

// menu
jQuery(function($){
    $('.burger').click(function(){
        $('header.main .menu').toggleClass('active');
        $('.wrapper').toggleClass('hidden');
    });
    $('.menu-catalog li a').click(function(){
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');
    });
    $('.menu-catalog li ul').addClass(function(){
        $(this).prev('a').toggleClass('arrow');
    });
});
// end menu