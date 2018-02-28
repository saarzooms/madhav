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
   
   <style>
   .sub_panel_heading {width:100%; height:auto; float:left; border:1px solid #cfdbe2; border-top-width:3px; padding:25px 25px 10px 25px; margin-top:15px; border-radius:4px;}
   .button_change {margin-top:26px;}
   .add_btn {float:right;}
   </style>
</head>

<body>
   <div class="wrapper">
   <?php include('header.php');?>
   <!-- Main section-->
   <section>
    <div class="content-wrapper">
					<div class="clearfix">
						<div class="pull-left">
							<h3>New Project Entry</h3>
						</div>
          </div>  
            <!-- START row-->
            <div class="row">
               <div class="col-md-12">
                  <form method="post" action="#" id="project_form">
                     <!-- START panel-->
                     <div class="panel panel-default" id="loanform">
                        <div class="panel-heading">
                           <div class="panel-title">Material</div>
                          	  <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Select Prject Idetifier *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Activity 1">Activity 1</option>
                                                    <option value="Activity 2">Activity 2</option>
                                                    <option value="Activity 3">Activity 3</option>   
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Enter Uploading Location *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Uploading 	 	 												 	 	 									Location*"oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Enter Site Postal Address *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Site Postal Address*" 	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Supplier Name *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Supplier Name*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Supplier Address *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Supplier Address*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Transporter Name *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Transporter Name*" 	 	 												 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Transporter LR No *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Transporter LR No*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Vehical No *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Vehical No*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Received By *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Received By*" 	 	 												 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Verified By *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Verified By*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Receipt Date *</label>
                                              <input type="date" name="Designation" id="Designation" class="form-control" placeholder="Enter Receipt Date*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Before Uploading Pics *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Unload Material Pics *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Material Location Thru Gmap *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Challen/Invoice *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Class *</label>
                              					<select name="material_class" id="material_class" class="form-control m-b" required>
                                                <option value="0" disabled selected>--Select Class--</option>
                                                    <option value="1" >Pre-Planned</option>
                                                    <option value="2" >Local Purchase</option>   
                             					</select>
                                           </div>
                                        </div>
                            		</div>
                                    
                             <div id="pre_planned" style="display:none;">       
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Part Code *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Part Code*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Description *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Description*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Category *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Category*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Ask For Qty *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Ask For Qty*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Show UOM *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Show UOM*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Remark *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Remark*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Manual Alarm *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Ask For Qty*"	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                            </div>
                            
                            <div id="local_purchase" style="display:none;">        
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Name*"	 	 												  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Class *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="BOQ">BOQ</option>
                                                    <option value="Fixed Asset">Fixed Asset</option>
                                                    <option value="Consumable">Consumable</option>
                                                    <option value="Other">Other</option>  
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Description *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Description*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Specification *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Specification*"			 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Make *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Make*"	 	 												  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Qty *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Qty*"	 	 	 											 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">UOM *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter UOM*"			 													 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Supplier *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Supplier*"	 	 												  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Purchased By *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Purchased By*"	 	 		 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Approved By *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter UOM*"			 													 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Rate *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Supplier*"	 	 												  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Invoice Scan Copy *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Material Photo For Each Item *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
										</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">System Will Generate Material ID For Each Item *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Supplier*"	 	 												  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                             </div>
                                </div>
                                <div class="col-md-12">
                                    <center> 
                                        <button type="submit" id="btn_insert" class="btn btn-primary button_change">Save</button>													
                                        <button type="button" class="btn btn-primary btn_update button_change" disabled>Update</button>	
                                        <button type="button" class="btn btn-primary btn_cancel button_change">Cancel</button>	
                                        <input type="hidden" id="co_id" value=""/>
                                    </center>
                                </div>
                        </div>    
                     </div>                  
 				</form> 
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
      <script src="js/custome.js"></script> 
</body>

</html>