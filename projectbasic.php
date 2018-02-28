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
                           <div class="panel-title">Project Details</div>
                        </div>
                        <div class="panel-body">
							<div class="col-md-12">
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Project Identifier *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Project Identifier*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Projevct Description *</label>
                              <input type="text" name="text" id="pdesc" class="form-control" placeholder="Enter Projevct Description*" oninvalid="this.setCustomValidity('please enter Email')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
                                <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Project Address *</label>
                              <textarea type="text" name="address" id="address" class="form-control" placeholder="Enter Project Address*" oninvalid="this.setCustomValidity('please enter Address')" onchange="this.setCustomValidity('')" required></textarea>
                           </div>
						              </div>
                            </div>
                            
                            <div class="col-md-12">
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Project Location *</label>
                              <input type="text" name="name" id="piden" class="form-control" placeholder="Enter Project Location*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
								<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Client Name *</label>
                              <input type="text" name="text" id="pdesc" class="form-control" placeholder="Enter Client Name*" oninvalid="this.setCustomValidity('please enter Email')" onchange="this.setCustomValidity('')" required>
                           </div>
						              </div>
                            </div>
                            
                            <!--Clienr Manager Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Client Manager<button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>              
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
                                              <label class="control-label">Designation *</label>
                                              <input type="text" name="Designation" id="Designation" class="form-control" placeholder="Enter Designation*"        											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">E-mail Id *</label>
                                              <input type="email" name="email" id="email" class="form-control" placeholder="Enter E-mail Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            	</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Mobile No *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Mobile No*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff Id *</label>
                                              <input type="text" name="staffid" id="staffid" class="form-control" placeholder="Enter Staff Id*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhaar Number *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Aadhaar Number*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            	</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Aadhar Scanned PDF/JPEG *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        
                                        <div class="col-md-4">
                                        		
                                        </div>
                                        <div class="col-md-4">
                                           
                                        </div>
                            	</div>
                                </div>
                            </div>
                            </div>
                            
                            <!--Clienr Manager Detail Stop-->
                            
                            <!--Architect Representative Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Architect Representative<button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Designation *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Designation*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">E-mail Id *</label>
                                              <input type="text" name="email" id="email" class="form-control" placeholder="Enter E-mail Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Mobile No *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Mobile No*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff Id *</label>
                                              <input type="email" name="staffid" id="staffid" class="form-control" placeholder="Enter Staff Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhar Number *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Aadhar Number*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Aadhar Scanned PDF/JPEG *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        
                            	</div>
                                </div>
                            </div>
                            </div>
                            <!--Architect Representative Detail Stop-->
                            
                            <!--Consultant Representative Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Consultant Representative <button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Designation *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Designation*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">E-mail Id *</label>
                                              <input type="text" name="email" id="email" class="form-control" placeholder="Enter E-mail Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Mobile No *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Mobile No*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff Id *</label>
                                              <input type="email" name="staffid" id="staffid" class="form-control" placeholder="Enter Staff Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhar Number *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Aadhar Number*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Aadhar Scanned PDF/JPEG *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        
                            	</div>
                                </div>
                            </div>
                            </div>
                            <!--Consultant Representative Detail Stop-->
                            
                            <!--PMC Representative Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">PMC Representative <button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Designation *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Designation*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">E-mail Id *</label>
                                              <input type="text" name="email" id="email" class="form-control" placeholder="Enter E-mail Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Mobile No *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Mobile No*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff Id *</label>
                                              <input type="email" name="staffid" id="staffid" class="form-control" placeholder="Enter Staff Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhar Number *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Aadhar Number*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Aadhar Scanned PDF/JPEG *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        
                            	</div>
                                </div>
                            </div>
                            </div>
                            <!--PMC Representative Detail Stop-->
                            
                            <!--Internal Project Management Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Internal Project Management <button type="button" class="btn btn-primary add_btn" id="new"><em class="fa fa-plus"></em></button></div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Organization *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter Organization*" 		 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Name *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter Name*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff No *</label>
                                              <input type="email" name="staffno" id="staffno" class="form-control" placeholder="Enter Staff No*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Designation *</label>
                                              <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Designation*" 	 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>   
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">E-mail Id *</label>
                                              <input type="text" name="email" id="email" class="form-control" placeholder="Enter E-mail Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Mobile No *</label>
                                              <input type="text" name="mobileno" id="mobileno" class="form-control" placeholder="Enter Mobile No*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>    
                            		</div>
                                    
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Staff Id *</label>
                                              <input type="email" name="staffid" id="staffid" class="form-control" placeholder="Enter Staff Id*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Aadhar Number *</label>
                                              <input type="email" name="uidai" id="uidai" class="form-control" placeholder="Enter Aadhar Number*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                          		<label for="user name">Aadhar Scanned PDF/JPEG *</label>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Access Level *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>      
                             					</select>
                                           </div>
                                        </div>
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">User Id *</label>
                                              <input type="text" name="Name" id="Name" class="form-control" placeholder="Enter User Id*"        												 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Password *</label>
                                              <input type="password" name="password" id="staffno" class="form-control" placeholder="Enter password*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
										</div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Internal Project Management Detail Stop-->
                            
                            <!--PO Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">PO Details</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">PO Value Excluding Taxes *</label>
                                              <input type="text" name="Organization" id="Organization" class="form-control" placeholder="Enter PO Value 	 	 	 											Excluding Taxes*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Payment Terms *</label>
                              <textarea type="text" name="address" id="address" class="form-control" placeholder="Enter Payment Terms*" oninvalid="this.setCustomValidity('please enter Address')" onchange="this.setCustomValidity('')" required></textarea>
                           </div>
						              </div>
                                        <div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">Reward/Bonus Clause *</label>
                              <textarea type="text" name="address" id="address" class="form-control" placeholder="Enter Reward/Bonus Clause*" oninvalid="this.setCustomValidity('please enter Address')" onchange="this.setCustomValidity('')" required></textarea>
                           </div>
						              </div>
                            		</div>
                                
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                           <div class="form-group">
                              <label class="control-label">LD/Penalty Clause *</label>
                              <textarea type="text" name="address" id="address" class="form-control" placeholder="Enter LD/Penalty Clause*" oninvalid="this.setCustomValidity('please enter Address')" onchange="this.setCustomValidity('')" required></textarea>
                           </div>
						              </div>   
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">PO Date *</label>
                                              <input type="date" name="podate" id="podate" class="form-control" placeholder="Enter PO Date*" oninvalid=				 		   											"this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Zero Date *</label>
                                              <input type="text" name="zerdate" id="zerdate" class="form-control" placeholder="Enter Zero Date*"        											  												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>    
                            		</div>
                                    
                                	<div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Schedule Closure Date *</label>
                                              <input type="date" name="closuredate" id="closuredate" class="form-control" placeholder="Enter Schedule Closure 	 	 	 										Date*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Defect Liability Period - Last Date *</label>
                                              <input type="email" name="lastdate" id="lastdate" class="form-control" placeholder="Enter Defect Liability Period 	 	 	 	 	 								- Last Date*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" 		 	 											required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Warranty Date *</label>
                                              <input type="email" name="warrantydate" id="warrantydate" class="form-control" placeholder="Enter Warranty Date 	 	 	 										Date*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                    
                                    <div class="col-md-12">
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Payment Terms *</label>
                                              <input type="text" name="paymentterms" id="paymentterms" class="form-control" placeholder="Enter Payment Terms*"	 	 	 										oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                    	<div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Special Conditions *</label>
                                              <input type="text" name="specialconditions" id="specialconditions" class="form-control" placeholder="Enter Special 												Conditions*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Remark *</label>
                                              <input type="text" name="remark" id="remark" class="form-control" placeholder="Enter Reamark*" oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--PO Detail Stop-->
                            
                            <!--Reference Document Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Reference Document</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-3">
                                           <div class="form-group">
                                          		<label for="user name">PO *</label>
                                                <input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Title*" 	 												oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                           		<label for="user name">MOM *</label>
                                           		<input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Title*" 	 												 	 	   											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                           		<label for="user name">Drawing *</label>
                                           		<input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Title*" 	 													 													oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                                        <div class="col-md-3">
                                           <div class="form-group">
                                           		<label for="user name">Extra *</label>
                                           		<input type="email" name="Designation" id="Designation" class="form-control" placeholder="Enter Title*" 	 													 	 	 											oninvalid="this.setCustomValidity('please enter name')" onchange="this.setCustomValidity('')" required>
                                                <input type="file" class="form-control" id="uploadFile" name="uploadFile[]" accept="image/*" oninvalid=				         	 	 							      "this.setCustomValidity('please Select Photo')" onchange="this.setCustomValidity('')" required>
                                                <input type="hidden" id="file_attach" value=""/>
                                           		<div id="msg">
                                           </div>
										</div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Reference Document Detail Stop-->
                            
                            <!--Communication Mode Preference Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Communication Mode Preference</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 1 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>    
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 2 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>   
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 3 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>    
                             					</select>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Communication Mode Preference Detail Stop-->
                            
                            <!--Communication Mode Preference Detail Start-->
                            <div class="col-md-12">
                            	<div class="sub_panel_heading">
                            	<div class="panel-title">Communication Mode Preference</div>
                                <div class="panel-body">
                                	<div class="col-md-12">
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 1 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>    
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 2 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>   
                             					</select>
                                           </div>
                                        </div>
                                        <div class="col-md-4">
                                           <div class="form-group">
                                              <label class="control-label">Level 3 *</label>
                              					<select name="state" id="state" class="form-control m-b" required>
                                                    <option value="Dashboard">Dashboard</option>
                                                    <option value="E-mail">E-mail</option>
                                                    <option value="Whatsapp">Whatsapp</option>    
                             					</select>
                                           </div>
                                        </div>
                            		</div>
                                </div>
                            </div>
                            </div>
                            <!--Communication Mode Preference Detail Stop-->
                            
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