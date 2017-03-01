$(document).scroll(function() {

    if ($(window).width() > 1140) {

        if ($(window).scrollTop() < 200) {
            $(".btt").hide("fast");
        } else {
            $(".btt").show("fast");
        }

    }

});