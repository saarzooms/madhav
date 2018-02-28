$(document).ready(function() {
	
	loademailsetting();
	
	$("#emailsetting").on('submit',(function(e){
		e.preventDefault();
		var host = document.getElementById('host').value;
		var port = document.getElementById('port').value;
		var ssl = document.getElementById('ssl').value;
		var tls = document.getElementById('tls').value;
		var username = document.getElementById('username').value;
		var pass = document.getElementById('password').value;
		
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/emailsetting_data.php?host="+host+"&port="+port+"&ssl="+ssl+"&tls="+tls+"&username="+username+"&pass="+pass,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#host').val('');
								$('#port').val('');
								$('#ssl').val('');
								$('#tls').val('');
								$('#username').val('');
								$('#password').val('');
							
								
								$("#msg").html('');
								
								//alert(data);
								$().toastmessage('showSuccessToast',data);
								loademailsetting();
							}
					});
		
	}));
	
	
		
		$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							$("#btn_insert").attr("disabled", "disabled");
							$(".btn_update").removeAttr("disabled", "disabled");
							
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/emailsetting_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#host").val(arr[0]);	
										$("#port").val(arr[1]);	
										$("#ssl").val(arr[2]);	
										$("#tls").val(arr[3]);	
										$("#username").val(arr[4]);	
										$("#password").val(arr[5]);	
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var host = document.getElementById('host').value;
				var port = document.getElementById('port').value;
				var ssl = document.getElementById('ssl').value;
				var tls = document.getElementById('tls').value;
				var username = document.getElementById('username').value;
				var pass = document.getElementById('password').value;
				var typeid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/emailsetting_data.php?host1="+host+"&port1="+port+"&ssl1="+ssl+"&tls1="+tls+"&username1="+username+"&pass1="+pass+"&typeid="+typeid,
							success: function(data)
							{
								$('#host').val('');
								$('#port').val('');
								$('#ssl').val('');
								$('#tls').val('');
								$('#username').val('');
								$('#password').val('');
							
								
								$("#msg").html('');
								
								//alert(data);
								$().toastmessage('showSuccessToast',data);
								loademailsetting();
								
                            $("#btn_insert").removeAttr("disabled", "disabled");
							$(".btn_update").attr("disabled", "disabled");								
								
							}
					});
			
		});
	
});

function loademailsetting()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/emailsetting_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }