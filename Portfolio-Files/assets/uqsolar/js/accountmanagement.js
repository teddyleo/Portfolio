			function postCreate(){
				if(!$('#userncr').val() || !$('#passcr').val() || !$('#passfcr').val()  || !$('#emailcr').val() || !$('input[name=permission]').is(':checked')) {
					if(!$('#userncr').val()) {
						$('#userncr').addClass('placecolor');
						$('#userncr').attr("placeholder", "Please enter a username");
					}
					if(!$('#passcr').val()) {
						$('#passcr').addClass('placecolor');
						$('#passcr').attr("placeholder", "Please enter a password");
					}
					if(!$('#passfcr').val()) {
						$('#passfcr').addClass('placecolor');
						$('#passfcr').attr("placeholder", "Please enter a password");
					}
					if(!$('#emailcr').val()) {
						$('#emailcr').addClass('placecolor');
						$('#emailcr').attr("placeholder", "Please enter an email address");
					}
					if(!$('input[name=permission]').is(':checked')) {
						$('#createradio').css("color", "red");
					}
				}
				else {
					$.ajax({
						type: "POST",
						url: "php/account.php",
						data: { user: $('#userncr').val(), pass: $('#passcr').val(), email: $('#emailcr').val(), perm: $('input[name=permission]:checked').val(), action: "create" },
						success: function(msg){
							if(msg != "Pass") {
								$( "#createErrorMessage" ).text(msg);
								$( "#createErrorMessage" ).css( "background-color", "red" );
								$( "#createErrorMessage" ).css( "display", "block" );
							}
							else {
								$( "#createErrorMessage" ).text("Account successfully created");
								$( "#createErrorMessage" ).css( "background-color", "green" );
								$( "#createErrorMessage" ).css( "display", "block" );
							}
						}
					});
				}
			}