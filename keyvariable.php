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
                           <div class="panel-title">Key Varaible</div>
                        </div>
                        <div class="panel-body">
                            <!--Core Activity Defination Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Core Activity Defination<button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>              
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name Core Activity *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Name Core Activity*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Planned Qty *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Planned Qty*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Planned UOM *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Planned UOM*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-6">
                                           <div class="form-group">
                                              <label class="control-label">Linked Material From Material List *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Linked Material From Material List*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-6">
                                           <div class="form-group">
                                              <label class="control-label">Planned % Completion Before Next Core Activity *</label>
                                              <input type="text" name="staffid" id="staffid" class="form-control" placeholder="Enter Planned % Completion Before Next Core Activity*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div> 
                            		</div>
                                </div>
                            </div>
                            </div>
                            
                            <!--Core Activity Defination Detail Stop-->
                            
                            <!--Budgeted Work Speed In Core Activity Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Budgeted Work Speed In Core Activity</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name of Core Activity *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Activity 1">Activity 1</option>
                                                    <option value="Activity 2">Activity 2</option>
                                                    <option value="Activity 3">Activity 3</option>   
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Standard Output *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Standard Output*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Time Unit For Standard Output *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Time Unit For 	 	 								Standard Output*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Budgeted Work Speed In Core Activity Detail Stop-->
                            
                            <!--Working Pattern Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Working Pattern</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Weekely Off *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Monday">Monday</option>
                                                    <option value="Tuesday">Tuesday</option>
                                                    <option value="Wednesday">Wednesday</option> 
                                                    <option value="Thursday">Thursday</option>
                                                    <option value="Friday">Friday</option>
                                                    <option value="Saturday">Saturday</option> 
                                                    <option value="Sunday">Sunday</option>     
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">1/2 Days Workign *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Monday">Monday</option>
                                                    <option value="Tuesday">Tuesday</option>
                                                    <option value="Wednesday">Wednesday</option> 
                                                    <option value="Thursday">Thursday</option>
                                                    <option value="Friday">Friday</option>
                                                    <option value="Saturday">Saturday</option> 
                                                    <option value="Sunday">Sunday</option>   
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Normal Working Hours Daily *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Normal Working 	 										Hours Daily*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Permissible Working Hours *</label>
                                              <input type="text" name="email" id="email" class="form-control" placeholder="Enter Permissible Working Hours*"  	 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">List Of holiday *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter List Of holiday*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Work is Wheather Dependent *</label></br>
                                              <input type="radio" name="" id="" value="1"> Yes
											  <input type="radio" name="" id="" value="0"> No  
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Working Pattern Detail Stop-->
                            
                            <!--Schedule Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Schedule</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Micro Level Activity Terms *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Micro Level Activity Terms*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Budgeted Resources *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Budgeted Resources*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Schedule Start Date *</label>
                                              <input type="date" name="schestartdate" id="schestartdate" class="form-control" placeholder="Enter Schedule Start Date*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Schedule End Date *</label>
                                              <input type="date" name="scheenddate" id="scheenddate" class="form-control" placeholder="Enter End Start Date*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Schedule Work Output Rate *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Schedule Work Output Rate*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Linked Material Code *</label>
                                              <input type="email" name="staffid" id="staffid" class="form-control" placeholder="Enter Linked Material Code*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Linked With Billing Schedule *</label></br>
                                              <input type="radio" name="" id="" value="1"> Yes
											  <input type="radio" name="" id="" value="0"> No
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           
                                        </div>     
                            	</div>
                                </div>
                            </div>
                            </div>
                            <!--Schedule Detail Stop-->
                            
                            <!--Time Indepent Cost Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Time Indepent Cost (Up To 2000) <button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                    	<div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Budgeted Value *</label>
                                              <input type="email" name="staffno" id="staffno" class="form-control" placeholder="Enter Budgeted Value*" oninvalid			 	 											="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Milestone *</label>
                                              <input type="email" name="staffno" id="staffno" class="form-control" placeholder="Enter Milestone*" oninvalid			 	 											="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Time Indepent Cost Detail Stop-->
                            
                            <!--Time Depent Cost Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Time Depent Cost (Up To 2000) <button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                    	<div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Budgeted Value *</label>
                                              <input type="email" name="staffno" id="staffno" class="form-control" placeholder="Enter Budgeted Value*" oninvalid			 	 											="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                              <label class="control-label">Time Unit *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Hours">Hours</option>
                                                    <option value="Day">Day</option>
                                                    <option value="Week">Week</option> 
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Quatrly">Quatrly</option>
                                                    <option value="Annual">Annual</option> 
                                                    <option value="ProjectSpecific">Project Specific</option>     
                             					</select>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Time Depent Cost Detail Stop-->
                            
                            
                            
                            <!--LD Penalty Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">LD Penalty</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Effective Date *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Effective Date*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Rate *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Rate*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Time Unit *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Time Unit*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Ceilign *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Ceilign*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Remark *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Remark*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--PO Detail Stop-->
                            
                            <!--Bonus/Incentive Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Bonus/Incentive</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Effective Date *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Effective Date*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Rate *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Rate*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Time Unit *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter Time Unit*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Ceilign *</label>
                                              <input type="text" name="name" id="Name" class="form-control" placeholder="Enter Ceilign*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Remark *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Remark*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Bonus/Incentive Detail Stop-->

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