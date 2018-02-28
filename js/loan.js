$(document).ready(function() {
	
	loadloanofficer();
	
	$("#loan_form").on('submit',(function(e){
		e.preventDefault();
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var photo = document.getElementById('file_attach').value;
		var phone = document.getElementById('phone').value;
		var address = document.getElementById('address').value;
		var state = document.getElementById('state').value;
		var zipcode = document.getElementById('zipcode').value;
		var lender = document.getElementById('lender').value;
		var pass = document.getElementById('password').value;
		var hear='NA';
		
		//alert(cat_nm+","+cat_pos+","+file_attach+","+color);
		$.ajax({ 
							type: "POST",
							url: "ajax/loanofficer_data.php?name="+name+"&email="+email+"&photo="+photo+"&phone="+phone+"&address="+address+"&state="+state+"&zipcode="+zipcode+"&lender="+lender+"&password="+pass+"&hear="+hear,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#name').val('');
								$('#email').val('');
								$('#uploadFile').val('');
								$('#file_attach').val('');
								$('#phone').val('');
								$('#address').val('');
								$('#state').val('');
								$('#zipcode').val('');
								$('#lender').val('');
								$('#password').val('');
								$('#repassword').val('');
								
								$("#msg").html('');
								$('#container').empty();
								$('#loanform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadloanofficer();
							}
					});
		
	}));
	
	$(document).on("click",".btn_del",function(){	
							
							if(confirm('Are you sure to delete it?')){
								var id = $(this).attr('value');
							//alert(dl_id);
							$.ajax({ 
							type: "POST",
							url: "ajax/loanofficer_data.php?id1="+id,
							success: function(data)
							{
									loadloanofficer();
						
							}
						});	
								
							}
							else{
								
							}								
		});
		
		
		$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							$("#btn_insert").attr("disabled", "disabled");
							$(".btn_update").removeAttr("disabled", "disabled");
							$('#new').hide();
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/loanofficer_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){
										$("#container").empty();					
										var arr=eval(data);
										
										$("#name").val(arr[0]);	
										$("#email").val(arr[1]);
										$("#file_attach").val(arr[2]);
										$("#phone").val(arr[3]);
										$("#address").val(arr[4]);
										$("#state").val(arr[5]);
										$("#zipcode").val(arr[6]);
										$("#lender").val(arr[7]);
										$("#password").val(arr[8]);
										$("#repassword").val(arr[8]);
										
										var url = getRootUrl();  
										var img = $('<img />').addClass('img').attr({
														'id': 'myImage',
														'src': url+'material/'+arr[2],
														'width': 100,
																				
														}).appendTo('#container');
														
									   $('#loanform').show();
										
								}
							});				
												
		});
		
		
		$(document).on("click",".btn_update",function(){
			
			    var name = document.getElementById('name').value;
				var email = document.getElementById('email').value;
				var photo = document.getElementById('file_attach').value;
				var phone = document.getElementById('phone').value;
				var address = document.getElementById('address').value;
				var state = document.getElementById('state').value;
				var zipcode = document.getElementById('zipcode').value;
				var lender = document.getElementById('lender').value;
				var pass = document.getElementById('password').value;
				
				var id=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/loanofficer_data.php?name1="+name+"&email1="+email+"&photo1="+photo+"&phone1="+phone+"&address1="+address+"&state1="+state+"&zipcode1="+zipcode+"&lender1="+lender+"&password1="+pass+"&loanid="+id,
							success: function(data)
							{
								$('#name').val('');
								$('#email').val('');
								$('#uploadFile').val('');
								$('#file_attach').val('');
								$('#phone').val('');
								$('#address').val('');
								$('#state').val('');
								$('#zipcode').val('');
								$('#lender').val('');
								$('#password').val('');
								$('#repassword').val('');
								
								$("#msg").html('');
								$('#container').empty();
								$('#loanform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadloanofficer();	
	
								
                            $("#btn_insert").removeAttr("disabled", "disabled");
							$(".btn_update").attr("disabled", "disabled");								
								
							}
					});
			
		});

});
function loadloanofficer()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/loanofficer_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }
 function getRootUrl() {
	return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
}