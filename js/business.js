$(document).ready(function() {
	
	loadbusinesstype();
	
	$("#business_form").on('submit',(function(e){
		e.preventDefault();
		var type = document.getElementById('type').value;
		
		
		
		//alert(state+","+zipcode+");
		$.ajax({ 
							type: "POST",
							url: "ajax/business_data.php?type="+type,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#type').val('');
							
								
								$("#msg").html('');
								$('#businessform').hide();
								$('#new').show();
								//alert(data);
								$().toastmessage('showSuccessToast',data);
								loadbusinesstype();
							}
					});
		
	}));
	
	$(document).on("click",".btn_del",function(){	
							
							if(confirm('Are you sure to delete it?')){
								var id = $(this).attr('value');
							//alert(dl_id);
							$.ajax({ 
							type: "POST",
							url: "ajax/business_data.php?id1="+id,
							success: function(data)
							{
									loadbusinesstype();
						
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
										url: "ajax/business_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#type").val(arr[0]);	
										
										
											
									   $('#businessform').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var type = document.getElementById('type').value;
				
				
				var typeid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/business_data.php?type1="+type+"&typeid="+typeid,
							success: function(data)
							{
								$('#type').val('');
								
								$("#msg").html('');
								
								$('#businessform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadbusinesstype();	
	
								
                            $("#btn_insert").removeAttr("disabled", "disabled");
							$(".btn_update").attr("disabled", "disabled");								
								
							}
					});
			
		});
	
});

function loadbusinesstype()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/business_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }