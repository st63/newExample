$(function () {

    $('.nav__dropdown').hide();

    $('button').click(function () {
        $('.sidebar').toggleClass('size');
    });

    $('.nav__link').click(function () {
        const parent = $(this).parent()
        const dropdown = parent.children('.nav__dropdown')

        $('.nav__item').not(parent).removeClass('nav__item--open')
        $('.nav__dropdown').not(dropdown).hide(400)

        parent.toggleClass('nav__item--open')
        dropdown.toggle(400)
    });

});