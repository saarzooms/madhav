<?php
   include('db/connection.php');
   $user_id=isset($_SESSION['id']);
   $user_type=isset($_SESSION['usertype']);
	$roll="";
	$sql = "SELECT * FROM login_master WHERE user_id='$user_id' and user_type='$user_type'";
	foreach ($dbh->query($sql) as $row)
	{		
		$roll=$row['user_type'];
	}
	$lsp='';$csp='';$lp='';$cp='';$ltp='';$ctp='';
  $la='';$ca='';$lr='';$cr='';$lpo='';$cpo='';$lt='';$ct='';
?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <meta name="description" content="Bootstrap Admin App + jQuery">
   <meta name="keywords" content="app, responsive, jquery, bootstrap, dashboard, admin">
   <title>Index Page</title>
   <link rel="stylesheet" href="app/css/styles.css">
   
   <!-- =============== VENDOR STYLES ===============-->
   
   <!-- FONT AWESOME-->
   <link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.min.css">
   <!-- SIMPLE LINE ICONS-->
   <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
   <!-- ANIMATE.CSS-->
   <link rel="stylesheet" href="vendor/animate.css/animate.min.css">
   <!-- WHIRL (spinners)-->
   <link rel="stylesheet" href="vendor/whirl/dist/whirl.css">
   <!-- =============== PAGE VENDOR STYLES ===============-->
   <!-- WEATHER ICONS-->
   <link rel="stylesheet" href="vendor/weather-icons/css/weather-icons.min.css">
   <!-- =============== BOOTSTRAP STYLES ===============-->
   <link rel="stylesheet" href="app/css/bootstrap.css" id="bscss">
   <!-- =============== APP STYLES ===============-->
   <link rel="stylesheet" href="app/css/app.css" id="maincss">
  <link rel="stylesheet" href="app/css/bootstrap-drawer.css">
 
  <style>
  .client-detail {width:98%; height:auto; float:right; border:1px solid #23b7e5; padding:15px 0px 15px 0px;margin-bottom:10px;margin-right:5px;box-shadow:5px 5px 2.5px #23b7e5}
.client-detail-text {font-size:12px; color:#000; }
.circle {
  display: block;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  border: 5px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);  
}
  .profile_icon {width:60px; height:60px; float:left; border:0px solid #000;}
.profile_icon img {width:100%; height:auto; float:left;}

.extra {
		display: none;
	}
	tr.hide_all > td, td.hide_all{
        border-style:hidden;
      }
	   body {
    overflow: scroll;
}
  </style>
 <script type="text/javascript">
	function toggleSibling(sibling){
		sibling = sibling.nextSibling;
		while(!/tr/i.test(sibling.nodeName)){
			sibling = sibling.nextSibling;
		}
		sibling.style.display = sibling.style.display == 'table-row' ? 'none' : 'table-row';
	}
	</script> 
</head>

<body>

 <!-- <div id="main"><span onClick="openNav()">&#9776;</span></div> -->
   <div class="wrapper">
   <?php include('header.php');?>
   <section>
    <div class="content-wrapper">
      <!-- <button class="btn btn-primary" data-toggle="drawer" data-target="#drawer-2">Right Drawer</button> -->
				<div class="content-heading">
						
               Dashboard
               <small>Welcome to Streetwork !</small>
				</div>
				<div class="row">
           <div class="col-md-12">
							<?php
							if($roll=='Admin'){
								
							?>
               <div class="col-lg-3 col-sm-6">
                  <!-- START widget-->
                  <div class="panel widget bg-primary">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center bg-primary-dark pv-lg">
                           <em class="icon-people fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                           <div id="loan" class="h2 mt0"></div>
                           <div class="text-uppercase">Loan Officers</div>
                        </div>
                     </div>
                  </div>
               </div>
								<?php
								}
								?>
								<?php
							if($roll=='Admin' || $roll=='Loanofficer'){
								
							?>
               <div class="col-lg-3 col-sm-6">
                  <!-- START widget-->
                  <div class="panel widget bg-purple">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center bg-purple-dark pv-lg">
                           <em class="icon-user fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                           <div id="cust" class="h2 mt0"></div>
                           <div class="text-uppercase">Customers</div>
                        </div>
                     </div>
                  </div>
               </div>
			          <?php
								}
								?>
								<?php
							if($roll=='Admin' || $roll=='Loanofficer'){
								
							?>
               <div class="col-lg-3 col-md-6 col-sm-12">
                  <!-- START widget-->
                  <div class="panel widget bg-green">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center bg-green-dark pv-lg">
                           <em class="icon-user-following fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                           <div id="part" class="h2 mt0"></div>
                           <div class="text-uppercase">Trusted Partners</div>
                        </div>
                     </div>
                  </div>
               </div>
			         <?php
								}
								?>
								<?php
							if($roll=='Admin'){
								
							?>
               <div class="col-lg-3 col-md-6 col-sm-12">
                  <!-- START date widget-->
                  <div class="panel widget">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center bg-green pv-lg">
                           <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->
                           <em class="fa fa-briefcase fa-3x"></em>
                        </div>
						             <div class="col-xs-8 pv-lg">
                           <div id="bus" class="h2 mt0"></div>
                           <div class="text-uppercase">Business Types</div>
                        </div>
                        
                     </div>
                  </div>
                  <!-- END date widget-->
               </div>
			   <?php
								}
								?>
					<?php
							if($roll=='Admin' || $roll=='Loanofficer'){
								
							?>
               <div class="col-lg-3 col-md-6 col-sm-12">
                  <!-- START date widget-->
                  <div class="panel widget">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center bg-yellow pv-lg">
                           <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->
                           <em class="fa fa-calculator fa-3x"></em>
                        </div>
						             <div class="col-xs-8 pv-lg">
                           <div id="cal" class="h2 mt0">3</div>
                           <div class="text-uppercase">Loan Calculator</div>
                        </div>
                        
                     </div>
                  </div>
                  <!-- END date widget-->
               </div>
			   <?php
								}
								?>
    </div>
	</div>
</div>
	<?php
	if($roll == 'Loanofficer'){
	?>
	<!-- <div class="wrapper"> -->
		
		<div class="row" style="margin-left:20px;margin-right:20px;margin-top:-20px;">
			<div class="col-md-12">
				<h4>List of recent revisions by customers</h4>
					<table id="tb" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead style="background-color:#90b63d;">
         <tr>
						<th style="color:#fff;">Loan Id</th>  			
						<th style="color:#fff;">Customer Name</th>     
						<th style="color:#fff;">Date</th>  
         </tr>
        </thead>
       <tbody>
	   <?php
	   $loanid='';
	   $query="select loans.id,borrowers.name,loans.updateAt from loans inner join borrowers on borrowers.loanId=loans.id where borrowers.id in (select id from customer_master where loanofficer_id='".$_SESSION['id']."' and borrowerId='B')";
	   foreach($dbh->query($query) as $row){
		   $loanid=$row['id'];
			//$loanid=base64_encode($loanid);
	   ?>
		<tr id="a" onclick="toggleSibling(this)">
			<td><?php echo $row['id'];?></td>
			<td><?php echo $row['name'];?></td>
			<td><?php echo date('d-m-Y',strtotime($row['updateAt']));?></td>
			
		</tr>
  <tr class="extra hide_all">
    <td colspan="3">
	<table class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
		<thead style="background-color:#90b63d;">
			<th colspan="2" style="text-align:center;color:#fff;">Previous Version</th>
			<th colspan="2" style="text-align:center;color:#fff;">Customer Version</th>
		</thead>
		<tbody>
	<tr>
	<tr>
	<?php
	
	$s="SELECT * FROM `loansbackup` where lastUpdatedBy = 'loan officer' and loanId ='$loanid' and updateAt in (select max(updateAt) from loansbackup where lastUpdatedBy = 'loan officer' and loanId ='$loanid')";
	//file_put_contents('./log_'.date("j.n.Y").'.txt', $s, FILE_APPEND);
	foreach($dbh->query($s) as $r){
		
		?>
		<td><strong>Qualifying Credit Score</strong></td>
		<td><?php echo $r['qualifyingCreditScore'];?></td>
		<?php
	}
	
	?>
	<?php
	
	$s="SELECT * FROM `loansbackup` where lastUpdatedBy = 'customer' and loanId ='$loanid' and updateAt in (select max(updateAt) from loansbackup where lastUpdatedBy = 'customer' and loanId ='$loanid')";
	foreach($dbh->query($s) as $r){
		
		?>
		<td><strong>Qualifying Credit Score</strong></td>
		<td><?php echo $r['qualifyingCreditScore'];?></td>
		<?php
	}
	
	?>	
		
   </tr>
  <tr>
  <?php
  $s1="SELECT name FROM `borrowershistory` where loanId ='$loanid' and type = 'B' and createdAt in (select max(createdAt) from borrowershistory where loanId ='$loanid')";
  foreach($dbh->query($s1) as $r){
  ?>
    <td><strong>Name</strong></td>
    <td><?php echo $r['name'];?></td>
	<td><strong>Name</strong></td>
    <td><?php echo $r['name'];?></td>
	<?php
  }
	?>
	
  </tr>
  <?php
 
  $s="SELECT `firstMortgageRate` as rate, `firstMortgagePoints` as point, `firstMortgageTerm` as term, `firstMortgageLoanAmount` as amount, `salesPrice`, `loanType`,`loanMode` FROM `loan_options_history` where id in (select max(id) from loan_options_history where loanId ='$loanid' and `lastUpdatedBy`='loan officer')";
  foreach($dbh->query($s) as $r){
	  $lsp=$r['salesPrice'];
	  
	  $lp=$r['loanMode'];
	  if($lp == 1){
		  $lp='Yes';
	  }else{
		  $lp='No';
	  }
	  $ltp=$r['loanType'];
	  $la=$r['amount'];
	  $lr=$r['rate'];
	  $lpo=$r['point'];
	  $lt=$r['term'];
  }
  $s="SELECT `firstMortgageRate` as rate, `firstMortgagePoints` as point, `firstMortgageTerm` as term, `firstMortgageLoanAmount` as amount, `salesPrice`, `loanType`,`loanMode` FROM `loan_options_history` where id in (select max(id) from loan_options_history where loanId ='$loanid' and `lastUpdatedBy`='customer')";
  foreach($dbh->query($s) as $r){
	  $csp=$r['salesPrice'];
	  $cp=$r['loanMode'];
	  if($cp == 1){
		  $cp='Yes';
	  }else{
		  $cp='No';
	  }
	  $ctp=$r['loanType'];
	  $ca=$r['amount'];
	  $cr=$r['rate'];
	  $cpo=$r['point'];
	  $ct=$r['term'];
  }
  ?>
  <tr>
    <td><strong>Sale Price</strong></td>
    <td><?php echo $lsp;?></td>
	<td><strong>Sale Price</strong></td>
    <td><?php echo $csp;?></td>
  </tr>
  <tr>
    <td><strong>Purchase</strong></td>
    <td><?php echo $lp;?></td>
	<td><strong>Purchase</strong></td>
    <td><?php echo $cp;?></td>
  </tr>
  <tr>
    <td><strong>Loan Type</strong></td>
    <td><?php echo type($ltp);?></td>
	<td><strong>Loan Type</strong></td>
    <td><?php echo 	type($ctp);?></td>
  </tr>
  <tr>
    <td><strong>Loan Amount</strong></td>
    <td><?php echo $la;?></td>
	<td><strong>Loan Amount</strong></td>
    <td><?php echo $ca;?></td>
  </tr>
  <tr>
    <td><strong>Rate</strong></td>
    <td><?php echo $lr;?></td>
		<td><strong>Rate</strong></td>
    <td><?php echo $cr;?></td>
  </tr>
  <tr>
    <td><strong>Point</strong></td>
    <td><?php echo $lpo;?></td>
		<td><strong>Point</strong></td>
    <td><?php echo $cpo;?></td>
  </tr>
  <tr>
    <td><strong>Term</strong></td>
    <td><?php echo $lt;?></td>
		<td><strong>Term</strong></td>
    <td><?php echo $ct;?></td>
  </tr>
  <tr>
		<td colspan="2">
			<center>
			
				<a href='calculator.php#/loan-calculator/<?php echo $loanid;?>' target="_blank"><button id="pre" class="btn btn-success">View More</button><a>
			<!--	<a href="http://loan-calculator.xcartadesigns.com/#/loan-calculator/1" target="_blank"><button id="pre" class="btn btn-success">Modify</button><a>
				<a href="#"><button id="pre" class="btn btn-success">Delete</button><a> -->
			</center>
		</td>
  </tr>
						</tr>
					</tbody>
				</table>
			</td>
  </tr>
  <?php
	}
  ?>
  	</tbody>
			</table>
      
			</div>
		</div>
<!--	</div>  -->
	<?php
	}
	?>
	<?php
	if($roll == 'Loanofficer'){
	?>
	<!-- <div class="wrapper"> -->
		
		<div class="row" style="margin-left:20px;margin-right:20px;margin-top:-20px;">
			<div class="col-md-12">
				<h4>Loan Instance List</h4>
					<table id="tb" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead style="background-color:#90b63d;">
         <tr>
						<th style="color:#fff;">Loan Id</th>  			
						<th style="color:#fff;">Qualifying Credit Score</th>     
						<th style="color:#fff;">Name</th>  
						<th style="color:#fff;">Sale Price</th>  
						<!--<th style="color:#fff;">Purchase</th>  -->
						<th style="color:#fff;">Loan Type</th>  
						<th style="color:#fff;">Loan Amount</th>  
						<th style="color:#fff;">Rate</th>  
						<th style="color:#fff;">Point</th>  
						<th style="color:#fff;">Term</th>  
         </tr>
        </thead>
       <tbody>
	   <?php
	   $type='';
	   $query="select loan_options.loanId,loans.qualifyingCreditScore,borrowers.name,loan_options.salesprice,loan_options.loantype,loan_options.firstMortgageLoanAmount,loan_options.firstMortgageRate,loan_options.firstMortgagePoints,loan_options.firstMortgageTerm from loan_options inner join loans on loans.id=loan_options.loanId inner join borrowers on borrowers.loanId=loan_options.loanId where borrowers.id in (select id from customer_master where loanofficer_id='".$_SESSION['id']."' and borrowerId='B')";
	   foreach($dbh->query($query) as $row){
	   ?>
			<tr>
				<td><a href='calculator.php#/loan-calculator/<?php echo $row['loanId'];?>' target='_blank'><?php echo $row['loanId'];?></a></td>
				<td><?php echo $row['qualifyingCreditScore'];?></td>
				<td><?php echo $row['name'];?></td>
				<td><?php echo $row['salesprice'];?></td>
				<?php
				if($row['loantype']==1){
					$type='Conv | 3% Down';
				}else if($row['loantype']==2){
					$type='Conv | 5% Down';
				}else if($row['loantype']==3){
					$type='Conv | 10% Down';
				}else if($row['loantype']==4){
					$type='Conv | 20% Down';
				}else if($row['loantype']==5){
					$type='Conv | 80 - 15 - 5';
				}else if($row['loantype']==6){
					$type='Conv | 80 - 10 - 10';
				}else if($row['loantype']==7){
					$type='Conv | Other';
				}else if($row['loantype']==8){
					$type='FHA | 3.5% Down';
				}else if($row['loantype']==9){
					$type='FHA | 10% Down';
				}else if($row['loantype']==10){
					$type='FHA | Other';
				}else if($row['loantype']==11){
					$type='VA | 0% Down';
				}else if($row['loantype']==12){
					$type='VA | Other';
				}else if($row['loantype']==13){
					$type='Special Program | 0% Down';
				}else if($row['loantype']==14){
					$type='Special Program | Other';
				}else if($row['loantype']==15){
					$type='100%';
				}
				?>
				<td><?php echo $type;?></td>
				<td><?php echo $row['firstMortgageLoanAmount'];?></td>
				<td><?php echo $row['firstMortgageRate'];?></td>
				<td><?php echo $row['firstMortgagePoints'];?></td>
				<td><?php echo $row['firstMortgageTerm'];?></td>
				
			</tr>
		<?php
	   }
		?>
	</tbody>
</table>
      
			</div>
		</div>
<!--	</div>  -->
	<?php
	}
	?>
	<?php
	if($roll == 'Customer'){
	?>
<!--	<div class="wrapper" style="margin-top:-30px;"> -->
		<div class="row" style="margin-left:20px;margin-right:20px;margin-top:-20px;">
			<div class="col-md-6">
					
					<table id="tb" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead style="background-color:#90b63d;">
         <tr>
		 <th colspan="2" style="color:#fff;text-align:center;">Your Last Saved Version</th>  			  
         </tr>
        </thead>
       <tbody>
	   <?php
	   $loanid='';
		$s="SELECT max(loanId) as loanID FROM `borrowers` where id ='".$_SESSION['id']."' and type = 'B'";
		foreach($dbh->query($s) as $r){
			$loanid=$r['loanID'];
		}
	   ?>
	   
<?php
	
	$s="SELECT * FROM `loansbackup` where lastUpdatedBy = 'customer' and loanId ='$loanid' and updateAt in (select max(updateAt) from loansbackup where lastUpdatedBy = 'customer' and loanId ='$loanid')";
	file_put_contents('./log_'.date("j.n.Y").'.txt', $s, FILE_APPEND);
	foreach($dbh->query($s) as $r){
		
		?>
		<td><strong>Qualifying Credit Score</strong></td>
		<td><?php echo $r['qualifyingCreditScore'];?></td>
		<?php
	}
	
	?>	
  <tr>
    <?php
  $s1="SELECT name FROM `borrowershistory` where loanId ='$loanid' and type = 'B' and createdAt in (select max(createdAt) from borrowershistory where loanId ='$loanid')";
  foreach($dbh->query($s1) as $r){
  ?>
    <td><strong>Name</strong></td>
    <td><?php echo $r['name'];?></td>
	
	
	<?php
  }
   $s="SELECT `firstMortgageRate` as rate, `firstMortgagePoints` as point, `firstMortgageTerm` as term, `firstMortgageLoanAmount` as amount, `salesPrice`, `loanType`,`loanMode` FROM `loan_options_history` where id in (select max(id) from loan_options_history where loanId ='$loanid' and `lastUpdatedBy`='customer')";
  foreach($dbh->query($s) as $r){
	  $csp=$r['salesPrice'];
	  $cp=$r['loanMode'];
	  if($cp == 1){
		  $cp='Yes';
	  }else{
		  $cp='No';
	  }
	  $ctp=$r['loanType'];
	  $ca=$r['amount'];
	  $cr=$r['rate'];
	  $cpo=$r['point'];
	  $ct=$r['term'];
  }
  ?>
  </tr>
  <tr>
    <td><strong>Sale Price</strong></td>
    <td><?php echo $csp;?></td>
  </tr>
  <tr>
    <td><strong>Purchase</strong></td>
    <td><?php echo $cp;?></td>
  </tr>
  <tr>
    <td><strong>Loan Type</strong></td>
    <td><?php echo type($ctp);?></td>
  </tr>
  <tr>
    <td><strong>Loan Amount</strong></td>
    <td><?php echo $ca;?></td>
  </tr>
  <tr>
    <td><strong>Rate</strong></td>
    <td><?php echo $cr;?></td>
  </tr>
  <tr>
    <td><strong>Point</strong></td>
    <td><?php echo $cpo;?></td>
  </tr>
  <tr>
    <td><strong>Term</strong></td>
    <td><?php echo $ct;?></td>
  </tr>
  <tr>
		<td colspan="2">
			<center>
				
				<a href='calculator.php#/loan-calculator/customer-view/<?php echo $loanid;?>' target="_blank"><button id="pre" class="btn btn-success">View More</button><a>
			<!--	<a href="http://loan-calculator.xcartadesigns.com/#/loan-calculator/1" target="_blank"><button id="pre" class="btn btn-success">Modify</button><a> -->
			</center>
		</td>
  </tr>
    </tbody>
			</table>
      
			</div>
	<div class="col-md-6">
<table id="tb" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead style="background-color:#90b63d;">
         <tr>
			<th colspan="2" style="color:#fff;text-align:center;">Loan officer's Suggestion</th>  			  
         </tr>
        </thead>
       <tbody>
		<tr>
		<?php
    $s="SELECT * FROM `loansbackup` where lastUpdatedBy = 'loan officer' and loanId ='$loanid' and updateAt in (select max(updateAt) from loansbackup where lastUpdatedBy = 'loan officer' and loanId ='$loanid')";
	//file_put_contents('./log_'.date("j.n.Y").'.txt', $s, FILE_APPEND);
	foreach($dbh->query($s) as $r){
		
		?>
		<td><strong>Qualifying Credit Score</strong></td>
		<td><?php echo $r['qualifyingCreditScore'];?></td>
		<?php
	}
	
	?>
   </tr>
  <tr>
    <?php
  $s1="SELECT name FROM `borrowershistory` where loanId ='$loanid' and type = 'B' and createdAt in (select max(createdAt) from borrowershistory where loanId ='$loanid')";
  foreach($dbh->query($s1) as $r){
  ?>
    <td><strong>Name</strong></td>
    <td><?php echo $r['name'];?></td>
	
	<?php
  }
	?>
  </tr>
  <?php
  
  $s="SELECT `firstMortgageRate` as rate, `firstMortgagePoints` as point, `firstMortgageTerm` as term, `firstMortgageLoanAmount` as amount, `salesPrice`, `loanType`,`loanMode` FROM `loan_options_history` where id in (select max(id) from loan_options_history where loanId ='$loanid' and `lastUpdatedBy`='loan officer')";
  foreach($dbh->query($s) as $r){
	  $lsp=$r['salesPrice'];
	  $lp=$r['loanMode'];
	  if($lp == 1){
		  $lp='Yes';
	  }else{
		  $lp='No';
	  }
	  $ltp=$r['loanType'];
	  $la=$r['amount'];
	  $lr=$r['rate'];
	  $lpo=$r['point'];
	  $lt=$r['term'];
  }
  ?>
  <tr>
    <td><strong>Sale Price</strong></td>
    <td><?php echo $lsp;?></td>
  </tr>
  <tr>
    <td><strong>Purchase</strong></td>
    <td><?php echo $lp;?></td>
  </tr>
  <tr>
    <td><strong>Loan Type</strong></td>
    <td><?php echo type($ltp);?></td>
  </tr>
  <tr>
    <td><strong>Loan Amount</strong></td>
    <td><?php echo $la;?></td>
  </tr>
  <tr>
    <td><strong>Rate</strong></td>
    <td><?php echo $lr;?></td>
  </tr>
  <tr>
    <td><strong>Point</strong></td>
    <td><?php echo $lpo;?></td>
  </tr>
  <tr>
    <td><strong>Term</strong></td>
    <td><?php echo $lt;?></td>
  </tr>
  <!--<tr>
		<td colspan="2">
			<center><a href="http://loan-calculator.xcartadesigns.com/#/loan-calculator/1" target="_blank"><button id="pre" class="btn btn-success">View More</button><a></center>
		</td>
  </tr>-->
    </tbody>
			</table>
      
			</div>
		</div>
<!--	</div>  -->
	<?php
	}
	?>
	</section>
	
   <?php include('footer.php');?>
  </div> 
  <?php
  if($roll == 'Customer'){
  ?>
 <!-- floating button close -->
   <div id="floatbtn" class="settings">
      <div class="settings-inner" id="inner">
         <div class="settings-ctrl">
           <!-- <em id="change" class="fa fa-arrow-left">Get Help !</em> -->
							<div id="arrow" style="margin-top:4px;margin-left:4px;height:40px;box-shadow:-5px 5px 10px gray;"><i id="change1" class="fa fa-arrow-left" style="margin-top:12px;"></i><strong id="change" style="margin-left:5px;margin-top:10px;">Get Help!</strong></div>
         </div>
         <div class="settings-content">
           <center><h4>Here To assist</h4></center>
  <div class="detail-box" style="overflow-y:auto;height:500px;">
  <?php
  //$query="select * from trusted_partner tp inner join businesstype_master bm on bm.id = tp.business_type where forcedisplay='Yes' and display_date>=CURDATE() ";
  $query="select * from trusted_partner tp inner join businesstype_master bm on bm.id = tp.business_type where (forcedisplay='Yes' and display_date>=CURDATE()) or tp.id in (SELECT mm.partner_id FROM `mypartner_master` mm WHERE mm.loanofficer_id in (SELECT cm.loanofficer_id FROM `customer_master` cm WHERE cm.id='".$_SESSION['id']."'))";
  foreach ($dbh->query($query) as $row)
			{
  ?>
		<div class="client-detail">
    	<div class="col-md-12">
        	<div class="row">
    			<div class="col-md-4"><div class="profile_icon"><img class="" src="<?php echo $row['photo'];?>"></div></div>
        		<div class="col-md-8" class="pull-right">
        			<p class="client-detail-text"><strong>Name:</strong>&nbsp; <?php echo $row['contact_name'];?></p>
        			<p class="client-detail-text"><strong>Business Name:</strong>&nbsp; <?php echo $row['business_name'];?></p>
        			<p class="client-detail-text"><strong>Business Type:</strong>&nbsp; <?php echo $row['businesstype_name'];?></p>
            <p class="client-detail-text"><strong>Phone:</strong>&nbsp; <?php echo $row['phone'];?></p>
            <p class="client-detail-text"><strong>Email:</strong>&nbsp; <?php echo $row['email'];?></p>
            <p class="client-detail-text"><a href="<?php echo $row['twitter_handle'];?>"<i class='fa fa-twitter'></i></a>&nbsp;<a href="<?php echo $row['linkedin_profile'];?>"<i class='fa fa-linkedin'></i></a>&nbsp;<a href="<?php echo $row['facebook_profile'];?>"<i class='fa fa-facebook'></i></a> </p>
			</div>
			
    			</div>
            </div>    
        </div>
		<?php
  }
		?>
						 </div>
         </div>
      </div>
   </div>
 <!-- floating button over -->
 <?php
  }
 ?>
  <script src="app/js/jquery.min.js"></script>
  <script src="app/js/scripts.js"></script>
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
   <script src="vendor/animo.js/animo.js"></script>
   <!-- SLIMSCROLL-->
   <script src="vendor/slimScroll/jquery.slimscroll.min.js"></script>
   <!-- SCREENFULL-->
   <script src="vendor/screenfull/dist/screenfull.js"></script>
   <!-- LOCALIZE-->
   <script src="vendor/jquery-localize-i18n/dist/jquery.localize.js"></script>
   <!-- RTL demo-->
   <script src="app/js/demo/demo-rtl.js"></script>
   <!-- =============== PAGE VENDOR SCRIPTS ===============-->
   <!-- SPARKLINE-->
   <script src="vendor/sparkline/index.js"></script>
   <!-- FLOT CHART-->
   <script src="vendor/flot/jquery.flot.js"></script>
   <script src="vendor/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
   <script src="vendor/flot/jquery.flot.resize.js"></script>
   <script src="vendor/flot/jquery.flot.pie.js"></script>
   <script src="vendor/flot/jquery.flot.time.js"></script>
   <script src="vendor/flot/jquery.flot.categories.js"></script>
   <script src="vendor/flot-spline/js/jquery.flot.spline.min.js"></script>
   <!-- EASY PIE CHART-->
   <script src="vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.js"></script>
   <!-- MOMENT JS-->
   <script src="vendor/moment/min/moment-with-locales.min.js"></script>
   <!-- DEMO-->
   <script src="app/js/demo/demo-flot.js"></script>
   <!-- =============== APP SCRIPTS ===============-->
   <script src="app/js/app.js"></script>
   <script src="app/js/drawer.js"></script>
   <script src="js/index.js"></script>
   
</body>

</html>
<?php
function type($loantype){
	if($loantype == ''){
		return '-';
	}else{
	            if($loantype==1){
					$type='Conv | 3% Down';
				}else if($loantype==2){
					$type='Conv | 5% Down';
				}else if($loantype==3){
					$type='Conv | 10% Down';
				}else if($loantype==4){
					$type='Conv | 20% Down';
				}else if($loantype==5){
					$type='Conv | 80 - 15 - 5';
				}else if($loantype==6){
					$type='Conv | 80 - 10 - 10';
				}else if($loantype==7){
					$type='Conv | Other';
				}else if($loantype==8){
					$type='FHA | 3.5% Down';
				}else if($loantype==9){
					$type='FHA | 10% Down';
				}else if($loantype==10){
					$type='FHA | Other';
				}else if($loantype==11){
					$type='VA | 0% Down';
				}else if($loantype==12){
					$type='VA | Other';
				}else if($loantype==13){
					$type='Special Program | 0% Down';
				}else if($loantype==14){
					$type='Special Program | Other';
				}else if($loantype==15){
					$type='100%';
				}
				
				return $type;
	}
}
?>