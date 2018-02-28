$(document).ready(function() {
	
	
	
	loadtrustedpartner();
	
	$("#partner_form").on('submit',(function(e){
		e.preventDefault();
		
		var photo = document.getElementById('file_attach').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var business = document.getElementById('bus').value;
		var contact = document.getElementById('contact').value;
		var address = document.getElementById('address').value;
		var facebook = document.getElementById('facebook').value;
		var linked = document.getElementById('linked').value;
		var hours = document.getElementById('hours').value;
		var note = document.getElementById('note').value;
		var type = document.getElementById('type').value;
		var twitter = document.getElementById('twitter').value;
		 var check='';
		 var date='';
		if($('#check').is(':checked')){
			check='Yes';
			date = document.getElementById('date').value;
			if(date==''){
			$('#d').html('please select date !!!');
			
			}
		}
		else{
			check='No';
		
		}
		
		
		if(date==''){
			//$('#d').html('please select date !!!');
			date='-';
		}
		
		
		$.ajax({ 
							type: "POST",
							url: "ajax/partner_data.php?photo="+photo+"&email="+email+"&phone="+phone+"&business="+business+"&contact="+contact+"&address="+address+"&facebook="+facebook+"&linked="+linked+"&hours="+hours+"&note="+note+"&type="+type+"&twitter="+twitter+"&check="+check+"&date="+date,
							success: function(data)
							{
								//$('#msg_save').html(data);
								$('#file_attach').val('');
								$('#email').val('');
								$('#uploadFile').val('');
								$('#phone').val('');
								$('#bus').val('');
								$('#contact').val('');
								$('#address').val('');
								$('#facebook').val('');
								$('#linked').val('');
								$('#hours').val('');
								$('#note').val('');
								$('#type').val('');
								$('#twitter').val('');
								$('#check').prop('checked', false); 
								$('#date').val('');
								
								$("#msg").html('');
								$('#container').empty();
								$('#loanform').hide();
								$('#new').show();
								$().toastmessage('showSuccessToast',data);
								loadtrustedpartner();
							}
					});
		
		
	}));
	
	$(document).on("click",".btn_del",function(){	
							
							if(confirm('Are you sure to delete it?')){
								var id = $(this).attr('value');
							//alert(dl_id);
							$.ajax({ 
							type: "POST",
							url: "ajax/partner_data.php?id1="+id,
							success: function(data)
							{
									loadtrustedpartner();
						
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
							$('#excel').hide();
							$('#co_id').val(did2);
							//alert(did2);
							$.ajax({        
										type: "POST",											
										url: "ajax/partner_data.php?did2="+did2,
										dataType: 'json',
										success: function(data){
										$("#container").empty();					
										var arr=eval(data);
										
										$("#file_attach").val(arr[0]);	
										$("#email").val(arr[1]);
										$("#phone").val(arr[2]);
										$("#bus").val(arr[3]);
										$("#contact").val(arr[4]);
										$("#address").val(arr[5]);
										$("#facebook").val(arr[6]);
										$("#linked").val(arr[7]);
										$("#hours").val(arr[8]);
										$("#note").val(arr[9]);
										$("#type").val(arr[10]);
										$("#twitter").val(arr[11]);
										if(arr[12]=='Yes'){
											$('#check').prop('checked', true); 
										}else{
											$('#check').prop('checked', false); 
										}
										if(arr[13]=='0000-00-00'){
											$('#date').val('');
											$('#dt').hide();
										}else{
											$('#date').val(arr[13]);
											$('#dt').show();
										}
										
										
									
										var url = getRootUrl();  
										var img = $('<img />').addClass('img').attr({
														'id': 'myImage',
														'src': url+'material/'+arr[0],
														'width': 100,
																				
														}).appendTo('#container');
														
									   $('#loanform').show();
										
								}
							});				
												
		});
		
		$(document).on("click",".btn_update",function(){
			
			    var photo = document.getElementById('file_attach').value;
				var email = document.getElementById('email').value;
				var phone = document.getElementById('phone').value;
				var business = document.getElementById('bus').value;
				var contact = document.getElementById('contact').value;
				var address = document.getElementById('address').value;
				var facebook = document.getElementById('facebook').value;
				var linked = document.getElementById('linked').value;
				var hours = document.getElementById('hours').value;
				var note = document.getElementById('note').value;
				var type = document.getElementById('type').value;
				var twitter = document.getElementById('twitter').value;
				
				var partnerid=document.getElementById('co_id').value;
				 var check='';
		 var date='';
		if($('#check').is(':checked')){
			check='Yes';
			date = document.getElementById('date').value;
			if(date==''){
			$('#d').html('please select date !!!');
			
			}
		}
		else{
			check='No';
		
		}
		
		
		if(date==''){
			//$('#d').html('please select date !!!');
			date='-';
		}
		
				
				
				$.ajax({ 
							type: "POST",
							url: "ajax/partner_data.php?photo1="+photo+"&email1="+email+"&phone1="+phone+"&business1="+business+"&contact1="+contact+"&address1="+address+"&facebook1="+facebook+"&linked1="+linked+"&hours1="+hours+"&note1="+note+"&partnerid="+partnerid+"&type1="+type+"&twitter1="+twitter+"&check="+check+"&date="+date,
							success: function(data)
							{
								$('#file_attach').val('');
								$('#email').val('');
								$('#uploadFile').val('');
								$('#phone').val('');
								$('#business').val('');
								$('#contact').val('');
								$('#address').val('');
								$('#facebook').val('');
								$('#linked').val('');
								$('#hours').val('');
								$('#note').val('');
								$('#type').val('');
								$('#twitter').val('');
								$('#check').prop('checked', false); 
								$('#date').val('');
								
								$("#msg").html('');
								$('#container').empty();
								$('#loanform').hide();
								$('#new').show();
								$('#excel').show();
								$().toastmessage('showSuccessToast',data);
								loadtrustedpartner();
	
								
                            $("#btn_insert").removeAttr("disabled", "disabled");
							$(".btn_update").attr("disabled", "disabled");								
								
							}
					});
		
			
		});
		
		$(document).on("click",".btn_unfollow",function(){
			
			var partner_id = $(this).attr('value');
			$.ajax({ 
						type: "POST",
						url: "ajax/partner_data.php?partner_id="+partner_id,
						//dataType:'json',
						success: function(data)
						{
							loadtrustedpartner();
						}
				});
			
		});
		$(document).on("click",".btn_follow",function(){
			
			var partner_id = $(this).attr('value');
			$.ajax({ 
						type: "POST",
						url: "ajax/partner_data.php?partner_id1="+partner_id,
						//dataType:'json',
						success: function(data)
						{
							loadtrustedpartner();
						}
				});
			
		});

});
function loadtrustedpartner()
  {
	  var id='all';
	$.ajax({ 
						type: "POST",
						url: "ajax/partner_data.php?id="+id,
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