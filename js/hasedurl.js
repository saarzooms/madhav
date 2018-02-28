$(document).ready(function() {
	
	loadurl();
	
	$("#hased_form").on('submit',(function(e){
		e.preventDefault();
	
	//	var url='http://loan-calculator.xcartadesigns.com/#/loan-calculator/';
		var url=getRootUrl();
		
		//alert(url);
		
		$.ajax({
		 
							type: "POST",
							url: "ajax/hasedurl_data.php?url="+url,
							success: function(data)
							{
								//$('#msg_save').html(data);
								
								$('#customerform').hide();
								$('#new').show();
								//alert(data);
								$().toastmessage('showSuccessToast',data);
								loadurl();
							}
					});
		
	})); 
	
});

function loadurl()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/hasedurl_data.php?id="+id,
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