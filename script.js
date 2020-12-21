$(function () {

    $('.nav__dropdown').hide();
    $('.user__dropdown').hide();
    $('.alerts__dropdown').hide();
    $('.message__dropdown').hide();

    $('.nav__link').click(function () {
        const parent = $(this).parent()
        const dropdown = parent.children('.nav__dropdown')

        $('.nav__item').not(parent).removeClass('nav__item--open')
        $('.nav__dropdown').not(dropdown).hide(400)

        parent.toggleClass('nav__item--open')
        dropdown.toggle(400)

    });

    $('.header__user--name').click(function () {
        $('.user__dropdown').toggle(400)
        $('.alerts__dropdown').hide(400)
        $('.message__dropdown').hide(400)
    });

    $('.btn').click(function () {
        $('.sidebar').toggleClass('size');
    });
    
    $('.header__user--alert').click(function () {
        $('.alerts__dropdown').toggle(400)
        $('.message__dropdown').hide(400)
        $('.user__dropdown').hide(400)
    });

    $('.header__user--mail').click(function () {
        $('.message__dropdown').toggle(400)
        $('.alerts__dropdown').hide(400)
        $('.user__dropdown').hide(400)
    });


});