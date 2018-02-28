<?php
include('db/connection.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <meta name="description" content="Bootstrap Admin App + jQuery">
   <meta name="keywords" content="app, responsive, jquery, bootstrap, dashboard, admin">
   <title>Loan Officer</title>
   <!-- =============== VENDOR STYLES ===============-->
   <!-- FONT AWESOME-->
   <link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.min.css">
   <!-- SIMPLE LINE ICONS-->
   <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
   <!-- ANIMATE.CSS-->
   <link rel="stylesheet" href="vendor/animate.css/animate.min.css">
   <!-- WHIRL (spinners)-->
   <link rel="stylesheet" href="vendor/whirl/dist/whirl.css">
   <!-- DATATABLES-->
   <link rel="stylesheet" href="vendor/datatables-colvis/css/dataTables.colVis.css">
   <link rel="stylesheet" href="vendor/datatables/media/css/dataTables.bootstrap.css">
   <link rel="stylesheet" href="vendor/dataTables.fontAwesome/index.css">
   <!-- =============== PAGE VENDOR STYLES ===============-->
   <!-- WEATHER ICONS-->
   <link rel="stylesheet" href="vendor/weather-icons/css/weather-icons.min.css">
   <!-- =============== BOOTSTRAP STYLES ===============-->
   <link rel="stylesheet" href="app/css/bootstrap.css" id="bscss">
   <!-- =============== APP STYLES ===============-->
   <link rel="stylesheet" href="app/css/app.css" id="maincss">
   <!-- =============== Toast Message ===============-->
   <link rel="stylesheet" href="toastmessage/css/jquery.toastmessage.css" id="maincss">
</head>

<body>
   <div class="wrapper">
   <?php include('header.php');?>
   <!-- Main section-->
   <section>
    <div class="content-wrapper">
					<div class="clearfix">
						<div class="pull-left">
							<h3>Loan Officer's List</h3>
						</div>
						<div class="pull-right">
						<button type="button" class="btn btn-primary" id="new"><em class="fa fa-plus"></em> Loan Officer</button>		
						</div>
          </div>  
            <!-- START row-->
            <div class="row">
               <div class="col-md-12">
                  <form method="post" action="#" id="loan_form">
                     <!-- START panel-->
                     <div class="panel panel-default" id="loanform" style="display:none;">
                        <div class="panel-heading">
                           <div class="panel-title">New Loan Officer</div>
                        </div>
                        <div class="panel-body">
													<div class="col-md-12">
													<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Name *</label>
                              <input type="text" name="name" id="name" class="form-control" placeholder="Enter Name*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
									      <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Email Address *</label>
                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Email*" oninvalid="this.setCustomValidity('please enter Email')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
									      <div class="col-md-2">
                           <div class="form-group">
                              <label for="user name">Select Photo:</label>
                              <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid="this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
															<input type="hidden" id="file_attach" value=""/>
															<div id="msg"></div>
											     </div>
                        </div>
						            <div class="col-md-2">
													<div id="container"></div>
												</div>
												</div>
												<div class="col-md-12">
												<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Phone *</label>
                              <input type="text" name="phone" id="phone" class="form-control" maxlength="10" placeholder="Enter Phone*" oninvalid="this.setCustomValidity('please enter Phone')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
									      <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Address *</label>
                              <textarea type="text" name="address" id="address" class="form-control" placeholder="Enter Address*" oninvalid="this.setCustomValidity('please enter Address')" onchange="this.setCustomValidity('')" required></textarea>
                           </div>
						              </div>
												<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">State *</label>
                              <select name="state" id="state" class="form-control m-b" oninvalid="this.setCustomValidity('please select state')" onchange="this.setCustomValidity('') required>
																		<option value="" selected disabled >---Select State---</option>
																	<?php
																	$sql = "select * from state_table";
																	foreach ($dbh->query($sql) as $row)
																	{
																		?>
																		 <option value="<?php echo $row['state_name'];?>"><?php echo $row['state_name'];?></option>
																		<?php
																	}
																	?>
                                
                             </select>
                           </div>
						              </div>
									  </div>
									  <div class="col-md-12">
									      <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">ZIP code *</label>
                              <input type="text" name="zipcode" id="zipcode" class="form-control" maxlength="6" placeholder="Enter ZIP code*" oninvalid="this.setCustomValidity('please enter ZIP code')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
									       <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Lender</label>
                              <input type="text" name="lender" id="lender" class="form-control" placeholder="Enter Lender">
                           </div>
						              </div> 
									      <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Password *</label>
                              <input type="password" name="password" id="password" class="form-control" placeholder="Enter Password*" oninvalid="this.setCustomValidity('please enter password')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
									  <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Re-enter Password *</label>
                              <input type="password" name="repassword" id="repassword" class="form-control" placeholder="Re-enter Password*" oninvalid="this.setCustomValidity('please enter Re-enter Password')" onchange="this.setCustomValidity('');checkpass();" required>
																<label for="repassword" id="co" style="color:red;"></label>
                           </div>
						              </div>
									  </div>
						         
                    <div class="col-md-12">
															<div class="col-md-4"></div>
                              <div class="col-md-4">
                                <center> 
																		<button type="submit" id="btn_insert" class="btn btn-primary">Save</button>													
																		<button type="button" class="btn btn-primary btn_update" disabled>Update</button>	
																		<button type="button" class="btn btn-primary btn_cancel">Cancel</button>	
																		<input type="hidden" id="co_id" value=""/>
								                </center>
                              </div>
							                <div class="col-md-4"></div>
					          </div>       
                 </div>
					   </div>
					   </form>
                        <div class="panel-footer">
                           <div class="table-responsive" id="table_data">
															
                           </div>
                        </div>
                     </div>
                     <!-- END panel-->
                 
               </div>
			  </div>
	
</section>
   <?php include('footer.php');?>
   </div>
   <!-- =============== VENDOR SCRIPTS ===============-->
   <!-- MODERNIZR-->
   <script src="vendor/modernizr/modernizr.custom.js"></script>
   <!-- MATCHMEDIA POLYFILL-->
   <script src="vendor/matchMedia/matchMedia.js"></script>
   <!-- JQUERY-->
   <script src="vendor/jquery/dist/jquery.js"></script>
   <!-- BOOTSTRAP-->
   <script src="vendor/bootstrap/dist/js/bootstrap.js"></script>
   <!-- STORAGE API-->
   <script src="vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
   <!-- JQUERY EASING-->
   <script src="vendor/jquery.easing/js/jquery.easing.js"></script>
   <!-- ANIMO-->
   <script src="../vendor/animo.js/animo.js"></script>
   <!-- SLIMSCROLL-->
   <script src="vendor/slimScroll/jquery.slimscroll.min.js"></script>
   <!-- SCREENFULL-->
   <script src="vendor/screenfull/dist/screenfull.js"></script>
   <!-- LOCALIZE-->
   <script src="vendor/jquery-localize-i18n/dist/jquery.localize.js"></script>
   <!-- RTL demo-->
   <script src="app/js/demo/demo-rtl.js"></script>
    <!-- =============== Toast Message ===============-->
 <script type="text/javascript" src="toastmessage/javascript/jquery.toastmessage.js"></script>
 
   <!-- =============== APP SCRIPTS ===============-->
   <script src="app/js/app.js"></script>
   <script type="text/javascript" src="app/js/AjaxFileUpload.js"></script>
<!-- DATATABLES-->
   <script src="vendor/datatables/media/js/jquery.dataTables.min.js"></script>
   <script src="vendor/datatables-colvis/js/dataTables.colVis.js"></script>
   <script src="vendor/datatables/media/js/dataTables.bootstrap.js"></script>
   <script src="vendor/datatables-buttons/js/dataTables.buttons.js"></script>
   <script src="vendor/datatables-buttons/js/buttons.bootstrap.js"></script>
   <script src="vendor/datatables-buttons/js/buttons.colVis.js"></script>
   <script src="vendor/datatables-buttons/js/buttons.flash.js"></script>
   <script src="vendor/datatables-buttons/js/buttons.html5.js"></script>
   <script src="vendor/datatables-buttons/js/buttons.print.js"></script>
   <script src="vendor/datatables-responsive/js/dataTables.responsive.js"></script>
   <script src="vendor/datatables-responsive/js/responsive.bootstrap.js"></script>
   <script src="app/js/demo/demo-datatable.js"></script>   
   <script type="text/javascript" src="js/loan.js"></script>	
   <script type="text/javascript">
 
    $(document).ready(function() {
    $(document).on("click","#new",function(){
		$('#loanform').show();
		$('#new').hide();
	}); 
	$(document).on("click",".btn_cancel",function(){
		$('#loanform').hide();
		$('#new').show();
		$("#btn_insert").removeAttr("disabled", "disabled");
		$(".btn_update").attr("disabled", "disabled");
		$('#name').val('');
		$('#email').val('');
		$('#uploadFile').val('');
		$('#file_attach').val('');
		$('#phone').val('');
		$('#address').val('');
		$('#state').val('');
		$('#zipcode').val('');
		$('#lender').val('');
		$('#password').val('');
		$('#repassword').val('');
		$('#container').empty();
	});
	$('#uploadFile').ajaxfileupload({
  //'action' : 'callAction',
  'action' : 'ajax/upload.php',
  'onStart': function() {$("#msg").html("<font color='red'><i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>Please wait file is uploading.....</font>"); },
  'onComplete' : function(response) {
	 // alert(response);
      if(response==''){
          $("#msg").html("<font color='red'>"+"Error in file upload"+"</font>");
      }else{
          // $("#message").html("<font color='green'>"+"file upload successfully"+"</font>");
           var res=response.split("/");
           $("#file_attach").val(response);
           $("#msg").html("<font color='green'>"+res[2]+"</font>");
		   $('#container').empty();
		   var url = getRootUrl();  
		   var img = $('<img />').addClass('img').attr({
						'id': 'myImage',
						//'src': url+'material/'+response,
						'src': response,
						'width': 100,
												
						}).appendTo('#container');
      } 

    }});
  });
  function checkpass()
		{
			
			var new_pass = document.getElementById('password').value;
			var con_pass = document.getElementById('repassword').value;
			
			if(new_pass == con_pass)
			{
				$('#co').html('');
			}
			else
			{
				$('#co').html('confirm password do not match !!!');
				$('#repassword').val('');
			}							
							
		}
</script>  
</body>

</html>