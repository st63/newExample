$(function () {

    $('button').click(function () {
        $('.sidebar').toggleClass('size');
    });

    $('.nav__link').click(function () {
        $(this).parents('.nav__item').toggleClass('nav__item--open'); //обращаемся к родителю только текущего элемента
    });

});