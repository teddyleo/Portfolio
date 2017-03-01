$(window).load(function(){

	if($(window).width() > 1020) {
		
		$("#1").show();
		
	} else if ($(window).width() > 760) {
		
		$("#2").show();
		
	} else {
		
		$("#3").show();
		
	}

});

console.log("hi");