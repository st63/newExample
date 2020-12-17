$(function () {

    $('.nav__dropdown').hide();

    $('button').click(function () {
        $('.sidebar').toggleClass('size');
    });

    $('.nav__link').click(function () {
        $(this).parents('.nav__item').toggleClass('nav__item--open'); //обращаемся к родителю только текущего элемента
        $(this).parents('.nav__item').children('.nav__dropdown').toggle(400, function(){
            $(".nav__dropdown").not(this).hide(400);
        });
    });

});