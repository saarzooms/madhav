$(document).ready(function() {
	
	loadbasicrate();
	
	$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							
							$(".btn_update").removeAttr("disabled", "disabled");
							
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/basicrate_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#policies").val(arr[0]);	
										$("#basic").val(arr[1]);
										
											
									   $('#premiumrate').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var policies = document.getElementById('policies').value;
				var basic = document.getElementById('basic').value;
				
				
				var custid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/basicrate_data.php?policies="+policies+"&basic="+basic+"&custid="+custid,
							success: function(data)
							{
								$('#premiumrate').hide();
								$(".btn_update").attr("disabled", "disabled");
								$('#policies').val('');
								$('#basic').val('');
								
								
								$("#msg").html('');
								$().toastmessage('showSuccessToast',data);
							loadbasicrate();	
							
								
							}
					});
			
		});
		
});
function loadbasicrate()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/basicrate_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }