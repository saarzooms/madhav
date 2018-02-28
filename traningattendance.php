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
                           <div class="panel-title">Attendance</div>
                        </div>
                        <div class="panel-body">   
                            <!--Traning Attedndance Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Traning Attedndance</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name of Traning *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Name of Traning*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Trainer Name *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Trainer Name*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Tranier Organization *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Tranier Organization*" 	 	 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Attendance *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Attendance*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div> 
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Pic For Training *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
											</div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Traning Records *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
											</div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Upload Traning Material *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg"></div>
											</div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Traning Attedndance Detail Stop-->
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