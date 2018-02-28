$(document).ready(function() {
	loadplan();
	
	$("#plan_form").on('submit',(function(e){
		e.preventDefault();
		var planname = document.getElementById('planname').value;
		var planamount = document.getElementById('planamount').value;
		var planstartdate = document.getElementById('planstartdate').value;
		var signupamount = document.getElementById('signupamount').value;
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/plan_data.php?planname="+planname+"&planamount="+planamount+"&planstartdate="+planstartdate+"&signupamount="+signupamount,
							success: function(data)
							{
								if(data == 'NA'){
									$('#p').html('Plan Name Already Exist !!!');
								}else{
									//$('#msg_save').html(data);
									$('#planname').val('');
									$('#planamount').val('');
									$('#planstartdate').val('');
									$('#signupamount').val('');
									
									
									$("#msg").html('');
									$('#planform').hide();
									$('#new').show();
									$('#p').html('');
									//alert(data);
									$().toastmessage('showSuccessToast',data);
									loadplan();
								}
							}
					});
		
	}));
});
function loadplan()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/plan_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }