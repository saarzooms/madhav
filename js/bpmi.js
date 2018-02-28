$(document).ready(function() {
	
	loadbpmi();
	
	$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							
							$(".btn_update").removeAttr("disabled", "disabled");
							
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/bpmi_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#itvto").val(arr[0]);	
										$("#itvfrom").val(arr[1]);
										$("#scorefrom").val(arr[2]);
										$("#scoreto").val(arr[3]);
										$("#bpmi").val(arr[4]);
										$("#termfrom").val(arr[5]);
										$("#termto").val(arr[6]);
										
										
											
									   $('#bpmiform').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var itvto = document.getElementById('itvto').value;
				var itvfrom = document.getElementById('itvfrom').value;
				var scorefrom = document.getElementById('scorefrom').value;
				var scoreto = document.getElementById('scoreto').value;
				var bpmi = document.getElementById('bpmi').value;
				var termfrom = document.getElementById('termfrom').value;
				var termto = document.getElementById('termto').value;
				
				
				var custid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/bpmi_data.php?itvto="+itvto+"&itvfrom="+itvfrom+"&scorefrom="+scorefrom+"&scoreto="+scoreto+"&bpmi="+bpmi+"&termfrom="+termfrom+"&custid="+custid,
							success: function(data)
							{
								$('#bpmiform').hide();
								$(".btn_update").attr("disabled", "disabled");
								$('#itvto').val('');
								$('#itvfrom').val('');
								$('#scorefrom').val('');
								$('#scoreto').val('');
								$('#bpmi').val('');
								$('#termfrom').val('');
								$('#termto').val('');
								
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
						url: "ajax/bpmi_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }