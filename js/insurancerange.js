$(document).ready(function() {
	
	loadinsurangerange();
	
	$(document).on("click",'.btn_up',function(){	
		
							var did2 = $(this).attr('value');
							
							$(".btn_update").removeAttr("disabled", "disabled");
							
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/insurancerange_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){//alert(data);
														
										var arr=eval(data);
										
										$("#rangefrom").val(arr[0]);	
										$("#rangeto").val(arr[1]);
										$("#sub").val(arr[2]);
										$("#mul").val(arr[3]);
										$("#add").val(arr[4]);
											
									   $('#insurancerange').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			   var rangefrom = document.getElementById('rangefrom').value;
				var rangeto = document.getElementById('rangeto').value;
				var sub = document.getElementById('sub').value;
				var mul = document.getElementById('mul').value;
				var add = document.getElementById('add').value;
				
				var custid=document.getElementById('co_id').value;
				//alert(dept+""+dt+""+dt_id);
				
				$.ajax({ 
							type: "POST",
							url: "ajax/insurancerange_data.php?rangefrom="+rangefrom+"&rangeto="+rangeto+"&mul="+mul+"&sub="+sub+"&add="+add+"&custid="+custid,
							success: function(data)
							{
								$('#insurancerange').hide();
								$(".btn_update").attr("disabled", "disabled");
								$('#rangefrom').val('');
								$('#rangeto').val('');
								$('#sub').val('');
								$('#mul').val('');
								$('#add').val('');
								
								$("#msg").html('');
								$().toastmessage('showSuccessToast',data);
								loadinsurangerange();	
							
								
							}
					});
			
		});
		
});
function loadinsurangerange()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/insurancerange_data.php?id="+id,
						//dataType:'json',
						success: function(data)
						{
							$('#table_data').html(data);
						}
				});
  }