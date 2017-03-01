function show_images() {

    $(".uil-ring-css2").hide("fast");
    $("#photos").show("fast");
    $("#photos2").show("fast");

}

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

$(window).resize(function() {
    if ($(window).width() < 1140) {
        $(".slick-list").css("width", $(window).width() * 0.94);
        $(".slick-slide").css("height", $(window).height() * 0.4);
        $(".reelframe").height($(".reelframe").width() * 0.60);
    }
});

window.onload = show_images;

$(document).ready(function() {
    $('#photos').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: true,
        dragable: false
    });
});

$(document).ready(function() {
    $('#photos2').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: true,
        dragable: false
    });
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
    if ($(window).width() < 1140) {
        $(".slick-list").css("width", $(window).width() * 0.94);
        $(".slick-slide").css("height", $(window).height() * 0.4);
        $(".reelframe").height($(".reelframe").width() * 0.60);
    }
});

$(window).resize(function() {});

$(document).scroll(function() {
    if ($(window).scrollTop() < 100) {
        $(".share").hide();
        $(".middle").width("700px");
    } else {
        $(".share").show("fast");
        $(".middle").width("1140px");
    }
});