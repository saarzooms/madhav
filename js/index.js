$(document).ready(function() {
	 var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/index_data.php?id="+id,
						dataType:'json',
						success: function(data)
						{
							var arr=eval(data);
							if(arr[0] == 'Admin'){
								$('#loan').html(arr[1]);
								$('#cust').html(arr[2]);
								$('#part').html(arr[3]);
								$('#bus').html(arr[4]);
							}else if(arr[0] == 'Loanofficer'){
								$('#cust').html(arr[1]);
								$('#part').html(arr[2]);
								
							}else{
								
							}
							
						}
				});
});