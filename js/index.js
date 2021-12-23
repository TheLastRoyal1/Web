$(function () {
    $('.menu').mouseenter(function () {
        $(this).find('.xl').stop(false,true).slideDown(500);
    }).mouseleave(function () {
        $(this).find('.xl').stop(false,true).hide();
    })




})