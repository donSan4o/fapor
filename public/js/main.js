$(document).ready(initPage);

function initPage() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".mobile-menu").click(function() {
        $('nav').slideToggle();
        if ($(this).hasClass("cross")) {
            $(this).removeClass("cross");

        } else {
            $(this).addClass("cross");

        }
        return false;
    });
}
// Custom Functions