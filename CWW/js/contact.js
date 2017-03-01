$('.contact-form').submit(function comment(e) {

    e.preventDefault();

    var form = new FormData($('#comment-form')[0]);
    form.append('view_type', 'addtemplate');
    $.ajax({
        type: "POST",
        url: "php/comment.php",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(x) {

            if (x) {

                if (x == 'nameError') {

                    $("#form-text").text("Please provide a valid name.");
                    $("#name").focus();

                } else if (x == 'emailError') {

                    $("#form-text").text("Please provide a valid email.");
                    $("#email").focus();

                } else if (x == 'webError') {

                    $("#form-text").text("Please provide a valid website. (www.example.com)");
                    $("#website").focus();

                } else if (x == 'mailError') {

                    $("#form-text").text("Message could not be sent, please try again later.");
                    $("#comment-form").css("display", "none");

                } else if (x) {

                    $("#form-text").text("Unexpected Error: " + x);
                    $("#comment-form").css("display", "none");

                }

            } else {

                $("#form-text").text("Thank you for your message!");
                $("#comment-form").css("display", "none");

            }

        }
    });

});

function showForm() {

    $(".form-box").show("fast");
    $("#up-button").show("fast");
    $("#down-button").hide("fast");

}

function hideForm() {

    $(".form-box").hide("fast");
    $("#up-button").hide("fast");
    $("#down-button").show("fast");

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