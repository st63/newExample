$(function () {
    const animationSpeed = 300

    const navDropdown = $('.nav__dropdown')
    const navLink = $('.nav__link')
    const navItem = $('.nav__item')

    navDropdown.hide();
    $('.user__dropdown').hide();
    $('.alerts__dropdown').hide();
    $('.message__dropdown').hide();


    navLink.click(function () {
        const parent = $(this).parent()
        const dropdown = parent.children('.nav__dropdown')

        $('.nav__item').not(parent).removeClass('nav__item--open')
        $('.nav__dropdown').not(dropdown).hide(animationSpeed)

        parent.toggleClass('nav__item--open')
        dropdown.toggle(animationSpeed)
    });

    $('.header__user--name').click(function () {
        $('.user__dropdown').toggle(animationSpeed)
        $('.alerts__dropdown').hide(animationSpeed)
        $('.message__dropdown').hide(animationSpeed)
    });

    $('.btn').click(function () {
        $('.sidebar').toggleClass('size');
    });

    $('.header__user--alert').click(function () {
        $('.alerts__dropdown').toggle(animationSpeed)
        $('.message__dropdown').hide(animationSpeed)
        $('.user__dropdown').hide(animationSpeed)
    });

    $('.header__user--mail').click(function () {
        $('.message__dropdown').toggle(animationSpeed)
        $('.alerts__dropdown').hide(animationSpeed)
        $('.user__dropdown').hide(animationSpeed)
    });

    $(document).click(function (e) {
        if (!navItem.is(e.target) && navItem.has(e.target).length === 0) {
            navDropdown.hide(animationSpeed);
        }

        // продолжай тут
    })
});