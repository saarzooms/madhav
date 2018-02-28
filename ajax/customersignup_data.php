<?php
include('../db/connection.php');
   
if(isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['mobile']) && isset($_REQUEST['address']) && isset($_REQUEST['state']) && isset($_REQUEST['zipcode']) && isset($_REQUEST['password']) && isset($_REQUEST['id']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$mobile=$_REQUEST['mobile'];
	$address=$_REQUEST['address'];
	$state=$_REQUEST['state'];
	$zipcode=$_REQUEST['zipcode'];
	$password=$_REQUEST['password'];
	$officerid=$_REQUEST['id'];
	
	//file_put_contents('./log_'.date("j.n.Y").'.txt', $state.$zipcode, FILE_APPEND);
	$msg="";
	try {
		$sql="INSERT INTO `customer_master`(`loanofficer_id`, `salutation`, `name`, `marital_status`, `spouse_name`, `email`, `phone`, `credit_score`, `address`, `facebookid`, `state`, `zipcode`) 
		VALUES ('$officerid','','$name','','','$email','$mobile','','$address','','$state','$zipcode')";
		
		if($dbh->query($sql))
		{
			$id = $dbh->lastInsertId();
			//$password=random_otp($length = 4);
			$str="INSERT INTO `login_master`(`user_id`, `email`, `password`, `user_type`,`status`) 
			VALUES ('$id','$email','$password','Customer','0')";
			if($dbh->query($str))
			{ 
					$msg="You Have Successfully Signup";
				    echo $msg;
					//header("location: http://loan-calculator.xcartadesigns.com/#/loan-calculator/".$officerid."");
					//header("location: ../login.php");
					?>
					<script>
					var url = getRootUrl();  
					//window.location.href=url+"material/login.php";
					window.location.href="\login.php";
					function getRootUrl() {
						return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
					}
					</script>
					<?php
		
			}
		}
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}
?>