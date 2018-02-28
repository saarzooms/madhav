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
   .sub_panel_heading {width:100%; height:auto; float:left; border:1px solid #cfdbe2; border-top-width:3px; padding:25px 25px 10px 25px; margin-top:15px; border-radius:4px; margin-bottom:15px;}
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
							<h3>Machine Log Book</h3>
						</div>
          </div>  
            <!-- START row-->
            <div class="row">
               <div class="col-md-12">
                  <form method="post" action="#" id="project_form">
                     <!-- START panel-->
                     <div class="panel panel-default" id="loanform">
                        <div class="panel-heading">
                           <div class="panel-title"></div>
                        </div>
                        <div class="panel-body">
							<div class="col-md-12">
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Machine Name *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Machine Name*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
								<div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Machine Photo *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Scan Copy of Papers *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="RC">RC</option>
                                                    <option value="Pollution">Pollution</option>
                                                    <option value="Insurance">Insurance</option>
                                                    <option value="DL">DL</option>
                                                    <option value="License">License</option>      
                             					</select>
                                           </div>
                                        </div>
                            </div>
                            
                            <div class="col-md-12">
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Scan Copy of Safety Checklist *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Project Location*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Entry Date *</label>
                              <input type="date" name="text" id="pdesc" class="form-control" placeholder="Enter Client Name*" oninvalid="this.setCustomValidity('please enter Email')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
                            </div>
                            
                            <!--Operator Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Operator Detail</div>              
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Name*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Photo *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhar Card *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Aadhar Card*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            	</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">DL *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter DL*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Emergency Contact Number *</label>
                                              <input type="text" name="staffid" id="staffid" class="form-control" placeholder="Enter Emergency Contact Number*"	 		 	 									oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Employer *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Employer*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            	</div>
                                </div>
                            </div>
                            </div>
                            <!--Operator Detail Start-->
                          
                          	<div class="col-md-12">
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Machine Supplier *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Machine Supplier*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
                                <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Validity Date of Each Document *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Pollution">Pollution</option>
                                                    <option value="Insurance">Insurance</option>
                                                    <option value="License">License</option>     
                             					</select>
                                           </div>
                                        </div>
                                <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Remark *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Remark*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
                            </div>
                            
                            <!--Machine Rental Cost Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Machine Rental Cost</div>              
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">1st Hour *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Name*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Consecutive Hours *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Daily Normal Hours *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Aadhar Card*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            	</div>
                                
                                <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Overtime *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Normal operative Dates in a Month*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Monthly Rental *</label>
                                              <input type="text" name="staffid" id="staffid" class="form-control" placeholder="Enter Monthly Rental*"	 		 	 									oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Daily Rental *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Daily Rental*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
								</div>
                                
                                <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Overtime Rate *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Overtime Rate*" oninvalid	 	 	 										="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Driver Charges For Normal Workin *</label>
                                              <input type="text" name="staffid" id="staffid" class="form-control" placeholder="Enter Driver Charges For Normal 	 	 	 										Workin*"oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Driver Rates For Overtime *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Driver Rates For Overtime*" 	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
								</div>
                            </div>
                            </div>
                            </div>
                            <!--Machine Rental Cost Detail Stop-->
                            
                            <!--Machine Usages on Daily basis Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Machine Usages on Daily basis</div>              
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Start Time & Date *</label>
                                              <input type="date" name="name" id="Name" class="form-control" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Stop Time & Date *</label>
                                              <input type="date" name="name" id="Name" class="form-control" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>    
                            		</div>
                            </div>
                            </div>
                            </div>
                            <!--Machine Usages on Daily basis Detail Stop-->
                            
                            <!--Machine Breakdown on daily basis Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Machine Breakdown on daily basis</div>              
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Start Time *</label>
                                              <input type="date" name="name" id="Name" class="form-control" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Stop Time *</label>
                                              <input type="date" name="name" id="Name" class="form-control" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>    
                            		</div>
                            </div>
                            </div>
                            </div>
                            <!--Machine Breakdown on daily basis Detail Stop-->
                            
                            
                            <div class="col-md-12">
                            	<center> 
                                    <button type="submit" id="btn_insert" class="btn btn-primary button_change">Save</button>													
									<button type="button" class="btn btn-primary btn_update button_change" disabled>Update</button>	
									<button type="button" class="btn btn-primary btn_cancel button_change">Cancel</button>	
									<input type="hidden" id="co_id" value=""/>
								</center>
                            </div>
 </div>
 </form> 
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
</body>

</html>