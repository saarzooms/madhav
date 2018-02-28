$(document).ready(function() {
	$("#email_form").on('submit',(function(e){
		e.preventDefault();
		var name = document.getElementById('name').value;
		var email = document.getElementById('senderemail').value;
		var subject = document.getElementById('subject').value;
		var txtEditor = $('.Editor-editor').text();
		
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/email_data.php?name="+name+"&email="+email+"&subject="+subject+"&txtEditor="+txtEditor,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#name').val('');
								$('#email').val('');
								$('#subject').val('');
								$('.Editor-editor').html('');
							
								
								$("#msg").html('');
								
								$().toastmessage('showSuccessToast',data);
							}
					});
		
	}));
});