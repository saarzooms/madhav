$(document).ready(function() {
	
	loadbpmi();
	
	$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							
							$(".btn_update").removeAttr("disabled", "disabled");
							
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/bpmiadjustment_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#name").val(arr[0]);	
										$("#scorefrom").val(arr[1]);
										$("#scoreto").val(arr[2]);
										$("#bpmi").val(arr[3]);
											
									   $('#bpmiadjustmentsform').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var name = document.getElementById('name').value;
				var scorefrom = document.getElementById('scorefrom').value;
				var scoreto = document.getElementById('scoreto').value;
				var bpmi = document.getElementById('bpmi').value;
				
				var custid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/bpmiadjustment_data.php?name="+name+"&scorefrom="+scorefrom+"&scoreto="+scoreto+"&bpmi="+bpmi+"&custid="+custid,
							success: function(data)
							{
								$('#bpmiadjustmentsform').hide();
								$(".btn_update").attr("disabled", "disabled");
								$('#name').val('');
								$('#scorefrom').val('');
								$('#scoreto').val('');
								$('#bpmi').val('');
								
								
								$("#msg").html('');
								$().toastmessage('showSuccessToast',data);
								loadbpmi();	
							
								
							}
					});
			
		});
		
});
function loadbpmi()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/bpmiadjustment_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }