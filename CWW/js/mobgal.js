$(document).ready(function(){
	
	if($(window).width() > 1180){
		
		$(".navbar").show();
		$(".footer").show();
		$(".mobnavbar").hide();
		$(".mobfooter").hide();
		
	} else {
		
		$(".navbar").hide();
		$(".footer").hide();
		$(".mobnavbar").show();
		$(".mobfooter").show();
		
	}
		
});

$( window ).resize(function() {
	
	if($(window).width() > 1180){

		$(".navbar").show();
		$(".footer").show();
		$(".mobnavbar").hide();
		$(".mobfooter").hide();

	} else {
		
		$(".navbar").hide();
		$(".footer").hide();
		$(".mobnavbar").show();
		$(".mobfooter").show();
		
	}
	
});