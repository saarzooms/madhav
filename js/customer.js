$(document).ready(function() {
	
	loadcustomer();
	
	$("#customer_form").on('submit',(function(e){
		e.preventDefault();
		var officer = document.getElementById('officer').value;
		var salutation = document.getElementById('salutation').value;
		var name = document.getElementById('name').value;
		var Marital = document.getElementById('Marital').value;
		var Spouse = document.getElementById('Spouse').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var credit = document.getElementById('credit').value;
		var address = document.getElementById('address').value;
		var facebook = document.getElementById('facebook').value;
		var state = document.getElementById('state').value;
		var zipcode = document.getElementById('zipcode').value;
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/customer_data.php?officer="+officer+"&salutation="+salutation+"&name="+name+"&Marital="+Marital+"&Spouse="+Spouse+"&email="+email+"&phone="+phone+"&credit="+credit+"&address="+address+"&facebook="+facebook+"&state="+state+"&zipcode="+zipcode,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#officer').val('');
								$('#salutation').val('');
								$('#name').val('');
								$('#Marital').val('');
								$('#Spouse').val('');
								$('#email').val('');
								$('#phone').val('');
								$('#credit').val('');
								$('#address').val('');
								$('#state').val('');
								$('#zipcode').val('');
								$('#facebook').val('');
								
								$("#msg").html('');
								$('#customerform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadcustomer();
							}
					});
		
	}));
	
	$(document).on("click",".btn_del",function(){	
							
							if(confirm('Are you sure to delete it?')){
								var id = $(this).attr('value');
							//alert(dl_id);
							$.ajax({ 
							type: "POST",
							url: "ajax/customer_data.php?id1="+id,
							success: function(data)
							{
									loadcustomer();
						
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
										url: "ajax/customer_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#officer").val(arr[0]);	
										$("#salutation").val(arr[1]);
										$("#name").val(arr[2]);
										$("#Marital").val(arr[3]);
										$("#Spouse").val(arr[4]);
										$("#email").val(arr[5]);
										$("#phone").val(arr[6]);
										$("#credit").val(arr[7]);
										$("#address").val(arr[8]);
										$("#facebook").val(arr[9]);
										$("#state").val(arr[10]);
										$("#zipcode").val(arr[11]);
										
											
									   $('#customerform').show();
										
								}
							});				
												
		});
		
		
		$(document).on("click",".btn_update",function(){
			
			   var officer = document.getElementById('officer').value;
				var salutation = document.getElementById('salutation').value;
				var name = document.getElementById('name').value;
				var Marital = document.getElementById('Marital').value;
				var Spouse = document.getElementById('Spouse').value;
				var email = document.getElementById('email').value;
				var phone = document.getElementById('phone').value;
				var credit = document.getElementById('credit').value;
				var address = document.getElementById('address').value;
				var facebook = document.getElementById('facebook').value;
				var state = document.getElementById('state').value;
		        var zipcode = document.getElementById('zipcode').value;
				
				var custid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/customer_data.php?officer1="+officer+"&salutation1="+salutation+"&name1="+name+"&Marital1="+Marital+"&Spouse1="+Spouse+"&email1="+email+"&phone1="+phone+"&credit1="+credit+"&address1="+address+"&custid="+custid+"&facebook1="+facebook+"&state1="+state+"&zipcode1="+zipcode,
							success: function(data)
							{
								$('#officer').val('');
								$('#salutation').val('');
								$('#name').val('');
								$('#Marital').val('');
								$('#Spouse').val('');
								$('#email').val('');
								$('#phone').val('');
								$('#credit').val('');
								$('#address').val('');
								$('#facebook').val('');
								$('#zipcode').val('');
								$('#state').val('');
								
								$("#msg").html('');
								
								$('#customerform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadcustomer();	
	
								
                            $("#btn_insert").removeAttr("disabled", "disabled");
							$(".btn_update").attr("disabled", "disabled");								
								
							}
					});
			
		});

});
function loadcustomer()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/customer_data.php?id="+id,
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