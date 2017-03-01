var minSlide = 1;
var maxSlide = 5;
var slideIndex = minSlide;
var timeOut;

$("#menu").click(function() {

    $(".menu-items").show("fast");
    $("#menu").hide();
    $("#menu2").show();

});

$("#menu2").click(function() {

    $(".menu-items").hide("fast");
    $("#menu").show();
    $("#menu2").hide();

});

$(document).ready(function() {
    $('#front-photos').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        arrows: true,
        autoplay: true,
        variableWidth: true,
        dragable: false
    });
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
    $(".slick-list").css("width", $(window).width());
    $(".slick-slide").css("height", $(window).height() * 0.74);
});

$(window).resize(function() {
    $(".slick-list").css("width", $(window).width());
    $(".slick-slide").css("height", $(window).height() * 0.74);
});

$(document).ready(function() {

    carousel();

});

function show_images() {

    $(".uil-ring-css").hide("fast");
    $(".content").show("fast");

}

window.onload = show_images;

function carousel() {

    var i;
    var x = document.getElementsByClassName("img");
    for (i = 0; i < x.length; i++) {

        $(x[i]).fadeTo("slow", 0.5);

    }
    $(x[slideIndex - 1]).fadeTo("fast", 1);

    slideIndex += 1;
    if (slideIndex > maxSlide) slideIndex = minSlide;
    timeOut = setTimeout(carousel, 1500);

}