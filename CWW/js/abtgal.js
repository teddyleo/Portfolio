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

        $("#insta").css("width", "550px");
        $("#insta").css("width", $(window).width() * 0.9);
        $("#insta-mob").css("width", $(window).width() * 0.9);

    }

});

$(document).ready(function() {

    if ($(window).width() < 1140) {

        $("#insta").css("width", "550px");
        $("#insta").css("width", $(window).width() * 0.9);
        $("#insta-mob").css("width", $(window).width() * 0.9);

    }

});