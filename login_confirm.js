	
		jQuery(window).ready(function(){
			$('#email,#password').css({"background-color":"#272822","transition-delay":"2s","transition-duration":"10s"});

			// var div=$('div');
			// div.animate({width: '200px', opacity: '0.7'}, "slow");
			// div.animate({height: '300px', opacity: '0.4'}, "slow");
   // 			div.animate({width: '300px', opacity: '0.8'}, "slow");
   //  		div.animate({height: '100px', opacity: '0.4'}, "slow");
   //  		div.animate({width: '250px', opacity: '0.8'}, "slow");
		});

		
		jQuery(document).ready(function(){
			$('#submit').click(function(){
				var email=$('#email').val();
				if($('#email').val()=="" || $('#password').val()=="")
				{
					alert("The field is empty");
				}
				else if($('#email').val()!="" && $('#password').val()!=""){
					alert("field full");
				}
			});
		});

	