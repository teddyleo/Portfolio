function postLogin(){
				if(!$('#usern').val() || !$('#pass').val()) {
					if(!$('#usern').val()) {
						$('#usern').addClass('placecolor');
						$('#usern').attr("placeholder", "Please enter a username");
					}
					if(!$('#pass').val()) {
						$('#pass').addClass('placecolor');
						$('#pass').attr("placeholder", "Please enter a password");
					}
				}
				else {
					$.ajax({
						type: "POST",
						url: "php/account.php",
						data: { user: $('#usern').val(), pass: $('#pass').val(), action: "login"},
						success: function(msg){
							if(msg != "Pass") {
								$( "#loginErrorMessage" ).css( "display", "block" );
							}
							else {
								window.location.href = "management.html";
							}
						}
					});
				}
			}