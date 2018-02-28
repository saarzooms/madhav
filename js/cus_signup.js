$(document).ready(function() {
	
	$("#signup_Form").on('submit',(function(e){
		e.preventDefault();
		
		var url=window.location.href;
	    var res = url.split("=");
		//alert(res[1]);
		var id=res[1];
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var mobile = document.getElementById('mobile').value;
		var address = document.getElementById('address').value;
		var state = document.getElementById('state').value;
		var zipcode = document.getElementById('zipcode').value;
		var pass = document.getElementById('password').value;
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/customersignup_data.php?name="+name+"&email="+email+"&mobile="+mobile+"&address="+address+"&state="+state+"&zipcode="+zipcode+"&password="+pass+"&id="+id,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#name').val('');
								$('#email').val('');
								$('#mobile').val('');
								$('#address').val('');
								$('#state').val('');
								$('#zipcode').val('');
								$('#password').val('');
								$('#repassword').val('');
								
								
								$().toastmessage('showSuccessToast',data);
								
							}
					});
		
	}));
});