<!-- JQUERY-->
   <script src="vendor/jquery/dist/jquery.js"></script>
<?php
session_start();
include('db/connection.php');
$roll="";
if(isset($_SESSION['id'])=="")
{
	header("Location:login.php");
}
else{
	$user_id=$_SESSION['id'];
	$user_type=$_SESSION['usertype'];
	
	$sql = "SELECT * FROM login_master WHERE user_id='$user_id' and user_type='$user_type'";
	foreach ($dbh->query($sql) as $row)
	{		
		$roll=$row['user_type'];
	}
}
?>
  <!-- top navbar-->
      <header class="topnavbar-wrapper">
         <!-- START Top Navbar-->
         <nav role="navigation" class="navbar topnavbar">
            <!-- START navbar header-->
            <div class="navbar-header">
               <a href="index.php" class="navbar-brand">
                  <div class="brand-logo">
                     <img src="app/img/logo.png" alt="App Logo" class="img-responsive">
                  </div>
                  <div class="brand-logo-collapsed">
                     <img src="app/img/logo-single.png" alt="App Logo" class="img-responsive">
                  </div>
               </a>
            </div>
            <!-- END navbar header-->
            <!-- START Nav wrapper-->
            <div class="nav-wrapper">
               <!-- START Left navbar-->
               <ul class="nav navbar-nav">
                  <li>
                     <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
                     <a href="#" data-trigger-resize="" id="click" data-toggle-state="aside-collapsed" class="hidden-xs">
                        <em class="fa fa-navicon"></em>
                     </a>
                     <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->
                     <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" class="visible-xs sidebar-toggle">
                        <em class="fa fa-navicon"></em>
                     </a>
                  </li>
                  <!-- START User avatar toggle-->
                 <!--  <li> -->
                     <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
                  <!--   <a id="user-block-toggle" href="#user-block" data-toggle="collapse">
                        <em class="icon-user"></em>
                     </a>
                  </li> -->
                  <!-- END User avatar toggle-->
                  <!-- START lock screen-->
               <!--   <li>
                     <a href="#" title="Lock screen">
                        <em class="icon-lock"></em>
                     </a>
                  </li> -->
                  <!-- END lock screen-->
               </ul>
               <!-- END Left navbar-->
               <!-- START Right Navbar-->
               <ul class="nav navbar-nav navbar-right">
                  <!-- Search icon-->
                  <li>
                     <a href="#" data-search-open="">
                        <em class="icon-magnifier"></em>
                     </a>
                  </li>
                  <!-- Fullscreen (only desktops)-->
                  <li class="visible-lg">
                     <a href="#" data-toggle-fullscreen="">
                        <em class="fa fa-expand"></em>
                     </a>
                  </li>
                  <!-- START Alert menu-->
                  <li class="dropdown dropdown-list">
                     <a href="#" data-toggle="dropdown">
                        <em class="icon-bell"></em>
                        <div class="label label-danger">11</div>
                     </a>
                     <!-- START Dropdown menu-->
                     <ul class="dropdown-menu animated flipInX">
                        <li>
                           <!-- START list group-->
                           <div class="list-group">
                              <!-- list item-->
                              <a href="#" class="list-group-item">
                                 <div class="media-box">
                                    <div class="pull-left">
                                       <em class="fa fa-twitter fa-2x text-info"></em>
                                    </div>
                                    <div class="media-box-body clearfix">
                                       <p class="m0">New followers</p>
                                       <p class="m0 text-muted">
                                          <small>1 new follower</small>
                                       </p>
                                    </div>
                                 </div>
                              </a>
                              <!-- list item-->
                              <a href="#" class="list-group-item">
                                 <div class="media-box">
                                    <div class="pull-left">
                                       <em class="fa fa-envelope fa-2x text-warning"></em>
                                    </div>
                                    <div class="media-box-body clearfix">
                                       <p class="m0">New e-mails</p>
                                       <p class="m0 text-muted">
                                          <small>You have 10 new emails</small>
                                       </p>
                                    </div>
                                 </div>
                              </a>
                              <!-- list item-->
                              <a href="#" class="list-group-item">
                                 <div class="media-box">
                                    <div class="pull-left">
                                       <em class="fa fa-tasks fa-2x text-success"></em>
                                    </div>
                                    <div class="media-box-body clearfix">
                                       <p class="m0">Pending Tasks</p>
                                       <p class="m0 text-muted">
                                          <small>11 pending task</small>
                                       </p>
                                    </div>
                                 </div>
                              </a>
                              <!-- last list item-->
                              <a href="#" class="list-group-item">
                                 <small>More notifications</small>
                                 <span class="label label-danger pull-right">14</span>
                              </a>
                           </div>
                           <!-- END list group-->
                        </li>
                     </ul>
                     <!-- END Dropdown menu-->
                  </li>
                  <!-- END Alert menu-->
                  <!-- START Offsidebar button-->
                  <li>
                     <a href="ajax/logout.php?logout">
                        <em class="fa fa-sign-out"></em>
                     </a>
                  </li>
				        <!--  <li>
                     <a href="#" data-toggle-state="offsidebar-open" data-no-persist="true">
                        <em class="icon-notebook"></em>
                     </a>
                  </li> -->
                  <!-- END Offsidebar menu-->
               </ul>
               <!-- END Right Navbar-->
            </div>
            <!-- END Nav wrapper-->
            <!-- START Search form-->
            <form role="search" action="search.html" class="navbar-form">
               <div class="form-group has-feedback">
                  <input type="text" placeholder="Type and hit enter ..." class="form-control">
                  <div data-search-dismiss="" class="fa fa-times form-control-feedback"></div>
               </div>
               <button type="submit" class="hidden btn btn-default">Submit</button>
            </form> 
            <!-- END Search form-->
         </nav>
         <!-- END Top Navbar-->
      </header>
      <!-- sidebar-->
      <aside class="aside">
         <!-- START Sidebar (left)-->
         <div class="aside-inner">
            <nav data-sidebar-anyclick-close="" class="sidebar">
               <!-- START sidebar nav-->
               <ul class="nav">
                  <!-- START user info-->
                  <li class="has-user-block">
                     <div id="user-block" class="collapse">
                        <div class="item user-block">
                           <!-- User picture-->
                           <div class="user-block-picture">
                              <div class="user-block-status">
                                 <img src="app/img/user/02.jpg" alt="Avatar" width="60" height="60" class="img-thumbnail img-circle">
                                 <div class="circle circle-success circle-lg"></div>
                              </div>
                           </div>
                           <!-- Name and Job-->
                           <div class="user-block-info">
                              <span class="user-block-name">Hello, Mike</span>
                              <span class="user-block-role">Designer</span>
                           </div>
                        </div>
                     </div>
                  </li>
                  <!-- END user info-->
                  <!-- Iterates over all sidebar items-->
                  <li class="nav-heading ">
                     <span data-localize="sidebar.heading.HEADER">Main Navigation</span>
                  </li>
				  <?php
				  if($roll=='Admin')
				  {
				?>
                  <li class=" ">
                    <a href="#dashboard" title="Dashboard" data-toggle="collapse">
                        <em class="icon-user"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Loan officers</span>
                     </a>  
                     <ul id="dashboard" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="loanofficer.php" title="Loan Officer">
													   <span><em class="icon-plus"></em> Loan Officer</span>
                           </a>
                        </li>
                        
                     </ul>
                  </li>
				  <?php
				  }
				  ?>
				  <?php
				  if($roll=='Admin' || $roll=='Loanofficer'){
					  ?>
				         <li class=" ">
                    <a href="#customer" title="Customer" data-toggle="collapse">
                        <em class="icon-user"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Customers</span>
                     </a>  
                     <ul id="customer" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="customer.php" title="Customer">
													   <span><em class="icon-plus"></em> Customer</span>
                           </a>
                        </li>
                        
                     </ul>
                  </li> 
				  <?php
				  }
				  ?>
				  <?php
				  if($roll=='Admin' || $roll=='Loanofficer'){
					  ?>
				       <li class=" ">
                    <a href="#partner" title="Partner" data-toggle="collapse">
                        <em class="icon-user"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Trusted Partners</span>
                     </a>  
                     <ul id="partner" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="trustedpartner.php" title="Partner">
													   <span><em class="icon-plus"></em> Trusted Partner</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li> 
				  <?php
				  }
				  ?>
				  <?php
				  if($roll=='Admin'){
					  ?>
				        <li class=" ">
                    <a href="#business" title="Business" data-toggle="collapse">
                        <em class="fa fa-briefcase"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Business Types</span>
                     </a>  
                     <ul id="business" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="businesstype.php" title="business">
													   <span><em class="icon-plus"></em> Business Type</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		   <?php
				  if($roll=='Admin'){
					  ?>
				        <li class=" ">
                    <a href="#plan" title="plan" data-toggle="collapse">
                        <em class="fa fa-briefcase"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Plan</span>
                     </a>  
                     <ul id="plan" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="plan.php" title="business">
							<span><em class="icon-plus"></em> Plan</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		   <?php
				  if($roll=='Admin'){
					  ?>
				        <li class=" ">
                    <a href="#report" title="report" data-toggle="collapse">
                        <em class="fa fa-list"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Reports</span>
                     </a>  
                     <ul id="report" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="report.php" title="business">
							<span><em class="icon-list"></em> Loan Officer subscriptions</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		    <?php
				  if($roll=='Admin'){
					  ?>
				        <li class=" ">
                    <a href="#setting" title="Business" data-toggle="collapse">
                        <em class="fa fa-cog"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Settings</span>
                     </a>  
                     <ul id="setting" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="bpmi.php" title="business">
													   <span><em class="icon-plus"></em> BPMI</span>
                           </a>
                        </li>
						             <li class=" ">
                           <a href="bpmiadjustments.php" title="business">
													   <span><em class="icon-plus"></em> BPMI Adjustments</span>
                           </a>
                        </li>
						            <li class=" ">
                           <a href="insurancebasicpremiumrates.php" title="business">
													   <span><em class="icon-plus"></em> Insurance Basic Premium Rates</span>
                           </a>
                        </li>
												<li class=" ">
                           <a href="insurancerange.php" title="business">
													   <span><em class="icon-plus"></em> Insurance Range</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		   <?php
				  if($roll=='Loanofficer'){
					  ?>
				        <li class=" ">
                    <a href="#url" title="Business" data-toggle="collapse">
                        <em class="fa fa-link"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Generate Url</span>
                     </a>  
                     <ul id="url" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="hasedurl.php" title="business">
													   <span><em class="icon-plus"></em> Url</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		   <?php
				  if($roll=='Loanofficer'){
					  ?>
				        <li class=" ">
                    <a href="#loan" title="LoanInstance" data-toggle="collapse">
                        <em class="fa fa-link"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Loan Instance</span>
                     </a>  
                     <ul id="loan" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="createinstance.php" title="LoanInstance">
													   <span><em class="icon-plus"></em>Create Loan Instance</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
		  <?php
				  if($roll=='Loanofficer'){
					  ?>
				        <li class=" ">
                    <a href="#email" title="Business" data-toggle="collapse">
                        <em class="fa fa-envelope"></em>
                        <span data-localize="sidebar.nav.DASHBOARD">Email</span>
                     </a>  
                     <ul id="email" class="nav sidebar-subnav collapse">
                       
                        <li class=" ">
                           <a href="emailsetting.php" title="Email">
													   <span><em class="fa fa-cog"></em> Settings</span>
                           </a>
                        </li>
						            <li class=" ">
                           <a href="email.php" title="Email">
													   <span><em class="fa fa fa-envelope-o"></em> Compose</span>
                           </a>
                        </li>
						         
                     </ul>
                  </li>
				  <?php
				  }
           ?>
                     </ul>
               
               <!-- END sidebar nav-->
            </nav>
         </div>
         <!-- END Sidebar (left)-->
      </aside>
      <!-- offsidebar-->
      <aside class="offsidebar hide">
         <!-- START Off Sidebar (right)-->
         <nav>
            <div role="tabpanel">
               <!-- Nav tabs-->
               <ul role="tablist" class="nav nav-tabs nav-justified">
                  <li role="presentation" class="active">
                     <a href="#app-settings" aria-controls="app-settings" role="tab" data-toggle="tab">
                        <em class="icon-equalizer fa-lg"></em>
                     </a>
                  </li>
                  <li role="presentation">
                     <a href="#app-chat" aria-controls="app-chat" role="tab" data-toggle="tab">
                        <em class="icon-user fa-lg"></em>
                     </a>
                  </li>
               </ul>
               <!-- Tab panes-->
               <div class="tab-content">
                  <div id="app-settings" role="tabpanel" class="tab-pane fade in active">
                     <h3 class="text-center text-thin">Settings</h3>
                     <div class="p">
                        <h4 class="text-muted text-thin">Themes</h4>
                        <div class="table-grid mb">
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-a.css">
                                    <input type="radio" name="setting-theme" checked="checked">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-info"></span>
                                       <span class="color bg-info-light"></span>
                                    </span>
                                    <span class="color bg-white"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-b.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-green"></span>
                                       <span class="color bg-green-light"></span>
                                    </span>
                                    <span class="color bg-white"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-c.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-purple"></span>
                                       <span class="color bg-purple-light"></span>
                                    </span>
                                    <span class="color bg-white"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-d.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-danger"></span>
                                       <span class="color bg-danger-light"></span>
                                    </span>
                                    <span class="color bg-white"></span>
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div class="table-grid mb">
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-e.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-info-dark"></span>
                                       <span class="color bg-info"></span>
                                    </span>
                                    <span class="color bg-gray-dark"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-f.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-green-dark"></span>
                                       <span class="color bg-green"></span>
                                    </span>
                                    <span class="color bg-gray-dark"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-g.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-purple-dark"></span>
                                       <span class="color bg-purple"></span>
                                    </span>
                                    <span class="color bg-gray-dark"></span>
                                 </label>
                              </div>
                           </div>
                           <div class="col mb">
                              <div class="setting-color">
                                 <label data-load-css="css/theme-h.css">
                                    <input type="radio" name="setting-theme">
                                    <span class="icon-check"></span>
                                    <span class="split">
                                       <span class="color bg-danger-dark"></span>
                                       <span class="color bg-danger"></span>
                                    </span>
                                    <span class="color bg-gray-dark"></span>
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="p">
                        <h4 class="text-muted text-thin">Layout</h4>
                        <div class="clearfix">
                           <p class="pull-left">Fixed</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-fixed" type="checkbox" data-toggle-state="layout-fixed">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Boxed</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-boxed" type="checkbox" data-toggle-state="layout-boxed">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">RTL</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-rtl" type="checkbox">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="p">
                        <h4 class="text-muted text-thin">Aside</h4>
                        <div class="clearfix">
                           <p class="pull-left">Collapsed</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-collapsed" type="checkbox" data-toggle-state="aside-collapsed">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Collapsed Text</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-collapsed-text" type="checkbox" data-toggle-state="aside-collapsed-text">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Float</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-float" type="checkbox" data-toggle-state="aside-float">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Hover</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-hover" type="checkbox" data-toggle-state="aside-hover">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Show Scrollbar</p>
                           <div class="pull-right">
                              <label class="switch">
                                 <input id="chk-hover" type="checkbox" data-toggle-state="show-scrollbar" data-target=".sidebar">
                                 <span></span>
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="app-chat" role="tabpanel" class="tab-pane fade">
                     <h3 class="text-center text-thin">Connections</h3>
                     <ul class="nav">
                        <!-- START list title-->
                        <li class="p">
                           <small class="text-muted">ONLINE</small>
                        </li>
                        <!-- END list title-->
                        <li>
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-success circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/05.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Juan Sims</strong>
                                    <br>
                                    <small class="text-muted">Designeer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-success circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/06.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Maureen Jenkins</strong>
                                    <br>
                                    <small class="text-muted">Designeer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-danger circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/07.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Billie Dunn</strong>
                                    <br>
                                    <small class="text-muted">Designeer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-warning circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/08.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Tomothy Roberts</strong>
                                    <br>
                                    <small class="text-muted">Designer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                        </li>
                        <!-- START list title-->
                        <li class="p">
                           <small class="text-muted">OFFLINE</small>
                        </li>
                        <!-- END list title-->
                        <li>
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/09.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Lawrence Robinson</strong>
                                    <br>
                                    <small class="text-muted">Developer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                           <!-- START User status-->
                           <a href="#" class="media-box p mt0">
                              <span class="pull-right">
                                 <span class="circle circle-lg"></span>
                              </span>
                              <span class="pull-left">
                                 <!-- Contact avatar-->
                                 <img src="img/user/10.jpg" alt="Image" class="media-box-object img-circle thumb48">
                              </span>
                              <!-- Contact info-->
                              <span class="media-box-body">
                                 <span class="media-box-heading">
                                    <strong>Tyrone Owens</strong>
                                    <br>
                                    <small class="text-muted">Designer</small>
                                 </span>
                              </span>
                           </a>
                           <!-- END User status-->
                        </li>
                        <li>
                           <div class="p-lg text-center">
                              <!-- Optional link to list more users-->
                              <a href="#" title="See more contacts" class="btn btn-purple btn-sm">
                                 <strong>Load more..</strong>
                              </a>
                           </div>
                        </li>
                     </ul>
                     <!-- Extra items-->
                     <div class="p">
                        <p>
                           <small class="text-muted">Tasks completion</small>
                        </p>
                        <div class="progress progress-xs m0">
                           <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-success progress-80">
                              <span class="sr-only">80% Complete</span>
                           </div>
                        </div>
                     </div>
                     <div class="p">
                        <p>
                           <small class="text-muted">Upload quota</small>
                        </p>
                        <div class="progress progress-xs m0">
                           <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-warning progress-40">
                              <span class="sr-only">40% Complete</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
         <!-- END Off Sidebar (right)-->
      </aside>
	  <script>
	  
	  /* $("#click").on('click',(function(e){
		  var a=$('#click').attr('data-toggle-state');
		  if(a=='aside-collapsed'){
			  $('#click').attr('data-toggle-state','aside-toggled');
		  }else{
			  $('#click').attr('data-toggle-state','aside-collapsed');
		  }
	  })); */
	  </script>