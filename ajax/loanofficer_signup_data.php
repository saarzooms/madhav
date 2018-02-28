<?php
include('../db/connection.php');
if(isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['photo']) && isset($_REQUEST['phone']) && isset($_REQUEST['address']) && isset($_REQUEST['state']) && isset($_REQUEST['zipcode'])  && isset($_REQUEST['password']) && isset($_REQUEST['hear']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$photo=$_REQUEST['photo'];
	$phone=$_REQUEST['phone'];
	$address=$_REQUEST['address'];
	$state=$_REQUEST['state'];
	$zipcode=$_REQUEST['zipcode'];
	$lender=$_REQUEST['lender'];
	$password=$_REQUEST['password'];
	$hear=$_REQUEST['hear'];
	
	$msg="";
	$sql="INSERT INTO `loanofficer_master`(`name`, `email`, `photo`, `phone`, `address`, `state`, `zipcode`, `lender`, `password`, `knowus`) 
	VALUES ('$name','$email','$photo','$phone','$address','$state','$zipcode','$lender','$password','$hear')";
	if($dbh->query($sql))
	{ 
		$user_id = $dbh->lastInsertId();
		$str="INSERT INTO `login_master`(`user_id`, `email`, `password`, `user_type`) 
		VALUES ('$user_id','$email','$password','Loanofficer')";
		if($dbh->query($str))
		{ 
			echo $user_id.'-'.$email.'-'.$password;
		}
		
	}
}
?>