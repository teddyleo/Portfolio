$.ajax({
	type: "GET",
	url: "getTables.php",
	success: function(msg){
		$( "#createErrorMessage" ).text(msg);
		$( "#createErrorMessage" ).css( "background-color", "red" );
		$( "#createErrorMessage" ).css( "display", "block" );
	}
});