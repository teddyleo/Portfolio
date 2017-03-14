// $(document).ready(function(){

// 	if($(window).width() > 1180){

// 		$(".navbar").show();
// 		$(".footer").show();
// 		$("#front-photos1").show();
// 		$("#front-photos").hide();
// 		$(".mobnavbar").hide();
// 		$(".mobfooter").hide();

// 	} else {

// 		$(".navbar").hide();
// 		$(".footer").hide();
// 		$("#front-photos1").hide();
// 		$("#front-photos").show();
// 		$(".mobnavbar").show();
// 		$(".mobfooter").show();

// 	}

// });

$(window).resize(function() {

    if ($(window).width() > 1180) {

        $(".navbar").show();
        $(".footer").show();
        $(".content table").show();
        $("#front-photos").hide();
        $(".mobnavbar").hide();
        $(".mobfooter").hide();

    } else {

        $(".navbar").hide();
        $(".footer").hide();
        $(".content table").hide();
        $("#front-photos").show();
        $(".mobnavbar").show();
        $(".mobfooter").show();

    }

});